import { useEffect, useState } from "react";

const promociones = [
  { id: 1, src: "/src/assets/SLIDER (1).png", alt: "Promoción 1" },
  { id: 2, src: "/src/assets/SLIDER (2).png", alt: "Promoción 2" },
  { id: 3, src: "/src/assets/SLIDER (3).png", alt: "Promoción 3" },
];

export default function SlidesPromos() {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);

  const nextPromo = () => {
    setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promociones.length);
  };

  const prevPromo = () => {
    setCurrentPromoIndex(
      (prevIndex) => (prevIndex - 1 + promociones.length) % promociones.length
    );
  };

  useEffect(() => {
    const promoInterval = setInterval(() => {
      nextPromo();
    }, 5000);
    return () => clearInterval(promoInterval);
  }, []);

  return (
    <div className="relative sm:mb-24 mb-10 sm:mt-20 mt-10">
      <div className="w-full h-1/2 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPromoIndex * 100}%)` }}
        >
          {promociones.map((promo) => (
            <div key={promo.id} className="w-full flex-shrink-0">
              <img className="w-full object-cover" src={promo.src} alt={promo.alt} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevPromo} className="absolute left-12 top-1/2 transform -translate-y-1/2">
        <img src="/src/assets/A IZQ.png" alt="Previous" className="sm:w-12 w-6 sm:h-12 h-6" />
      </button>
      <button onClick={nextPromo} className="absolute left-1/2 transform -translate-y-1/2 bottom-4">
        <img src="/src/assets/DOWN.png" alt="Down" className="sm:w-12 w-6 sm:h-12 h-6" />
      </button>
      <button onClick={nextPromo} className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <img src="/src/assets/A DER.png" alt="Next" className="sm:w-12 w-6 sm:h-12 h-6" />
      </button>
    </div>
  );
}
