import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaHeadset,
  FaListAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Controla qué submenú está abierto
  const navigate = useNavigate();
  let catalogTimeout;

  const handleCatalogMouseEnter = () => {
    clearTimeout(catalogTimeout);
    setIsCatalogOpen(true);
  };

  const handleCatalogMouseLeave = () => {
    catalogTimeout = setTimeout(() => {
      setIsCatalogOpen(false);
      setOpenSubMenu(null); // Cierra todos los submenús
    }, 200);
  };

  const handleSubMenuMouseEnter = (menuKey) => {
    clearTimeout(catalogTimeout);
    setOpenSubMenu(menuKey); // Abre el submenú actual y cierra los demás
  };

  const handleSubMenuMouseLeave = () => {
    catalogTimeout = setTimeout(() => {
      setOpenSubMenu(null); // Cierra el submenú actual
    }, 200);
  };

  const categories = {
    mujer: [
      "Vestidos",
      "Conjuntos",
      "Blusas",
      "Pantalones",
      "Faldas",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Suéter",
      "Accesorios",
    ],
    hombre: [
      "Playera",
      "Conjuntos",
      "Pantalones",
      "Sudadera",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Accesorios",
    ],
    niñas: [
      "Vestidos",
      "Conjuntos",
      "Blusas",
      "Pantalones",
      "Faldas",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Suéter",
      "Accesorios",
    ],
    niños: [
      "Playera",
      "Conjuntos",
      "Pantalones",
      "Sudadera",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Accesorios",
    ],
    plus: [
      "Vestidos",
      "Conjuntos",
      "Blusas",
      "Pantalones",
      "Faldas",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Suéter",
      "Sudaderas",
      "Jeans",
      "Accesorios",
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto max-w-none flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="https://via.placeholder.com/150x50?text=Luzete"
              alt="Luzete Logo"
              className="h-16 rounded-md"
            />
          </a>
        </div>

        {/* Navegación principal */}
        <nav className="flex items-center space-x-6">
          {/* Catálogo con menú desplegable */}
          <div
            className="relative"
            onMouseEnter={handleCatalogMouseEnter}
            onMouseLeave={handleCatalogMouseLeave}
          >
            <button className="flex items-center font-semibold border hover:bg-[#254396] border-gray-600 bg-[#001F54] text-white px-4 py-2 rounded-full">
              <FaListAlt className="inline mr-2" /> Catálogo
            </button>
            {isCatalogOpen && (
              <div className="absolute left-0 top-10 bg-white border rounded-lg shadow-lg p-4 w-48 z-50">
                <ul>
                  {["mujer", "hombre", "niñas", "niños", "plus"].map((key) => (
                    <li
                      key={key}
                      className="relative"
                      onMouseEnter={() => handleSubMenuMouseEnter(key)}
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      <button className="flex items-center justify-between w-full text-gray-700 hover:text-white hover:bg-[#001F54] px-2 py-1 rounded">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                        <span
                          className={`ml-2 transform transition-transform ${
                            openSubMenu === key ? "" : "hidden"
                          }`}
                        >
                          {">"}
                        </span>
                      </button>
                      {openSubMenu === key && (
                        <ul className="absolute top-0 left-full bg-white border rounded-lg shadow-lg mt-0 ml-2 w-48 z-50">
                          {categories[key].map((category) => (
                            <li key={category}>
                              <a
                                href={`/catalogo/${key}/${category
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block text-gray-600 hover:text-white hover:bg-[#001F54] px-2 py-1 rounded"
                              >
                                {category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Barra de búsqueda */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar productos"
              className="border rounded-full py-2 px-4 pl-10 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3.5 top-3 text-gray-400" />
            <button className="-ml-24 bg-[#001F54] text-white hover:bg-[#254396] border border-gray-600 px-4 py-2 rounded-full">
              Buscar <FaSearch className="inline ml-2 mb-1 text-white" />
            </button>
          </div>
        </nav>

        {/* Íconos de usuario */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/me-gusta")}>
            <FaHeart />
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/soporte-tecnico")} // Redirección a Soporte Técnico
          >
            <FaHeadset />
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/carrito-compras")}
          >
            <FaShoppingCart />
          </button>
          <button className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/perfil")}>
            <FaUser />
          </button>
          <button
            className="hover:bg-[#254396] bg-[#001F54] text-white border border-gray-600 px-4 py-2 rounded"
            onClick={() => navigate("/auth-screen")}
          >
            Registrarse / Iniciar sesión
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
