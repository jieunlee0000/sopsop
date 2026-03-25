import "./Marquee.scss";

const images = [
  { src: "/images/about/slice01.png", alt: "Aesop gallery 1" },
  { src: "/images/about/slice02.png", alt: "Aesop gallery 2" },
  { src: "/images/about/slice03.png", alt: "Aesop gallery 3" },
  { src: "/images/about/slice04.png", alt: "Aesop gallery 4" },
  { src: "/images/about/slice05.png", alt: "Aesop gallery 5" },
  { src: "/images/about/slice06.png", alt: "Aesop gallery 6" },
];

const Marquee = () => {
  const doubled = [...images, ...images];

  return (
    <div className="marquee">
      <span className="marquee__bg-text" aria-hidden="true">Anatole France</span>
      <div className="marquee__track">
        {doubled.map((img, i) => (
          <div key={i} className="marquee__item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
