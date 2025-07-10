import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useLikes } from "../hooks/LikesProvider";
import Descuentos from "../components/Descuentos";

const descuentos = [
    {
      id: 1,
      src: "/src/assets/PRODUCTO (1).png",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "/src/assets/PRODUCTO (1).png",
        "/src/assets/PRODUCTO (1).png",
        "/src/assets/PRODUCTO (1).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 2,
      src: "/src/assets/PRODUCTO (2).png",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "/src/assets/PRODUCTO (2).png",
        "/src/assets/PRODUCTO (2).png",
        "/src/assets/PRODUCTO (2).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 3,
      src: "/src/assets/PRODUCTO (3).png",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "/src/assets/PRODUCTO (3).png",
        "/src/assets/PRODUCTO (3).png",
        "/src/assets/PRODUCTO (3).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 4,
      src: "/src/assets/PRODUCTO (4).png",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "/src/assets/PRODUCTO (4).png",
        "/src/assets/PRODUCTO (4).png",
        "/src/assets/PRODUCTO (4).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 5,
      src: "/src/assets/PRODUCTO (5).png",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "/src/assets/PRODUCTO (5).png",
        "/src/assets/PRODUCTO (5).png",
        "/src/assets/PRODUCTO (5).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 6,
      src: "/src/assets/PRODUCTO (6).png",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "/src/assets/PRODUCTO (6).png",
        "/src/assets/PRODUCTO (6).png",
        "/src/assets/PRODUCTO (6).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 7,
      src: "/src/assets/PRODUCTO (7).png",
      name: "Descuento en auriculares",
      price: "$19.99",
      vendor: "Vendedor 1",
      images: [
        "/src/assets/PRODUCTO (7).png",
        "/src/assets/PRODUCTO (7).png",
        "/src/assets/PRODUCTO (7).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 8,
      src: "/src/assets/PRODUCTO (8).png",
      name: "Descuento en cámaras",
      price: "$29.99",
      vendor: "Vendedor 2",
      images: [
        "/src/assets/PRODUCTO (8).png",
        "/src/assets/PRODUCTO (8).png",
        "/src/assets/PRODUCTO (8).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
    {
      id: 9,
      src: "/src/assets/PRODUCTO (9).png",
      name: "Descuento en relojes",
      price: "$39.99",
      vendor: "Vendedor 3",
      images: [
        "/src/assets/PRODUCTO (9).png",
        "/src/assets/PRODUCTO (9).png",
        "/src/assets/PRODUCTO (9).png",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Black"],
    },
  ];

export default function DetalleDescuento() {
  const { descuentoId } = useParams();
  const { likedProducts, toggleLike } = useLikes();

  const descuento = descuentos.find((item) => item.id === Number(descuentoId));
  const liked = likedProducts.some((product) => product.id === Number(descuentoId));

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  if (!descuento) {
    return <div>Descuento no encontrado</div>;
  }

 return (
    <div className="">
      <div className="sm:px-44 flex sm:flex-row flex-col px-4 sm:mb-20 mb-10">
        {/* Imagen principal y miniaturas */}
        <div className="sm:w-1/2">
          <div className="relative">
            <img
              src={selectedImage || descuento.src}
              alt={`Descuento ${descuento.id}`}
              className="w-full h-auto object-cover shadow-lg"
            />
            <button
              onClick={() => toggleLike(descuento)}
              className={`absolute top-6 right-6 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ${
                liked ? "text-[#ff1654]" : "text-gray-500"
              }`}            >
              <FaHeart className="w-6 h-6" />
            </button>
          </div>
          <div className="flex mt-4 -mr-4">
            {descuento.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Miniatura ${index}`}
                className="w-1/3 object-cover cursor-pointer pr-4"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="sm:pl-16 pl-5 pt-5">
          <h1 className="sm:text-3xl text-xl font-bold mb-4">{descuento.name}</h1>
           <p className="text-[#ff1654] font-bold">
                  {descuento.price}
                  <label className="ml-1 p-0.5 bg-[#ff1654] text-white">-30%</label>
                </p>
                <p className="font-extrabold line-through">{descuento.vendor}</p>
          <p className="text-gray-600 mb-6">Vendedor: {descuento.vendor}</p>

          {/* Selección de tallas */}
          <div className="sm:mb-4 mb-2">
            <h3 className="sm:text-lg font-semibold mb-2">Tallas disponibles:</h3>
            <div className="flex space-x-4">
              {descuento.sizes.map((size) => (
                <button
                  key={size}
                  className={`sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-sm rounded-lg border ${
                      selectedSize === size
                        ? "bg-[#ff1654] text-white"
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
          <div className="sm:mb-20 mb-10">
            <h3 className="sm:text-lg font-semibold mb-2">Colores disponibles:</h3>
            <div className="flex space-x-4">
              {descuento.colors.map((color) => (
                <button
                  key={color}
                  className={`sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-sm rounded-lg border ${
                      selectedColor === color
                        ? "bg-[#ff1654] text-white"
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
            className="px-6 py-3 w-full max-w-96  rounded-full bg-gradient-to-r from-[#7400ad] to-[#d80495] hover:scale-125 transition duration-200 text-white disabled:bg-gray-300"
            disabled={!selectedSize || !selectedColor}
          >
            Comprar
          </button>
        </div>
      </div>

      <Descuentos />
    </div>
  );
}