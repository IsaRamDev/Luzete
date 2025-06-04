import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#001F54] relative w-full top-0 left-0 text-white pt-16 pb-10 shadow-md z-50">
      <div className="container mx-auto px-6">
        {/* Sección de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
          {/* Soporte al Cliente */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Atención al Cliente</h3>
            <ul>
              <li>
                <a onClick={() => navigate("/devoluciones")}  className="hover:text-gray-400">
                  Devoluciones
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/contactanos")}  className="hover:text-gray-400">
                  Contactanos
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/ayuda")}  className="hover:text-gray-400">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Acerca de la tienda */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Acerca de Luzete Fashion
            </h3>
            <ul>
              <li>
                {" "}
                <a
                  onClick={() => navigate("/responsabilidad-social")} 
                  className="hover:text-gray-400"
                >
                  Responsabilidad social
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/quienes-somos")}  className="hover:text-gray-400">
                  ¿Quiénes somos?
                </a>
              </li>
              {/*<li><a onClick={() => navigate("/trabajo" className="hover:text-gray-400">Empleos</a></li>*/}
            </ul>
          </div>

          {/* Promociones */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Promociones</h3>
            <ul>
              {/*<li><a onClick={() => navigate("/buen-fin" className="hover:text-gray-400">Buen Fin</a></li>*/}
              <li>
                <a onClick={() => navigate("/hot-sale")} className="hover:text-gray-400">
                  Hot Sale
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/ofertas")} className=" hover:text-gray-400">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mt-12 text-center">
          <p className="text-sm mb-4">
            Comentarios y sugerencias:{" "}
            <a
              onClick={() => navigate("/contactanos")}
              className="hover:text-gray-400"
            >
              contacto@luzetefashion.com
            </a>
          </p>
          {/*<p className="text-sm mb-4">
            Contáctanos vía WhatsApp o por teléfono al 5555555333
          </p>*/}
        </div>

        {/* Enlaces de políticas y redes sociales */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="flex justify-center">
            <a onClick={() => navigate("https://facebook.com")} className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a onClick={() => navigate("https://instagram.com")} className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a onClick={() => navigate("https://twitter.com")} className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a onClick={() => navigate("https://youtube.com")} className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="text-xs mt-3">
            <p>© 2025 Luzete Fashion</p>
            <div className="flex space-x-4 text-sm text-center justify-center my-4">
              <a
                onClick={() => navigate("https://www.linkedin.com/company/kaix")}
                className="hover:scale-150"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaInstagram />
              </a>
              <a
                onClick={() => navigate("https://www.facebook.com/kaix.mx")}
                className="hover:scale-150"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                onClick={() => navigate("https://www.instagram.com/kaix.mx/")}
                className="hover:scale-150"
                target="_blank"
                aria-label="Instagram"
              >
                <FaTiktok />
              </a>
              <a
                onClick={() => navigate("https://www.tiktok.com/@kaix.mx")}
                className="hover:scale-150"
                target="_blank"
                aria-label="TikTok"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <a onClick={() => navigate("/terminos-y-condiciones")} className="text-xs mt-4 mr-3 hover:text-gray-400">
            Términos y condiciones
          </a>|
          <a onClick={() => navigate("/aviso-de-privacidad")} className="text-xs mt-4 ml-3 hover:text-gray-400">
             Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
