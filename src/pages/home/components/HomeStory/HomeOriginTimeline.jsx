function HomeOriginTimeline() {
    return (
        <section className="home__origin-timeline">
            <div className="home__origin-inner">
                {/* Vertical Line */}
                <div className="home__origin-line"></div>

                {/* Part 1: Genesis */}
                <div className="home__origin-block">
                    <div className="home__origin-nav">
                        <span className="active">Genesis</span>
                        <span>Heritage</span>
                        <span>Presence</span>
                    </div>
                    <div className="home__origin-icon">
                        <svg viewBox="0 0 100 120" className="origin-svg">
                            <path d="M50,20 C45,20 35,25 30,35 C25,45 25,55 35,65 C45,75 50,85 50,100" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M50,25 C55,20 65,25 70,35 C75,45 75,55 65,65 C55,75 50,85 50,100" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M50,35 L40,40 M50,45 L35,52 M50,55 L40,62" fill="none" stroke="#603b2d" strokeWidth="0.8" />
                            <path d="M50,35 L60,40 M50,45 L65,52 M50,55 L60,62" fill="none" stroke="#603b2d" strokeWidth="0.8" />
                            <path d="M50,100 C55,100 60,105 58,110 C56,115 50,115 50,110" fill="none" stroke="#603b2d" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="home__origin-content">
                        <h3 className="font-serif origin-year">1987</h3>
                        <h4 className="origin-title">호주의 미용사 데니스 파파티스 <strong>식물성 추출물</strong>에 주목</h4>
                        <p>Founded in Melbourne, Aesop evolved from a hair salon into a botanical skincare icon, driven by a desire to trade harsh chemicals for natural purity.</p>
                    </div>
                </div>

                {/* Part 2: Heritage */}
                <div className="home__origin-block">
                    <div className="home__origin-nav">
                        <span>Genesis</span>
                        <span className="active">Heritage</span>
                        <span>Presence</span>
                    </div>
                    <div className="home__origin-icon">
                        <svg viewBox="0 0 100 120" className="origin-svg">
                            <path d="M50,20 L50,100" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M50,40 C30,35 25,45 20,55 C15,65 30,75 50,70" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M50,40 C70,35 75,45 80,55 C85,65 70,75 50,70" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M50,45 C35,42 30,50 25,58 C20,66 35,72 50,68" fill="none" stroke="#603b2d" strokeWidth="0.8" opacity="0.7" />
                            <path d="M50,45 C65,42 70,50 75,58 C80,66 65,72 50,68" fill="none" stroke="#603b2d" strokeWidth="0.8" opacity="0.7" />
                        </svg>
                    </div>
                    <div className="home__origin-content">
                        <h3 className="font-serif origin-year">Fables</h3>
                        <h4 className="origin-title">우화 작가 이솝(Aesop)의 이름에서 비롯된 <strong>깊은 철학</strong></h4>
                        <p>Named after the Greek fabulist Aesop, we embody the wisdom of a fable. Our philosophy seeks to deliver profound resonance through minimalist simplicity.</p>
                    </div>
                </div>

                {/* Part 3: Presence */}
                <div className="home__origin-block">
                    <div className="home__origin-nav">
                        <span>Genesis</span>
                        <span>Heritage</span>
                        <span className="active">Presence</span>
                    </div>
                    <div className="home__origin-icon">
                        <svg viewBox="0 0 100 120" className="origin-svg">
                            <path d="M50,20 L50,110" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M30,55 L50,40 L70,55 L70,85 L30,85 Z" fill="none" stroke="#603b2d" strokeWidth="1" />
                            <path d="M25,60 L50,42 L75,60 L75,90 L25,90 Z" fill="none" stroke="#603b2d" strokeWidth="0.8" opacity="0.6" />
                        </svg>
                    </div>
                    <div className="home__origin-content">
                        <h3 className="font-serif origin-year">Aesop</h3>
                        <h4 className="origin-title">지역의 <strong>고유함</strong>을 존중하는 전 세계 <strong>단 하나뿐</strong>인 이솝의 공간들</h4>
                        <p>For 30 years, Aesop has curated unique spaces that honor local heritage. As a result, no two Aesop stores are alike anywhere in the world.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeOriginTimeline;
