import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const descuentosIniciales = [
  { id: 1, src: "/src/assets/PRODUCTO (1).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 2, src: "/src/assets/PRODUCTO (2).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 3, src: "/src/assets/PRODUCTO (3).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
  { id: 4, src: "/src/assets/PRODUCTO (4).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 5, src: "/src/assets/PRODUCTO (5).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 6, src: "/src/assets/PRODUCTO (6).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
  { id: 7, src: "/src/assets/PRODUCTO (7).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 8, src: "/src/assets/PRODUCTO (8).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 9, src: "/src/assets/PRODUCTO (1).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
];

export default function Descuentos() {
  const navigate = useNavigate();
  const [descuentos, setDescuentos] = useState(descuentosIniciales);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const confirmarEliminacion = (id) => {
    setDescuentos(descuentos.filter(item => item.id !== id));
    setProductoAEliminar(null);
  };

  return (
    <div className="sm:mb-20 mb-10 sm:mt-32 mt-20 px-4 sm:px-10 lg:px-20" id="descuentos">
      <h2 className="sm:text-3xl text-xl font-semibold sm:mb-8 mb-2 text-[#7400ad]">Favoritos</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {descuentos.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-start cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-all flex-wrap relative"
          >
            {/* Icono de eliminar */}
            <div
              className="absolute sm:bottom-8 bottom-2 sm:right-8 right-4 text-red-600"
              onClick={(e) => {
                e.stopPropagation();
                setProductoAEliminar(item);
              }}
            >
              <FaTrashAlt className="w-4 h-5" />
            </div>

            <img
              onClick={() => navigate(`/producto/${item.id}`)}
              src={item.src}
              alt={item.name}
              className="w-full sm:w-32 md:w-40 lg:w-48 h-auto object-cover shrink-0"
            />
            <div onClick={() => navigate(`/producto/${item.id}`)} className="flex-1 min-w-0 text-sm sm:text-lg">
              <p className="font-medium text-[#222]">{item.name}</p>
              <p className="text-[#ff1654] font-bold flex items-center gap-2">
                MXN {item.price}
                <span className="p-1 px-2 bg-[#ff1654] text-white text-xs rounded">-30%</span>
              </p>
              <p className="font-semibold line-through">{item.vendor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de confirmación */}
      {productoAEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white sm:p-10 p-6 rounded-lg shadow-md sm:w-11/12 w-9/12 max-w-sm text-center">
            <p className="sm:mb-16 mb-10 text-[#222] text-lg font-medium">
              ¿Estás seguro de que quieres eliminar este producto?
            </p>
            <div className="flex justify-center sm:gap-20 gap-10">
              <button
                className="bg-gradient-to-r from-[#7400ad] to-[#d80495] text-white sm:px-6 px-4 py-2 rounded-full sm:text-base text-sm"
                onClick={() => confirmarEliminacion(productoAEliminar.id)}
              >
                Eliminar
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black sm:px-6 px-4 py-2 rounded-full sm:text-base text-sm"
                onClick={() => setProductoAEliminar(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
