import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="relative pt-16 pb-10 z-50 px-20">
<div className="absolute top-0 left-20 right-20 h-[3px] bg-gradient-to-r from-[#7400ad] to-[#d80495]" />
      <div className="container justify-items-center">
        {/* Sección de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full justify-items-center">
          {/* Soporte al Cliente */}
          <div>
            <h3 className="">Atención al Cliente</h3>
            <ul>
              <li>
                <a onClick={() => navigate("/devoluciones")} className="hover:text-gray-400">
                  Devoluciones
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/contactanos")} className="hover:text-gray-400">
                  Contactanos
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/ayuda")} className="hover:text-gray-400">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Acerca de la tienda */}
          <div>
            <h3 className="">
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
                <a onClick={() => navigate("/quienes-somos")} className="hover:text-gray-400">
                  ¿Quiénes somos?
                </a>
              </li>
              {/*<li><a onClick={() => navigate("/trabajo" className="hover:text-gray-400">Empleos</a></li>*/}
            </ul>
          </div>

          {/* Promociones */}
          <div>
            <h3 className="">Promociones</h3>
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

        <div className="flex space-x-4 text-sm text-center justify-center mt-8">
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
        {/* Información de contacto */}
        <div className="mt-4 text-center">
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

        <div className="absolute right-20 left-20 h-[3px] bg-gradient-to-r from-[#7400ad] to-[#d80495]" />

        {/* Enlaces de políticas y redes sociales */}
        <div className="mt-6 pt-4 text-center">
          <div className="text-xs mt-3">
            <p>© 2025 Luzete Fashion</p>
          </div>
          {/* <a onClick={() => navigate("/terminos-y-condiciones")} className="text-xs mt-4 mr-3 hover:text-gray-400">
            Términos y condiciones
          </a>|
          <a onClick={() => navigate("/aviso-de-privacidad")} className="text-xs mt-4 ml-3 hover:text-gray-400">
             Aviso de privacidad
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
