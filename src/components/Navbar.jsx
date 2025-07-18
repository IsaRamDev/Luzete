import {
  FaSearch,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("mujer"); // Controla qué submenú está abierto
  const navigate = useNavigate();
  let catalogTimeout;

  const handleCatalogToggle = () => {
    if (isCatalogOpen) {
      setIsCatalogOpen(false);
      setOpenSubMenu("mujer");
    } else {
      setIsCatalogOpen(true);
    }
  };

  const handleSubMenuMouseEnter = (menuKey) => {
    clearTimeout(catalogTimeout);
    setOpenSubMenu(menuKey); // Abre el submenú actual y cierra los demás
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
    niña: [
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
    niño: [
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Cargar historial desde localStorage
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  const saveSearch = (term) => {
    if (!term.trim()) return;

    let updatedHistory = [term, ...searchHistory.filter(item => item !== term)];
    if (updatedHistory.length > 10) updatedHistory = updatedHistory.slice(0, 10);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      saveSearch(searchTerm);
      // Aquí podrías navegar a los resultados si tienes una página de búsqueda
      // navigate(`/busqueda?q=${encodeURIComponent(searchTerm)}`);
      setShowSuggestions(false);
    }
  };

  const filteredSuggestions = searchHistory.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto max-w-none flex justify-between items-center py-2 sm:px-10 px-4">
        {/* Catálogo con menú desplegable */}
        <div
          className="relative"
        >
           <button
            onClick={handleCatalogToggle}
            className="flex items-center font-semibold sm:px-4 px-2 py-2"
          >
            <img
              src={isCatalogOpen ? "/src/assets/MENU2.png" : "/src/assets/MENU.png"}
              alt="Menú Catálogo"
              className="sm:h-6 h-4 sm:w-8 w-6 sm:mr-2 mr-0"
            />
          </button>
          {isCatalogOpen && (
            <div className="absolute top-24 -left-6 bg-white rounded-lg shadow-lg z-50 px-10 py-5">
              {/* Tabs horizontales */}
              <ul className="flex border-b-2 text-sm sm:text-base font-semibold">
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
                  <ul className="gap-2 sm:text-base text-xs">
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
              className="sm:h-16 h-6 rounded-md"
            />
          </a>
        </div>
        {/* Navegación principal */}
        <nav className="sm:flex items-center space-x-6 hidden">
          {/* Barra de búsqueda */}
          <div className="relative bg-gradient-to-r from-[#7400ad] to-[#d80495] p-[2px] rounded-full transition hover:scale-110 duration-200">
            <div className="flex items-center bg-white rounded-full sm:w-96 w-40 sm:pl-10 pl-5 relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full sm:text-base text-xs bg-transparent focus:outline-none"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Para que sí funcione el click en sugerencia
              />
              <FaSearch className="absolute sm:text-base text-xs sm:left-5 left-1 text-gray-400" />
              <button
                className="bg-[#d80495] text-white sm:px-3 px-2 sm:py-1 py-0 rounded-full hover:bg-[#7400ad] transition hover:scale-110 duration-200"
                onClick={handleSearch}
              >
                <FaSearch className="inline sm:text-base text-xs mb-1 text-white" />
              </button>

              {/* SUGERENCIAS */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
                  {filteredSuggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 sm:text-sm text-xs"
                      onClick={() => {
                        setSearchTerm(item);
                        handleSearch();
                      }}
                    >
                      <FaSearch className="text-gray-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>

        {/* Íconos de usuario */}
        <div className="flex items-center space-x-4">
          <button
            className="flex flex-row text-xs sm:text-base text-white sm:px-10 px-2 sm:py-1 py-1 rounded-full bg-gradient-to-r from-[#7400ad] to-[#d80495] hover:scale-125 transition duration-200"
            onClick={() => navigate("/auth-screen")} href="#"
          >
            LOG IN
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/perfil")} href="#">
            <img
              src="/src/assets/USER.png"
              className="group-hover:hidden sm:w-4 w-3 sm:h-4 h-3 transition duration-200"
              alt="USER"
            />
            <img
              src="/src/assets/USER OVER.png"
              className="hidden group-hover:block hover:scale-110 sm:w-6 w-4 sm:h-6 h-4 transition duration-200"
              alt="USER Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/me-gusta")} href="#">
            <img
              src="/src/assets/FAV.png"
              className="group-hover:hidden sm:w-4 w-3 sm:h-4 h-3 transition duration-200"
              alt="FAV"
            />
            <img
              src="/src/assets/FAV OVER.png"
              className="hidden group-hover:block hover:scale-110 sm:w-6 w-4 sm:h-6 h-4 transition duration-200"
              alt="FAV Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/carrito-compras")} href="#">
            <img
              src="/src/assets/BAG.png"
              className="group-hover:hidden sm:w-4 w-3 sm:h-4 h-3 transition duration-200"
              alt="BAG"
            />
            <img
              src="/src/assets/BAG OVER.png"
              className="hidden group-hover:block hover:scale-110 sm:w-6 w-4 sm:h-6 h-4 transition duration-200"
              alt="BAG Hover"
            />
          </button>
          <button className="text-gray-600 hover:text-gray-900 group"
            onClick={() => navigate("/soporte-tecnico")} href="#">
            <img
              src="/src/assets/CONTACT.png"
              className="group-hover:hidden sm:w-4 w-3 sm:h-4 h-3 transition duration-200"
              alt="CONTACT"
            />
            <img
              src="/src/assets/CONTACT OVER.png"
              className="hidden group-hover:block hover:scale-110 sm:w-6 w-4 sm:h-6 h-4 transition duration-200"
              alt="CONTACT Hover"
            />
          </button>
        </div>
      </div>
      {/* Navegación versión móvil */}
      <nav className="px-1 pt-0 pb-2 sm:hidden">
        {/* Barra de búsqueda */}
        <div className="relative bg-gradient-to-r from-[#7400ad] to-[#d80495] p-[2px] rounded-full">
          <div className="flex items-center bg-white rounded-full sm:w-96 w-full sm:pl-10 pl-5 relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full sm:text-base text-xs bg-transparent focus:outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Para que sí funcione el click en sugerencia
            />
            <FaSearch className="absolute sm:text-base text-xs sm:left-5 left-1 text-gray-400" />
            <button
              className="bg-[#d80495] text-white sm:px-3 px-2 sm:py-1 py-0 rounded-full hover:bg-[#7400ad]"
              onClick={handleSearch}
            >
              <FaSearch className="inline sm:text-base text-xs mb-1 text-white" />
            </button>

            {/* SUGERENCIAS */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
                {filteredSuggestions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 sm:text-sm text-xs"
                    onClick={() => {
                      setSearchTerm(item);
                      handleSearch();
                    }}
                  >
                    <FaSearch className="text-gray-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
