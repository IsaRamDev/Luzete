import {
  FaSearch,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("MUJER"); // Controla qué submenú está abierto
  const navigate = useNavigate();
  let catalogTimeout;

  const handleCatalogMouseEnter = () => {
    clearTimeout(catalogTimeout);
    setIsCatalogOpen(true);
  };

  const handleCatalogMouseLeave = () => {
    catalogTimeout = setTimeout(() => {
      setIsCatalogOpen(false);
      setOpenSubMenu("MUJER"); // Cierra todos los submenús
    }, 300);
  };

  const handleSubMenuMouseEnter = (menuKey) => {
    clearTimeout(catalogTimeout);
    setOpenSubMenu(menuKey); // Abre el submenú actual y cierra los demás
  };

  const categories = {
    MUJER: [
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
    HOMBRE: [
      "Playera",
      "Conjuntos",
      "Pantalones",
      "Sudadera",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
      "Accesorios",
    ],
    NIÑA: [
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
    NIÑO: [
      "Playera",
      "Conjuntos",
      "Pantalones",
      "Sudadera",
      "Ropa Interior",
      "Pijamas",
      "Chamarra",
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
          <button className="flex items-center font-semibold px-4 py-2">
            {!isCatalogOpen && <img
              src="/src/assets/MENU.png"
              alt="Menu Catalogo"
              className="h-6 w-8 mr-2"
            />}
            {isCatalogOpen && <img
              src="/src/assets/MENU2.png"
              alt="Menu Catalogo"
              className="h-6 w-8 mr-2"
            />}
          </button>
          {isCatalogOpen && (
            <div className="absolute top-24 -left-6 bg-white rounded-lg shadow-lg z-50 px-10 py-5">
              {/* Tabs horizontales */}
              <ul className="flex border-b-2">
                {Object.keys(categories).map((key) => (
                  <li
                    key={key}
                    onMouseEnter={() => handleSubMenuMouseEnter(key)}
                    className={`px-6 py-3 cursor-pointer transition ${openSubMenu === key ? "text-[#d80495] font-bold" : "text-gray-700"
                      }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </li>
                ))}
              </ul>

              {/* Subcategorías */}
              <div className="p-4">
                {openSubMenu && (
                  <ul className="gap-2">
                    {categories[openSubMenu].map((category) => (
                      <li key={category}>
                        <a
                          href={`/catalogo/${openSubMenu}/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-gray-600 hover:text-[#d80495] hover:font-bold px-3 py-1 rounded transition"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
          <div className="relative bg-gradient-to-r from-[#7400ad] to-[#d80495] p-[2px] rounded-full transition hover:scale-110 duration-200">
            <div className="flex items-center bg-white rounded-full w-96 pl-10">
              <input
                type="text"
                placeholder="Buscar productos"
                className="w-full bg-transparent focus:outline-none"
              />
              <FaSearch className="absolute left-5 text-gray-400" />
              <button className="bg-[#d80495] text-white px-3 py-1 rounded-full hover:bg-[#7400ad] transition hover:scale-110 duration-200">
                <FaSearch className="inline mb-1 text-white" />
              </button>
            </div>
          </div>
        </nav>

        {/* Íconos de usuario */}
        <div className="flex items-center space-x-4">
          <button
            className="text-white px-10 py-1 rounded-full bg-gradient-to-r from-[#7400ad] to-[#d80495] hover:scale-125 transition duration-200"
            onClick={() => navigate("/auth-screen")}
          >
            LOG IN
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/perfil")}>
            <img
              src="/src/assets/USER.png"
              className="group-hover:hidden w-4 h-4 transition duration-200"
              alt="USER"
            />
            <img
              src="/src/assets/USER OVER.png"
              className="hidden group-hover:block hover:scale-110 w-6 h-6 transition duration-200"
              alt="USER Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/me-gusta")}>
            <img
              src="/src/assets/FAV.png"
              className="group-hover:hidden w-4 h-4 transition duration-200"
              alt="FAV"
            />
            <img
              src="/src/assets/FAV OVER.png"
              className="hidden group-hover:block hover:scale-110 w-6 h-6 transition duration-200"
              alt="FAV Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/perfil")}>
            <img
              src="/src/assets/BAG.png"
              className="group-hover:hidden w-4 h-4 transition duration-200"
              alt="BAG"
            />
            <img
              src="/src/assets/BAG OVER.png"
              className="hidden group-hover:block hover:scale-110 w-6 h-6 transition duration-200"
              alt="BAG Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/perfil")}>
            <img
              src="/src/assets/CONTACT.png"
              className="group-hover:hidden w-4 h-4 transition duration-200"
              alt="CONTACT"
            />
            <img
              src="/src/assets/CONTACT OVER.png"
              className="hidden group-hover:block hover:scale-110 w-6 h-6 transition duration-200"
              alt="CONTACT Hover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
