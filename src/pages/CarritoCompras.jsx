import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus, FaEdit } from "react-icons/fa";

const initialCart = [
  { id: 1, src: "/src/assets/PRODUCTO (3).png", name: "Blusa 1", price: 25.99, quantity: 1 },
  { id: 3, src: "/src/assets/PRODUCTO (4).png", name: "Pantalón 1", price: 40.99, quantity: 2 },
  { id: 5, src: "/src/assets/PRODUCTO (5).png", name: "Vestido 1", price: 60.99, quantity: 1 },
  { id: 7, src: "/src/assets/PRODUCTO (3).png", name: "Zapatos 1", price: 80.5, quantity: 1 },
  { id: 9, src: "/src/assets/PRODUCTO (4).png", name: "Bolso 1", price: 45.25, quantity: 3 },
];

export default function CarritoDeComprasNuevo() {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingCost = 5.0;

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

  const handleEdit = (item) => {
    // Aquí podrías abrir un modal, o redirigir a un editor de producto
    alert(`Editar ${item.name}`);
  };

  console.log("Carrito de Compras:", cart);
  return (
    <div className="bg-gray-100 sm:py-16 py-6">
      <div className="container mx-auto sm:px-6 px-3 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col h-[calc(80vh-80px)]">
          <div className="pt-8 sm:px-20 px-5 flex-grow overflow-hidden flex flex-col">
            <h1 className="sm:text-4xl text-2xl font-bold sm:mb-6 mb-2 text-[#7400ad]">
              Cesta
            </h1>

            {cart.length > 0 ? (
              <>
                {/* Lista de productos con scroll */}
                <div
                  className="overflow-y-auto pr-2 space-y-4"
                  style={{
                    scrollbarColor: "#7400ad #f0f0f0",
                    maxHeight: "calc(100vh - 310px)", // ajustado para que no choque con el resumen
                    paddingRight: "0.5rem", // para que no tape el contenido el scroll
                  }}
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                    >
                      <div className="flex items-center gap-4 w-full sm:text-base text-sm">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="sm:w-40 w-28 sm:h-40 h-28 object-cover"
                        />
                        <div className="flex flex-col justify-between w-full">
                          {/* Nombre + acciones */}
                          <div className="flex justify-between items-start">
                            <p>{item.name}</p>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleEdit(item)}
                                className="text-blue-500 hover:text-blue-700 transition"
                                aria-label={`Editar ${item.name}`}
                              >
                                <FaEdit size={18} />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 transition"
                                aria-label={`Eliminar ${item.name}`}
                              >
                                <FaTrashAlt size={18} />
                              </button>
                            </div>
                          </div>

                          {/* Precio */}
                          <p className="text-[#ff1654] font-bold">
                            {item.price}
                            <label className="ml-1 p-0.5 bg-[#ff1654] text-white">-30%</label>
                          </p>
                          <p className="text-gray-800 mb-2 font-bold line-through">MXN ${item.price.toFixed(2)}</p>

                          {/* Talla y color (centrados) */}
                          <div className="flex items-center gap-4 justify-center text-sm text-gray-800 font-bold">
                            <p>Talla: M</p>
                            <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: "blue" }}></div>
                          </div>

                          {/* Cantidad abajo */}
                          <div className="flex items-center border rounded-lg overflow-hidden w-fit mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="sm:px-3 px-1 py-1 bg-gray-100 hover:bg-gray-200 transition"
                            >
                              <FaMinus />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="sm:px-3 px-1 py-1 bg-gray-100 hover:bg-gray-200 transition"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
              </>
            ) : (
              <div className="text-center mt-24">
                <p className="text-lg text-gray-700 mb-6">Tu carrito está vacío.</p>
                <button
                  onClick={() => navigate("/productos")}
                  className="px-6 py-3 bg-[#7400ad] text-white rounded-lg hover:bg-[#003080] transition duration-300"
                >
                  Ir a Productos
                </button>
              </div>
            )}
          </div>

          {/* Resumen al fondo, visible siempre */}
          <div className="border-t py-8 rounded-b-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-6 w-full items-center">
              <div className="space-y-2 sm:w-1/2 w-2/3 text-gray-800 font-medium sm:text-lg text-sm">
                <div className="flex justify-between">
                  <span className="">Subtotal:</span>
                  <span className="">MXN ${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Gastos de Envío</span>
                  <span className="text-[#7400ad] font-semibold"> MXN ${shippingCost.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between sm:text-2xl text-lg font-semibold">
                  <span>Total </span> <span className="text-sm">(IVA Incluido) </span>
                  <span> MXN ${(calculateSubtotal() + shippingCost).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className=" bg-gradient-to-r from-[#7400ad] to-[#d80495] sm:text-xl text-white px-8 py-2 rounded-full hover:bg-[#003080] transition duration-300"
              >
                PROCEDER AL PAGO
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
