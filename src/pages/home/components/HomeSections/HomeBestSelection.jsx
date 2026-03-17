import { Link } from 'react-router-dom';

function HomeBestSelection() {
    return (
        <section className="home__best">
            <div className="inner">
                <div className="home__best-container">
                    <div className="home__best-visual">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Aesop Best Selection Bottles" />
                    </div>
                    <div className="home__best-content">
                        <h3 className="font-serif">The Aesop<br /><span>Best Selection</span></h3>
                        <p>유행을 타지 않는 이솝의 철학과 피부 과학이 만나 탄생한 시대를 초월하여<br />사랑받는 상징적인 제품들을 소개합니다.</p>
                        <Link to="/product/best" className="home__best-btn">바로가기</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBestSelection;
