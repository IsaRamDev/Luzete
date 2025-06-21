import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const initialCart = [
  { id: 1, src: "https://via.placeholder.com/150", name: "Blusa 1", price: 25.99, quantity: 1 },
  { id: 3, src: "https://via.placeholder.com/150", name: "Pantalón 1", price: 40.99, quantity: 2 },
  { id: 5, src: "https://via.placeholder.com/150", name: "Vestido 1", price: 60.99, quantity: 1 },
];

export default function CarritoDeCompras() {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-8 bg-[#f9f9f9]">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#001F54]">
        Carrito de Compras
      </h1>
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row">
          {/* Lista de productos */}
          <div className="lg:w-3/4 lg:pr-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-10">
                  {/* Botones para modificar cantidad */}
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 border rounded-l-lg bg-gray-100 hover:bg-gray-200"
                    >
                      <FaMinus />
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 border rounded-r-lg bg-gray-100 hover:bg-gray-200"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  {/* Botón de eliminar */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del carrito */}
          <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#001F54]">
              Resumen
            </h2>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-medium">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">Envío</span>
              <span className="text-lg font-medium">$5.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">
                ${(parseFloat(calculateTotal()) + 5).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => navigate("/checkout")} href="#"
              className="w-full px-4 py-2 mt-4 bg-[#001F54] text-white rounded-lg hover:bg-[#003080] transition duration-300"
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">Tu carrito está vacío.</p>
          <button
            onClick={() => navigate("/productos")} href="#"
            className="px-6 py-3 bg-[#001F54] text-white rounded-lg hover:bg-[#003080] transition duration-300"
          >
            Ir a Productos
          </button>
        </div>
      )}
    </div>
  );
}
