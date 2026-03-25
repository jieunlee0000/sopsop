import "./PhilosophySection.scss";

const data = [
  {
    letter: "A",
    title: "Radiant Presence",
    desc: "1987년 멜버른에서 시작된 이솝의 여정은 식물성 재료와 과학적 성분을 조화시켜 삶의 공간을 밝히는 존재감을 선사합니다.시간의 흐름을 받아들이며 내면의 아름다움을 가꾸는 정중한 태도는,  단순한 개선을 넘어 삶을 대하는 지적이고 우아한 자세를 완성합니다.",
  },
  {
    letter: "e",
    title: "Balanced Formula",
    desc: "피부에 전해지는 실질적 효과와 감각적 즐거움 사이의 완벽한 균형. 단순히 많은 성분을 담기보다 각 성분의 조화와 시너지를 위해 세밀하게 설계합니다. 엄격한 임상으로 확인된 성분만을 선별하여  매일 마주하는 제품에 대한 깊은 신뢰와 안심을 더하는 약속입니다.",
  },
  {
    letter: "s",
    title: "Sincere Interest",
    desc: "제품의 기획부터 패키징, 전달되는 모든 순간까지 이솝을 구성하는 근간이 됩니다. 환경에 미치는 영향을 최소화하는 지속 가능한 소재 탐구는 다음 세대를 향한 배려입니다.이러한 진정성 있는 관심은 단순한 기여를 넘어 선한 영향력으로 우리 삶에 스며듭니다. 지속 가능한 디자인에 대한 관심은 이솝이 걷는 모든 길의 이정표가 됩니다.",
  },
  {
    letter: "o",
    title: "Original Sanctuary",
    desc: "이솝의 스토어는 지역 사회와 조화롭게 녹아들어 가치를 더합니다. 현지의 소재와 장인 정신을 담아 세상에 단 하나뿐인 공간을 빚어내고, 절제된 미학은 복잡한 일상 속에서 잠시 숨을 고를 수 있는 시간을 선사합니다. 독창적인 건축 설계는 방문하는 모든 이들에게 고유하고 평온한 안식처가 됩니다. 이솝을 만나는 모든 이에게 영감을 줍니다.",
  },
  {
    letter: "p",
    title: "Poetic Philosophy",
    desc: "우리는 문학과 예술에서 영감을 얻으며 지적인 탐구와 내면의 깊이를 채웁니다. 유행처럼 소모되는 화려함 대신 시간이 흐를수록 깊어지는 본질적 가치를 믿으며, 일상의 단면을 예술적 감각으로 조명해 삶을 더욱 풍요롭고 단단하게 만듭니다.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="philosophy">
      {data.map((item) => (
        <div key={item.letter} className="philosophy__item">
          <span className="philosophy__letter" aria-hidden="true">
            {item.letter}
          </span>
          <div className="philosophy__content">
            <span className="philosophy__label">Presence</span>
            <h2 className="philosophy__title">{item.title}</h2>
            <p className="philosophy__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PhilosophySection;
