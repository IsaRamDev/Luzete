import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLikes } from "../hooks/LikesProvider";

const descuentos = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 9,
      src: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/13/11/33/wedding-6706312_640.jpg",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
  ];

export default function DetalleDescuento() {
  const { descuentoId } = useParams();
  const { likedProducts, toggleLike } = useLikes();
  const navigate = useNavigate();

  const descuento = descuentos.find((item) => item.id === Number(descuentoId));
  const liked = likedProducts.some((product) => product.id === Number(descuentoId));

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  if (!descuento) {
    return <div>Descuento no encontrado</div>;
  }

 return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Imagen principal y miniaturas */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={selectedImage || descuento.src}
              alt={`Descuento ${descuento.id}`}
              className="w-full h-auto object-cover rounded-lg"
            />
            <button
              onClick={() => toggleLike(descuento)}
              className={`absolute top-6 right-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ${
                liked ? "text-red-600" : "text-gray-500"
              }`}            >
              <FaHeart className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 space-x-4">
            {descuento.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Miniatura ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="lg:w-1/2 lg:pl-12">
          <h1 className="text-3xl font-bold mb-4">{descuento.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{descuento.price}</p>
          <p className="text-gray-600 mb-6">Vendedor: {descuento.vendor}</p>

          {/* Selección de tallas */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Tallas disponibles:</h3>
            <div className="flex space-x-4">
              {descuento.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size
                        ? "bg-[#001f54] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Selección de colores */}
          <div className="mb-20">
            <h3 className="text-lg font-semibold mb-2">Colores disponibles:</h3>
            <div className="flex space-x-4">
              {descuento.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded-lg border ${
                      selectedColor === color
                        ? "bg-[#001f54] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button
            className="px-6 py-3 w-full max-w-96 bg-[#254396] text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300"
            disabled={!selectedSize || !selectedColor}
          >
            Comprar
          </button>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Productos Relacionados</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {descuentos
            .filter((item) => item.id !== descuento.id)
            .slice(0, 4)
            .map((related) => (
              <div
                key={related.id}
                className="bg-white shadow-md rounded-lg p-4 text-center hover:bg-gray-200 hover:scale-110 cursor-pointer"
                onClick={() => {
                    navigate(`/producto/${related.id}`);
                  }}
              >
                <img
                  src={related.src}
                  alt={`Relacionado ${related.id}`}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <p className="text-lg font-semibold mt-2">{related.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}