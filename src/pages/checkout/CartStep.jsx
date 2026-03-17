// ========================================
// CartStep - 장바구니 (Step 1)
// ========================================

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { ShoppingBag } from "lucide-react";
import useStore from "../../store/useStore";
import { productData } from "../../assets/api/productData";
import CartItem from "./CartItem";

const sampleList = [
  {
    id: "s-001",
    name: "파슬리 씨드 안티 옥시던트 하이드레이터",
    image: "/images/checkout/cart_sample.png",
  },
  {
    id: "s-002",
    name: "이그젝티드 아이 세럼",
    image: "/images/checkout/cart_sample.png",
  },
  {
    id: "s-003",
    name: "라인드 컨센트레이트 바디 밤",
    image: "/images/checkout/cart_sample.png",
  },
  {
    id: "s-004",
    name: "비 트리플 씨 페이셜 밸런싱 젤",
    image: "/images/checkout/cart_sample.png",
  },
];

const MAX_SAMPLES = 3;

function CartStep({ onNext }) {
  const { user, cartItems, getTotalPrice, addToCart } = useStore();
  const [selectedSamples, setSelectedSamples] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [shippingModal, setShippingModal] = useState(false);

  const recommendedProducts = useMemo(() => {
    return [...productData].sort(() => Math.random() - 0.5).slice(0, 4);
  }, []);

  const discountAmount = useMemo(() => {
    const total = getTotalPrice();
    if (selectedCoupon === "10") return Math.floor(total * 0.1);
    return 0;
  }, [selectedCoupon, getTotalPrice]);

  const handleSampleToggle = (id) => {
    setSelectedSamples((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= MAX_SAMPLES) return prev;
      return [...prev, id];
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>장바구니가 비어 있습니다.</p>
        <Link to="/product" className="cart-empty__btn">
          쇼핑 계속하기
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-cart">
      <div className="checkout-cart__left">
        <div className="cart-title-row">
          <h2 className="cart-title">{user?.name || "고객"}님의 장바구니</h2>
          <button
            className="cart-shipping-info"
            onClick={() => setShippingModal(true)}
          >
            이솝의 실용적인 배송 방법 <GoQuestion size={18} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.cartId} item={item} />
          ))}
        </div>

        <div className="cart-samples">
          <h3 className="cart-samples__title">
            무료 샘플을 추가해주세요 {selectedSamples.length}/{MAX_SAMPLES}
          </h3>
          <div className="cart-samples__list">
            {sampleList.map((sample) => (
              <div
                key={sample.id}
                className={`cart-sample-item ${selectedSamples.includes(sample.id) ? "is-selected" : ""}`}
                onClick={() => handleSampleToggle(sample.id)}
              >
                <img src={sample.image} alt={sample.name} />
                <p>{sample.name}</p>
                <span className="cart-sample-item__check"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-recommend">
          <h3 className="cart-recommend__title">함께보면 좋은 제품</h3>
          <div className="cart-recommend__list">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="cart-recommend-item">
                <button
                  className="cart-recommend-item__cart"
                  onClick={() =>
                    addToCart({
                      cartId: `${product.id}-${product.volumes[0].volume}`,
                      productId: product.id,
                      name: product.name,
                      price: product.volumes[0].price,
                      volume: product.volumes[0].volume,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                >
                  <ShoppingBag size={18} />
                </button>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <p className="cart-recommend-item__name">{product.name}</p>
                <p className="cart-recommend-item__price">
                  {product.volumes[0].price.toLocaleString()}원
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="checkout-cart__right">
        <div className="cart-coupon">
          <h3 className="cart-coupon__title">쿠폰 적용</h3>
          <div className="cart-coupon__select-wrap">
            {" "}
            {/* wrapper 추가 */}
            <select
              className="cart-coupon__select"
              value={selectedCoupon}
              onChange={(e) => setSelectedCoupon(e.target.value)}
            >
              <option value="">선택</option>
              <option value="10">10% 할인</option>
              <option value="free">무료배송</option>
            </select>
            <IoIosArrowDown className="cart-coupon__arrow" />
          </div>
        </div>

        <div className="cart-summary">
          <h3 className="cart-summary__title">결제 금액</h3>
          <div className="cart-summary__row">
            <span>상품 금액</span>
            <span>{getTotalPrice().toLocaleString()}원</span>
          </div>
          <div className="cart-summary__row">
            <span>쿠폰</span>
            <span>
              {discountAmount > 0
                ? `-${discountAmount.toLocaleString()}원`
                : "0원"}
            </span>
          </div>
          <div className="cart-summary__row">
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div className="cart-summary__row cart-summary__total">
            <span>합계</span>
            <span>{(getTotalPrice() - discountAmount).toLocaleString()}원</span>
          </div>
          <button className="cart-order-btn" onClick={onNext}>
            주문하기
          </button>
        </div>
      </div>

      {shippingModal && (
        <div
          className="shipping-modal-overlay"
          onClick={() => setShippingModal(false)}
        >
          <div className="shipping-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="shipping-modal__close"
              onClick={() => setShippingModal(false)}
            >
              ✕
            </button>
            <h3 className="shipping-modal__title">이솝의 실용적인 배송 방법</h3>
            <div className="shipping-modal__content">
              <p>
                주문 후 <strong>1-3 영업일</strong> 이내 출고됩니다.
              </p>
              <p>
                배송비는 <strong>무료</strong>입니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartStep;
