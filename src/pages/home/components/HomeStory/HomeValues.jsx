import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VALUES_LINE_X = 552;
const VALUES_ITEM_HEIGHT = 1024;
const VALUES_FRAME_WIDTH = 1905;

function HomeValues() {
    const sectionRef = useRef(null);
    const linePathRef = useRef(null);
    const valuesCount = 4;

    useGSAP(() => {
        if (linePathRef.current) {
            const path = linePathRef.current;
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom center',
                    scrub: true,
                },
            });
        }

        gsap.from('.home__values-item', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
        });
    }, { scope: sectionRef });

    return (
        <section className="home__values" ref={sectionRef}>
            <div className="home__values-inner">
                <div className="home__values-svg-wrap">
                    <svg
                        viewBox={`0 0 ${VALUES_FRAME_WIDTH} ${valuesCount * VALUES_ITEM_HEIGHT}`}
                        preserveAspectRatio="none"
                        className="home__values-svg"
                    >
                        <path
                            ref={linePathRef}
                            className="home__values-line-path"
                            d={`M${VALUES_LINE_X} 0 L${VALUES_LINE_X} ${valuesCount * VALUES_ITEM_HEIGHT}`}
                            strokeOpacity="0.4"
                            strokeWidth="2"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>

                <div className="home__values-item">
                    <div className="home__values-image">
                        <img src="images/value_item1.jpg" alt="Nature Refined" />
                    </div>
                    <div className="home__values-content">
                        <h3 className="font-serif">Nature Refined</h3>
                        <h4>자연과 과학이 빚어낸 정교한 균형</h4>
                        <p>
                            Experience the perfect blend of botanical purity and scientific
                            precision, meticulously formulated for your skin, hair, and body care
                            needs.
                        </p>
                    </div>
                </div>

                <div className="home__values-item">
                    <div className="home__values-image">
                        <img src="images/value_item2.jpg" alt="Essential Aesthetics" />
                    </div>
                    <div className="home__values-content">
                        <h3 className="font-serif">Essential Aesthetics</h3>
                        <h4>본질을 지향하는 절제된 미학</h4>
                        <p>
                            A refined pursuit of purity that strips away the unnecessary, revealing
                            the profound elegance of a skin care essence through mindful simplicity.
                        </p>
                    </div>
                </div>

                <div className="home__values-item">
                    <div className="home__values-image">
                        <img src="images/value_item3.jpg" alt="Inspiring Rituals" />
                    </div>
                    <div className="home__values-content">
                        <h3 className="font-serif">Inspiring Rituals</h3>
                        <h4>영감을 채우는 지적이고 감각적인 여정</h4>
                        <p>
                            A sophisticated journey of intellect and sense, curated to awaken your
                            inspirations in the beauty of every moment.
                        </p>
                    </div>
                </div>

                <div className="home__values-item">
                    <div className="home__values-image">
                        <img src="images/value_item4.jpg" alt="Ethical Commitments" />
                    </div>
                    <div className="home__values-content">
                        <h3 className="font-serif">Ethical Commitments</h3>
                        <h4>지구와 생명을 존중하는 확고한 원칙</h4>
                        <p>
                            A steadfast journey dedicated to honoring our planet and all living
                            beings through conscious choices and unwavering integrity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeValues;
