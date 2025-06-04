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
          fecha: "2023-12-01", // Actualiza esta fecha según tus pruebas
          estado: "Entregado",
          articulos: ["Camiseta", "Pantalón"],
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-12-01"), -2)),
        },
        {
          id: 2,
          fecha: "2023-09-01",
          estado: "Entregado",
          articulos: ["Zapatos"],
          devolucionDisponible: isBefore(new Date(), subMonths(new Date("2024-09-01"), -2)),
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
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-lg font-bold text-[#001F54]">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-10">
          <div className="flex justify-center mb-8">
            <button
              className={`w-1/2 py-2 text-center font-bold text-lg ${
                activeTab === "perfil"
                  ? "border-b-2 border-[#001F54] text-[#001F54]"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("perfil")}
            >
              Perfil
            </button>
            <button
              className={`w-1/2 py-2 text-center font-bold text-lg ${
                activeTab === "pedidos"
                  ? "border-b-2 border-[#001F54] text-[#001F54]"
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
                    <div className="mb-6">
                      <p className="text-lg font-medium">Nombre</p>
                      <p className="text-gray-700">{profile.nombre}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg font-medium">Correo Electrónico</p>
                      <p className="text-gray-700">{profile.email}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg font-medium">Teléfono</p>
                      <p className="text-gray-700">{profile.telefono}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg font-medium">Dirección</p>
                      <p className="text-gray-700">{profile.direccion}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg font-medium">Contraseña</p>
                      <p className="text-gray-700">{profile.contraseña}</p>
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={handleEdit}
                        className="px-6 py-3 bg-[#001F54] text-white rounded-lg hover:bg-[#003080] transition duration-300"
                      >
                        Editar Perfil
                      </button>
                      <button
                        onClick={() => navigate("/logout")}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
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
              <h2 className="text-2xl font-bold mb-4">Pedidos</h2>
              {pedidos.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {pedidos.map((pedido) => (
                    <li key={pedido.id} className="py-4">
                      <p className="text-lg font-medium">
                        Pedido #{pedido.id} - {pedido.fecha}
                      </p>
                      <p className="text-gray-700">Estado: {pedido.estado}</p>
                      <p className="text-gray-700">
                        Artículos: {pedido.articulos.join(", ")}
                      </p>
                      {pedido.devolucionDisponible && (
                        <p className="text-green-600 mt-2">
                          Devolución disponible. <a href="/devoluciones" className="underline">Iniciar devolución</a>
                        </p>
                      )}
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
