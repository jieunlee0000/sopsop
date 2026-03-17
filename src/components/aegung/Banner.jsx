import './Banner.scss';

const Banner = () => {

    return (
        <section className="banner">

            {/* 구름 장식 */}
            <img className="banner__bg" src="/images/aegung/99-Banner/Banner.svg" alt="" />
    
            {/* 텍스트 영역 */}
            <div className="banner__content">
                <div className="banner__top">
                    <strong className="banner__label">[Product]</strong>
                    <h2 className="banner__title"><span>Gung</span>의 시간을 품은 향</h2>
                </div>
                <p className="banner__desc">
                    수백 년의 시간을 묵묵히 견뎌온 궁궐의 단단함과 고아함을
                    <br />
                    이솝의 상징적인 기프트 패키지에 담았습니다.
                </p>
            </div>
        </section>
    );
};

export default Banner;