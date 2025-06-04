import { useLikes } from "../hooks/LikesProvider";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export default function ListaDeMeGusta() {
  const { likedProducts, toggleLike } = useLikes();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#001F54]">
          Lista de Me Gusta
        </h1>

        {likedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {likedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => navigate(`/producto/${product.id}`)}
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-600">{product.price}</p>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => toggleLike(product)}
                      className="text-red-500 hover:bg-gray-200 p-2 rounded-lg transition duration-300"
                    >
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Aún no has agregado productos a tu lista de Me Gusta.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-[#001F54] text-white rounded-lg hover:bg-[#003080] transition duration-300"
            >
              Explorar Productos
            </button>
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Volver a Inicio
          </button>
        </div>
      </div>
    </div>
  );
}
