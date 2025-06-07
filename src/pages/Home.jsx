import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Datos simulados (mock data)
const promociones = [
  {
    id: 1,
    src: "/src/assets/SLIDER (1).png",
    alt: "Promoción 1",
  },
  {
    id: 2,
    src: "/src/assets/SLIDER (2).png",
    alt: "Promoción 2",
  },
  {
    id: 3,
    src: "/src/assets/SLIDER (3).png",
    alt: "Promoción 3",
  },
];

const descuentos = [
  {
    id: 1,
    src: "/src/assets/PRODUCTO (1).png",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 2,
    src: "/src/assets/PRODUCTO (2).png",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 3,
    src: "/src/assets/PRODUCTO (3).png",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
  {
    id: 4,
    src: "/src/assets/PRODUCTO (4).png",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 5,
    src: "/src/assets/PRODUCTO (5).png",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 6,
    src: "/src/assets/PRODUCTO (6).png",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
  {
    id: 7,
    src: "/src/assets/PRODUCTO (7).png",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 8,
    src: "/src/assets/PRODUCTO (8).png",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 9,
    src: "/src/assets/PRODUCTO (1).png",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
];

const catalogo = {
  categorias: [
    { id: 1, src: "/src/assets/CATEGORIA MUJER.png", name: "MUJER" },
    { id: 2, src: "/src/assets/CATEGORIA HOMBRE.png", name: "HOMBRE" },
    { id: 3, src: "/src/assets/CATEGORIA NIÑA.png", name: "NIÑA" },
    { id: 4, src: "/src/assets/CATEGORIA NIÑO.png", name: "NIÑO" },
  ],
}

export default function Home() {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [currentDiscountPage, setCurrentDiscountPage] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const nextPromo = () => {
    setCurrentPromoIndex((prevIndex) => (prevIndex + 1) % promociones.length);
  };

  const prevPromo = () => {
    setCurrentPromoIndex(
      (prevIndex) => (prevIndex - 1 + promociones.length) % promociones.length
    );
  };

  const nextDiscountPage = () => {
    if ((currentDiscountPage + 1) * itemsPerPage < descuentos.length) {
      setCurrentDiscountPage(currentDiscountPage + 1);
    }
  };

  const prevDiscountPage = () => {
    if (currentDiscountPage > 0) {
      setCurrentDiscountPage(currentDiscountPage - 1);
    }
  };

  const handleCardClick = (descuentoId) => {
    navigate(`/producto/${descuentoId}`);
  };

  const handleSubCategoryClick = (category, subCategoryName) => {
    const formattedName = subCategoryName.toLowerCase().replace(/ /g, "-"); // Convierte "Blusas" a "blusas"
    navigate(`/catalogo/${category}/${formattedName}`);
  };

  useEffect(() => {
    const promoInterval = setInterval(() => {
      nextPromo(); // Llama a la función que cambia la promoción
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(promoInterval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  const startIndex = currentDiscountPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDiscounts = descuentos.slice(startIndex, endIndex);

  return (
    <div className="">
      {/* Slider de promociones */}
      <div className="relative mb-24 mt-20">
        <div className="w-full h-[500px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPromoIndex * 100}%)` }}
          >
            {promociones.map((promo) => (
              <div key={promo.id} className="w-full flex-shrink-0">
                <img
                  className="w-full object-cover"
                  src={promo.src}
                  alt={promo.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevPromo}
          className="absolute left-12 top-1/2 transform -translate-y-1/2 text-black rounded-full text-7xl hover:scale-150"
        >
          <img
            src="/src/assets/A IZQ.png"
            alt="Previous"
            className="w-12 h-12"
          />
        </button>
        <button
          onClick={nextPromo}
          className="absolute left-1/2 transform -translate-y-1/2 bottom-4 text-black rounded-full text-7xl hover:scale-150"
        >
          <img
            src="/src/assets/DOWN.png"
            alt="Down"
            className="w-12 h-12"
          />
        </button>
        <button
          onClick={nextPromo}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-black rounded-full text-7xl hover:scale-150"
        >
          <img
            src="/src/assets/A DER.png"
            alt="Next"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Sección de descuentos */}
      <div className="mb-20 px-20">
        <h2 className="text-3xl font-semibold mb-4 text-[#ff1654]">
          OFERTAS hasta 50%
        </h2>
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentDiscounts.map((descuento) => (
              <div
                key={descuento.id}
                onClick={() => handleCardClick(descuento.id)}
                className="hover:scale-110 shadow-md mb-5"
              >
                <img
                  src={descuento.src}
                  alt={`Descuento ${descuento.id}`}
                  className="w-full object-cover"
                />
                <div className="my-2 pl-4 text-sm">
                  <p className="text-base">{descuento.name}</p>
                  <p className="text-[#ff1654] font-bold">{descuento.price}<label className="ml-1 p-0.5 bg-[#ff1654] text-white">-30%</label></p>
                  <p className="font-extrabold line-through">{descuento.vendor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha de navegación a la izquierda */}
          {currentDiscountPage > 0 && (
            <button
              onClick={prevDiscountPage}
              className="absolute top-1/2 pb-1 h-16 w-16 transform -translate-y-1/2 -ml-12"
            >
              <img
                src="/src/assets/B IZQ.png"
                alt="Next"
                className="w-8 h-8"
              />
            </button>
          )}

          {/* Flecha de navegación a la derecha */}
          {(currentDiscountPage + 1) * itemsPerPage < descuentos.length && (
            <button
              onClick={nextDiscountPage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-12"
            >
              <img
                src="/src/assets/B DER.png"
                alt="Next"
                className="w-8 h-8"
              />
            </button>
          )}
        </div>
      </div>
      {/* Sección de catálogo */}
      <div className="px-20 mb-24">
        <h2 className="text-3xl font-semibold text-[#ff1654]">CATEGORIAS</h2>
        {/* Muestra productos por categorías */}
        {Object.keys(catalogo).map((category) => (
          <div key={category} className="mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {catalogo[category].map((producto) => (
                <div
                  key={producto.id}
                  onClick={() => handleSubCategoryClick(category, producto.name)}
                  className="shadow-md text-center hover:scale-110"
                >
                  <img
                    src={producto.src}
                    alt={`Producto ${producto.name}`}
                    className="w-full object-cover"
                  />
                  <p className="text-lg my-5 font-semibold">{producto.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
