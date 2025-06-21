import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PantallaDevoluciones() {
  const navigate = useNavigate();

  // Simulación de pedidos elegibles para devolución
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      fecha: "2023-12-01",
      articulos: ["Camiseta", "Pantalón"],
      estado: "Entregado",
    },
    {
      id: 2,
      fecha: "2023-11-15",
      articulos: ["Zapatos"],
      estado: "Entregado",
    },
  ]);

  const [expandedPedido, setExpandedPedido] = useState(null);
  const [motivo, setMotivo] = useState("");
  const [comentarios, setComentarios] = useState("");

  const pasosDevolucion = [
    "Empaque los artículos que desea devolver en su embalaje original, si es posible.",
    "Asegúrese de incluir el recibo o comprobante de compra dentro del paquete.",
    "Seleccione el motivo de la devolución en el formulario proporcionado.",
    "Etiquete el paquete con la etiqueta de devolución enviada a su correo electrónico.",
    "Lleve el paquete al punto de envío autorizado más cercano o programe una recogida." 
  ];

  const handleExpand = (pedidoId) => {
    if (expandedPedido === pedidoId) {
      setExpandedPedido(null);
    } else {
      setExpandedPedido(pedidoId);
    }
  };

  const handleSubmit = (e, pedidoId) => {
    e.preventDefault();
    alert(`Devolución iniciada para el pedido #${pedidoId}\nMotivo: ${motivo}\nComentarios: ${comentarios}`);
    // Aquí puedes realizar una llamada a la API para registrar la devolución
    setExpandedPedido(null);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-10">
          <h1 className="text-2xl font-bold text-[#001F54] mb-6 text-center">
            Devoluciones
          </h1>

          {pedidos.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {pedidos.map((pedido) => (
                <li key={pedido.id} className="py-4">
                  <p className="text-lg font-medium">
                    Pedido #{pedido.id} - Fecha: {pedido.fecha}
                  </p>
                  <p className="text-gray-700">
                    Artículos: {pedido.articulos.join(", ")}
                  </p>
                  <button
                    onClick={() => handleExpand(pedido.id)}
                    className="mt-4 px-6 py-2 bg-[#001F54] text-white rounded-lg hover:bg-[#003080] transition duration-300"
                  >
                    {expandedPedido === pedido.id ? "Cancelar" : "Iniciar Devolución"}
                  </button>

                  {expandedPedido === pedido.id && (
                    <form onSubmit={(e) => handleSubmit(e, pedido.id)} className="mt-6 space-y-6">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Motivo de la devolución
                        </label>
                        <select
                          value={motivo}
                          onChange={(e) => setMotivo(e.target.value)}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        >
                          <option value="" disabled>
                            Seleccione un motivo
                          </option>
                          <option value="Producto dañado">Producto dañado</option>
                          <option value="Talla incorrecta">Talla incorrecta</option>
                          <option value="Artículo equivocado">Artículo equivocado</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Comentarios adicionales (opcional)
                        </label>
                        <textarea
                          value={comentarios}
                          onChange={(e) => setComentarios(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          rows="4"
                          placeholder="Escriba algún comentario adicional sobre la devolución"
                        ></textarea>
                      </div>

                      <div className="flex justify-between mt-6">
                        <button
                          type="button"
                          onClick={() => setExpandedPedido(null)}
                          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                        >
                          Confirmar Devolución
                        </button>
                      </div>
                    </form>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 text-center">
              No tienes pedidos elegibles para devolución.
            </p>
          )}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#001F54] mb-4">Pasos para la Devolución</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {pasosDevolucion.map((paso, index) => (
                <li key={index}>{paso}</li>
              ))}
            </ol>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/perfil")} href="#"
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Volver al Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}