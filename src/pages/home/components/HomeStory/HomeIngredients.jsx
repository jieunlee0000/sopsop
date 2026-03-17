import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function HomeIngredients() {
    const bottleSectionRef = useRef(null);
    const bottlePathRef = useRef(null);
    const bottleImgRef = useRef(null);

    useGSAP(() => {
        // Bottle Line Drawing Animation
        const path = bottlePathRef.current;
        if (path) {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bottleSectionRef.current,
                    start: 'top top',
                    end: '+=150%',
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(path, { strokeDashoffset: 0, duration: 2 })
                .to(bottleImgRef.current, { opacity: 1, duration: 1 })
                .to(path, { opacity: 0, duration: 0.5 }, '-=0.5');
        }
    }, { scope: bottleSectionRef });

    return (
        <section className="home__ingredients" ref={bottleSectionRef}>
            <div className="home__ingredients-visual">
                <svg viewBox="0 0 1440 600" className="home__ingredients-svg" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <path id="textCurve" d="M 150 50 C 150 450, 500 500, 850 300" />
                        <path id="line1" ref={bottlePathRef} d="M 150 50 C 150 450, 500 500, 850 240 C 1100 110, 1150 420, 1300 420" />
                        <path id="line2" d="M 160 50 C 160 460, 490 520, 850 280 C 1100 160, 1150 420, 1300 420" />
                        <path id="line3" d="M 170 50 C 170 470, 480 540, 850 320 C 1100 210, 1150 420, 1300 420" />
                        <path id="line4" d="M 180 50 C 180 480, 470 560, 850 360 C 1100 260, 1150 420, 1300 420" />
                    </defs>
                    <use href="#line1" fill="none" stroke="#603b2d" strokeWidth="1" opacity="0.4" />
                    <use href="#line2" fill="none" stroke="#603b2d" strokeWidth="1" opacity="0.4" />
                    <use href="#line3" fill="none" stroke="#603b2d" strokeWidth="1" opacity="0.4" />
                    <use href="#line4" fill="none" stroke="#603b2d" strokeWidth="1" opacity="0.4" />

                    <text className="font-serif home__ingredients-text" fill="#603b2d">
                        <textPath href="#textCurve" startOffset="2%">
                            'If the Path be beautiful, let us not ask where it leads.'
                        </textPath>
                    </text>
                </svg>

                <div className="home__ingredients-circles flex-col">
                    <div className="circle-item">
                        <span className="circle-label font-serif" style={{ color: '#b5a195' }}>Rosemary Leaf</span>
                        <div className="circle-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80)' }}></div>
                    </div>
                    <div className="circle-item">
                        <span className="circle-label font-serif" style={{ color: '#887469' }}>Chamomile</span>
                        <div className="circle-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80)' }}></div>
                    </div>
                    <div className="circle-item">
                        <span className="circle-label font-serif" style={{ color: '#a3ad92' }}>Bergamot</span>
                        <div className="circle-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80)' }}></div>
                    </div>
                    <div className="circle-item">
                        <span className="circle-label font-serif" style={{ color: '#b9a8cf' }}>Lavender</span>
                        <div className="circle-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80)' }}></div>
                    </div>
                </div>

                <div className="home__ingredients-bottle">
                    <div className="bottle-outline"></div>
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80" alt="Bottle" ref={bottleImgRef} style={{ opacity: 0 }} />
                </div>
            </div>
        </section>
    );
}

export default HomeIngredients;
