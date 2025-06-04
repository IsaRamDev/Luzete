import {
  FaSearch,
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
      <div className="container mx-auto max-w-none flex justify-between items-center py-2 px-10">
        {/* Catálogo con menú desplegable */}
          <div
            className="relative"
            onMouseEnter={handleCatalogMouseEnter}
            onMouseLeave={handleCatalogMouseLeave}
          >
            <button className="flex items-center font-semibold borderpx-4 py-2">
              <img
                src="/src/assets/MENU.png"
                alt="Menu Catalogo"
                className="h-6 w-8 mr-2"
              />
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
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="/src/assets/qq_0000s_0000s_0000_LOGO.png"
              alt="Luzete Logo"
              className="h-16 rounded-md"
            />
          </a>
        </div>

        {/* Navegación principal */}
        <nav className="flex items-center space-x-6">
          {/* Barra de búsqueda */}
          <div className="relative bg-gradient-to-r from-[#7400ad] to-[#d80495] p-[2px] rounded-full">
            <div className="flex items-center bg-white rounded-full w-96 pl-10">
              <input
                type="text"
                placeholder="Buscar productos"
                className="w-full bg-transparent focus:outline-none"
              />
              <FaSearch className="absolute left-5 text-gray-400" />
              <button className="bg-[#d80495] text-white px-3 py-1 rounded-full hover:bg-[#b1037d] transition">
                <FaSearch className="inline mb-1 text-white" />
              </button>
            </div>
          </div>
        </nav>

        {/* Íconos de usuario */}
        <div className="flex items-center space-x-4">
          <button
            className="text-white px-10 py-1 rounded-full bg-gradient-to-r from-[#7400ad] to-[#d80495]"
            onClick={() => navigate("/auth-screen")}
          >
            LOG IN
          </button>
          <button className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/me-gusta")}>
            <img
              src="/src/assets/USER.png"
              alt="Perfil"
              className="h-4 w-4"
            />
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/soporte-tecnico")}
          >
            <img
              src="/src/assets/FAV.png"
              alt="Me Gusta"
              className="h-4 w-4"
            />
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/carrito-compras")}
          >
            <img
              src="/src/assets/BAG.png"
              alt="Carrito de Compras"
              className="h-4 w-4"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 hover:scale-150"
            onClick={() => navigate("/perfil")}>
            <img
              src="/src/assets/CONTACT.png"
              alt="Ayuda"
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
