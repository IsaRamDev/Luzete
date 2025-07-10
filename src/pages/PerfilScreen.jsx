import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isBefore, subMonths } from "date-fns";

export default function PerfilUsuario() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("perfil");
  const [profile, setProfile] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(null);

  useEffect(() => {
    // Simular llamada al backend
    setTimeout(() => {
      setProfile({
        nombre: "Juan Pérez",
        email: "juanperez@example.com",
        telefono: "123-456-7890",
        direccion: "Calle Falsa 123, Ciudad, País",
        contraseña: "********",
        fotoPerfil: "https://cdn.pixabay.com/photo/2023/08/08/09/21/couple-8176869_640.jpg", // Foto de perfil por defecto
      });
      setPedidos([
        {
          id: 1,
          fecha: "2023-12-01",
          estado: "Entregado",
          pedidoTotal: 59.99,
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-12-01"), -2)),
          articulos: [
            {
              nombre: "Camiseta",
              imagen: "/src/assets/PRODUCTO (2).png",
            },
            {
              nombre: "Pantalón",
              imagen: "/src/assets/PRODUCTO (3).png",
            },
          ],
        },
        {
          id: 2,
          fecha: "2023-09-01",
          estado: "Entregado",
          pedidoTotal: 89.99,
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-09-01"), -2)),
          articulos: [
            {
              nombre: "Zapatos",
              imagen: "/src/assets/PRODUCTO (2).png",
            },
            {
              nombre: "Bolso",
              imagen: "/src/assets/PRODUCTO (3).png",
            },
            {
              nombre: "Gafas de Sol",
              imagen: "/src/assets/PRODUCTO (4).png",
            },
            {
              nombre: "Sombrero",
              imagen: "/src/assets/PRODUCTO (5).png",
            },
          ],
        },
        {
          id: 3,
          fecha: "2023-12-01",
          estado: "Entregado",
          pedidoTotal: 59.99,
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-12-01"), -2)),
          articulos: [
            {
              nombre: "Camiseta",
              imagen: "/src/assets/PRODUCTO (2).png",
            },
            {
              nombre: "Pantalón",
              imagen: "/src/assets/PRODUCTO (3).png",
            },
          ],
        },
        {
          id: 4,
          fecha: "2023-09-01",
          estado: "Entregado",
          pedidoTotal: 89.99,
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-09-01"), -2)),
          articulos: [
            {
              nombre: "Zapatos",
              imagen: "/src/assets/PRODUCTO (2).png",
            },
            {
              nombre: "Bolso",
              imagen: "/src/assets/PRODUCTO (3).png",
            },
            {
              nombre: "Gafas de Sol",
              imagen: "/src/assets/PRODUCTO (4).png",
            },
            {
              nombre: "Sombrero",
              imagen: "/src/assets/PRODUCTO (5).png",
            },
          ],
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleEdit = () => {
    setEditing(true);
    setEditedProfile(profile);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfile({ ...editedProfile, fotoPerfil: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 sm:py-16 py-8">
        <div className="container mx-auto sm:px-6 px-3 max-w-2xl text-center">
          <p className="sm:text-lg font-bold text-[#7400ad]">Cargando...</p>
        </div>
      </div>
    );
  }
  console.log("Profile:", profile);
  console.log("Pedidos:", pedidos);
  return (
    <div className="bg-gray-100 sm:py-16 py-8">
      <div className="container mx-auto sm:px-6 px-3 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-10 border border-gray-200 text-sm sm:text-base">
          <div className="flex justify-center mb-8">
            <button
              className={`w-1/2 py-2 text-center font-bold sm:text-lg text-base ${activeTab === "perfil"
                ? "border-b-2 border-[#7400ad] text-[#7400ad]"
                : "text-gray-500"
                }`}
              onClick={() => setActiveTab("perfil")}
            >
              Perfil
            </button>
            <button
              className={`w-1/2 py-2 text-center font-bold sm:text-lg text-base ${activeTab === "pedidos"
                ? "border-b-2 border-[#7400ad] text-[#7400ad]"
                : "text-gray-500"
                }`}
              onClick={() => setActiveTab("pedidos")}
            >
              Pedidos
            </button>
          </div>

          {activeTab === "perfil" ? (
            profile && (
              <>
                <div className="text-center mb-6">
                  <img
                    src={profile.fotoPerfil || "https://via.placeholder.com/150"}
                    alt="Foto de Perfil"
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                  />
                  {editing && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">
                        Cambiar Foto de Perfil
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                      />
                    </div>
                  )}
                </div>

                {!editing ? (
                  <>
                    <div className="sm:mb-6 mb-3">
                      <p className="sm:text-lg sm:font-medium font-bold">Nombre</p>
                      <p className="text-gray-700">{profile.nombre}</p>
                    </div>
                    <div className="sm:mb-6 mb-3">
                      <p className="sm:text-lg sm:font-medium font-bold">Correo Electrónico</p>
                      <p className="text-gray-700">{profile.email}</p>
                    </div>
                    <div className="sm:mb-6 mb-3">
                      <p className="sm:text-lg sm:font-medium font-bold">Teléfono</p>
                      <p className="text-gray-700">{profile.telefono}</p>
                    </div>
                    <div className="sm:mb-6 mb-3">
                      <p className="sm:text-lg sm:font-medium font-bold">Dirección</p>
                      <p className="text-gray-700">{profile.direccion}</p>
                    </div>
                    <div className="sm:mb-6 mb-3">
                      <p className="sm:text-lg sm:font-medium font-bold">Contraseña</p>
                      <p className="text-gray-700">{profile.contraseña}</p>
                    </div>

                    <div className="flex justify-between mt-6 sm:px-10 px-3">
                      <button
                        onClick={handleEdit}
                        className="sm:px-6 px-3 py-3 border-2 text-gray-600 border-gray-600 rounded-full hover:bg-[#003080] transition duration-300"
                      >
                        Editar Perfil
                      </button>
                      <button
                        onClick={() => navigate("/logout")} href="#"
                        className="sm:px-6 px-3 py-3 bg-red-500 text-white bg-gradient-to-r from-[#7400ad] to-[#d80495] rounded-full hover:bg-red-600 transition duration-300"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={editedProfile.nombre}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editedProfile.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={editedProfile.telefono}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-2">Dirección</label>
                      <input
                        type="text"
                        name="direccion"
                        value={editedProfile.direccion}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-lg font-medium mb-2">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="contraseña"
                        value={editedProfile.contraseña}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      />
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                      >
                        Guardar Cambios
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                )}
              </>
            )
          ) : (
            <>
              {pedidos.length > 0 ? (
                <ul className="sm:space-y-4 space-y-2 -mx-6 sm:mx-0">
                  {pedidos.map((pedido) => (
                    <li key={pedido.id} className="border border-gray-300 rounded-lg py-4 sm:px-6 px-3 flex">
                      <div className="flex-col">
                        <p className="sm:text-lg font-medium text-gray-600 mb-1">
                          {pedido.estado}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">{pedido.articulos.length} productos</p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          pedido realizado el {new Date(pedido.fecha).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Pedido # {pedido.id}
                        </p>
                        <p className="sm:text-lg font-medium text-gray-600 mt-2">
                          MXN ${pedido.pedidoTotal}
                        </p>
                        {pedido.devolucionDisponible && (
                          <p className="text-green-600 mt-2">
                            Devolución disponible. <a href="/devoluciones" className="underline">Iniciar devolución</a>
                          </p>
                        )}
                      </div>
                      <div className="flex flex-row items-center ml-auto space-x-1">
                        {pedido.articulos.slice(0, 3).map((articulo, index) => (
                          <img
                            key={index}
                            src={articulo.imagen}
                            alt={articulo.nombre}
                            className="sm:w-18 w-10 sm:h-20 h-12 object-cover0"
                          />
                        ))}

                        {pedido.articulos.length > 3 && (
                          <div className="flex items-center justify-center sm:p-3 p-1 text-gray-600 font-semibold text-xs sm:text-sm">
                            +{pedido.articulos.length - 3}
                          </div>
                        )}
                      </div>


                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">No tienes pedidos registrados.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
