import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function HomePhilosophy() {
    const philosophyRef = useRef(null);

    useGSAP(() => {
        gsap.from('.home__pv-item', {
            scrollTrigger: {
                trigger: philosophyRef.current,
                start: 'top 70%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
        });
    }, { scope: philosophyRef });

    return (
        <section className="home__philosophy-vertical" ref={philosophyRef}>
            <div className="home__pv-inner">
                {/* Vertical Line */}
                <div className="home__pv-line"></div>

                {/* Item 1 */}
                <div className="home__pv-item">
                    <div className="home__pv-img">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Nature Refined" />
                    </div>
                    <div className="home__pv-content">
                        <h3 className="font-serif">Nature Refined</h3>
                        <h4>자연과 과학이 빚어낸 스킨케어</h4>
                        <p>Experience the perfect blend of botanical purity and scientific precision, meticulously formulated for your skin, hair, and body care needs.</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="home__pv-item">
                    <div className="home__pv-img">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Essential Aesthetics" />
                    </div>
                    <div className="home__pv-content">
                        <h3 className="font-serif">Essential Aesthetics</h3>
                        <h4>본질에 집중하는 절제의 미학</h4>
                        <p>A refined pursuit of purity that strips away the unnecessary, revealing the profound elegance of a skin care essence through mindful simplicity.</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="home__pv-item">
                    <div className="home__pv-img">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Inspiring Rituals" />
                    </div>
                    <div className="home__pv-content">
                        <h3 className="font-serif">Inspiring Rituals</h3>
                        <h4>영감을 채우는 지적이고 감각적인 여정</h4>
                        <p>A sophisticated journey of intellect and sense, curated to awaken your inspirations in the beauty of every moment.</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="home__pv-item">
                    <div className="home__pv-img">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Ethical Commitments" />
                    </div>
                    <div className="home__pv-content">
                        <h3 className="font-serif">Ethical Commitments</h3>
                        <h4>지구와 생명을 존중하는 확고한 발걸음</h4>
                        <p>A steadfast journey dedicated to honoring our planet and all living beings through conscious choices and unwavering integrity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePhilosophy;
