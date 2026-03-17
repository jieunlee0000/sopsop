import { Link } from 'react-router-dom';

function HomeGifts() {
    return (
        <>
            {/* ===== 7. Gift Guide (기프트 가이드) ===== */}
            <section className="home__gift">
                <div className="inner">
                    <div className="home__gift-content">
                        <h3 className="font-serif">Gift Guide</h3>
                        <p>
                            특별한 날, 소중한 분을 위해 준비한 이솝 기프트 컬렉션.<br />
                            세심한 배려가 담긴 선물을 제안합니다.
                        </p>
                        <Link to="/gift" className="home__cta-btn">기프트 구경하기</Link>
                    </div>
                </div>
            </section>

            {/* ===== 8. Featured Gifts (대표 기프트 제품) ===== */}
            <section className="home__featured-gifts">
                {/* Wavy background lines for Featured Gifts */}
                <div className="home__fg-bg">
                    <svg viewBox="0 0 1440 1200" fill="none" preserveAspectRatio="none">
                        <path d="M 0 200 Q 360 100 720 200 T 1440 200" stroke="#603b2d" strokeWidth="1" opacity="0.6" />
                        <path d="M 0 600 Q 360 700 720 600 T 1440 600" stroke="#603b2d" strokeWidth="1" opacity="0.6" />
                        <path d="M 0 1000 Q 360 900 720 1000 T 1440 1000" stroke="#603b2d" strokeWidth="1" opacity="0.6" />
                    </svg>
                </div>

                <div className="inner">
                    <div className="home__fg-list">
                        {/* Item 1 */}
                        <div className="home__fg-item">
                            <div className="home__fg-img">
                                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="An Everyday Essential for a Balanced Life" />
                            </div>
                            <h3 className="font-serif">An Everyday Essential for a Balanced Life</h3>
                            <p>가장 많이 사랑받는 구성 속에 담긴 변치 않는 가치<br />실패 없는 선택을 넘어 정중한 환대의 마음까지 선물하세요.</p>
                            <Link to="/gift" className="home__fg-btn">바로가기</Link>
                        </div>

                        {/* Item 2 */}
                        <div className="home__fg-item">
                            <div className="home__fg-img">
                                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="A Thoughtful Gesture of Quiet Sincerity" />
                            </div>
                            <h3 className="font-serif">A Thoughtful Gesture of Quiet Sincerity</h3>
                            <p>부담 없이 전하는 진심 속에 담긴 사유의 흔적.<br />작은 손길 하나로 당신의 감각적인 안목을 증명하는 선물입니다.</p>
                            <Link to="/gift" className="home__fg-btn">바로가기</Link>
                        </div>

                        {/* Item 3 */}
                        <div className="home__fg-item">
                            <div className="home__fg-img">
                                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80" alt="A Scent for Lasting Memories" />
                            </div>
                            <h3 className="font-serif">A Scent for Lasting Memories</h3>
                            <p>가장 많이 사랑받는 구성 속에 담긴 변치 않는 가치<br />실패 없는 선택을 넘어 향기로운 기억까지 선물하세요.</p>
                            <Link to="/gift" className="home__fg-btn">바로가기</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeGifts;
