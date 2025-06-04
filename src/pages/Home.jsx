import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Datos simulados (mock data)
const promociones = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
    alt: "Promoción 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
    alt: "Promoción 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    alt: "Promoción 3",
  },
];

const descuentos = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
  {
    id: 7,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en auriculares",
    price: "$19.99",
    vendor: "Vendedor 1",
  },
  {
    id: 8,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en cámaras",
    price: "$29.99",
    vendor: "Vendedor 2",
  },
  {
    id: 9,
    src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
    name: "Descuento en relojes",
    price: "$39.99",
    vendor: "Vendedor 3",
  },
];

const catalogo = {
  mujer: [
    { id: 1, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Vestidos" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Conjuntos" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Blusas" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Pantalones" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Faldas" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Ropa Interior" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Pijamas" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Chamarras" },
    { id: 9, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sueters" },
    { id: 10, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Jeans" },
    { id: 11, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Accesorios" },
  ],
  hombre: [
    { id: 1, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Playeras" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Conjuntos" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Pantalones" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sudaderas" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Ropa Interior" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Pijamas" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Chamarras" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Accesorios" },
  ],
  niñas: [
    { id: 1, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Vestidos" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Conjuntos" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Blusas" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Pantalones" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Faldas" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Ropa Interior" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Pijamas" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Chamarras" },
    { id: 9, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sueters" },
    { id: 10, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Jeans" },
    { id: 11, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Accesorios" },
  ],
  niños: [
    { id: 1, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Playeras" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Conjuntos" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Pantalones" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sudaderas" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Ropa Interior" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Pijamas" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Chamarras" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Accesorios" },
  ],
  plus: [
    { id: 1, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Vestidos" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Conjuntos" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Blusas" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Pantalones" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Faldas" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Ropa Interior" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Pijamas" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg", name: "Chamarras" },
    { id: 9, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sueters" },
    { id: 10, src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg", name: "Sudaderas" },
    { id: 11, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Jeans" },
    { id: 12, src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", name: "Accesorios" },
  ],
};

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
          className="absolute left-12 top-1/2 transform -translate-y-1/2 text-black p-40 rounded-full text-7xl hover:scale-150"
        >
          &lt;
        </button>
        <button
          onClick={nextPromo}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-black p-40 rounded-full text-7xl hover:scale-150"
        >
          &gt;
        </button>
      </div>

      {/* Sección de descuentos */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Descuentos Especiales
        </h2>
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentDiscounts.map((descuento) => (
              <div
                key={descuento.id}
                onClick={() => handleCardClick(descuento.id)}
                className="flex-none bg-white hover:bg-gray-200 hover:scale-110 shadow-md rounded-lg p-4"
              >
                <img
                  src={descuento.src}
                  alt={`Descuento ${descuento.id}`}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-lg font-semibold">{descuento.name}</p>
                  <p className="text-xl font-bold">{descuento.price}</p>
                  <p className="text-sm text-gray-600">{descuento.vendor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha de navegación a la izquierda */}
          {currentDiscountPage > 0 && (
            <button
              onClick={prevDiscountPage}
              className="absolute left-2 top-1/2 pb-1 h-16 w-16 transform bg-[#001f54] -translate-y-1/2 text-white rounded-full text-3xl hover:bg-[#254396]"
            >
              &lt;
            </button>
          )}

          {/* Flecha de navegación a la derecha */}
          {(currentDiscountPage + 1) * itemsPerPage < descuentos.length && (
            <button
              onClick={nextDiscountPage}
              className="absolute right-2 top-1/2 pb-1 h-16 w-16 transform bg-[#001f54] -translate-y-1/2 text-white rounded-full text-3xl hover:bg-[#254396]"
            >
              &gt;
            </button>
          )}
        </div>
      </div>
      {/* Sección de catálogo */}
      <div className="px-4 mb-24">
        <h2 className="text-3xl font-semibold text-center mb-6">Nuestro Catálogo</h2>

        {/* Muestra productos por categorías */}
        {Object.keys(catalogo).map((category) => (
          <div key={category} className="mt-20">
            <h3 className="text-2xl mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {catalogo[category].map((producto) => (
                <div
                  key={producto.id}
                  onClick={() => handleSubCategoryClick(category, producto.name)}
                  className="bg-white shadow-md rounded-lg p-4 text-center hover:bg-gray-200 hover:scale-110"
                >
                  <img
                    src={producto.src}
                    alt={`Producto ${producto.name}`}
                    className="w-full h-80 object-cover rounded-lg mb-2"
                  />
                  <p className="text-lg font-semibold">{producto.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
