import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="relative pt-8 pb-10 z-50 px-20 justify-items-center">
      <div className="absolute top-0 left-20 right-20 h-[3px] bg-gradient-to-r from-[#7400ad] to-[#d80495]" />
      <div className="container justify-items-center">
        {/* Sección de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full justify-items-center">
          {/* Soporte al Cliente */}
          <div>
            <ul>
              <li>
                <a onClick={() => navigate("/devoluciones")} href="#" className="hover:text-[#d80495]">
                  Devoluciones
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/contactanos")} href="#" className="hover:text-[#d80495]">
                  Contactanos
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/ayuda")} href="#" className="hover:text-[#d80495]">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Acerca de la tienda */}
          <div>
            <ul>
              <li>
                {" "}
                <a
                  onClick={() => navigate("/responsabilidad-social")} href="#"
                  className="hover:text-[#d80495]"
                >
                  Responsabilidad social
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/quienes-somos")} href="#" className="hover:text-[#d80495]">
                  ¿Quiénes somos?
                </a>
              </li>
              {/*<li><a onClick={() => navigate("/trabajo" className="hover:text-[#d80495]">Empleos</a></li>*/}
            </ul>
          </div>

          {/* Promociones */}
          <div>
            <ul>
              {/*<li><a onClick={() => navigate("/buen-fin" className="hover:text-[#d80495]">Buen Fin</a></li>*/}
              <li>
                <a onClick={() => navigate("/")} href="#" className=" hover:text-[#d80495]">
                  Promociones
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/")} href="#descuentos" className=" hover:text-[#d80495]">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 text-sm text-center justify-center mt-8">
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FACEBOOK"
          >
            <img
              src="/src/assets/FACEBOOK.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="FACEBOOK"
            />
            <img
              src="/src/assets/FACEBOOK OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="FACEBOOK Hover"
            />
          </a>
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <img
              src="/src/assets/X.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="X"
            />
            <img
              src="/src/assets/X OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="X Hover"
            />
          </a>
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="INSTAGRAM"
          >
            <img
              src="/src/assets/INSTAGRAM.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="INSTAGRAM"
            />
            <img
              src="/src/assets/INSTAGRAM OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="INSTAGRAM Hover"
            />
          </a>
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YOUTUBE"
          >
            <img
              src="/src/assets/YOUTUBE.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="YOUTUBE"
            />
            <img
              src="/src/assets/YOUTUBE OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="YOUTUBE Hover"
            />
          </a>
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WHATSAPP"
          >
            <img
              src="/src/assets/WHATSAPP.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="WHATSAPP"
            />
            <img
              src="/src/assets/WHATSAPP OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="WHATSAPP Hover"
            />
          </a>
          <a
            href="https://www.tiktok.com/@kaix.mx"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <img
              src="/src/assets/TIKTOK.png"
              className="group-hover:hidden w-6 h-6 transition duration-200"
              alt="TikTok"
            />
            <img
              src="/src/assets/TIKTOK OVER.png"
              className="hidden group-hover:block hover:scale-150 w-6 h-6 transition duration-200"
              alt="TikTok Hover"
            />
          </a>
        </div>
        {/* Información de contacto */}
        <div className="mt-4 text-center">
          <p className="text-sm mb-4">
            Comentarios y sugerencias:{" "}
            <a
              onClick={() => navigate("/contactanos")} href="#"
              className="text-[#d80495] font-bold underline"
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
          <a onClick={() => navigate("/terminos-y-condiciones")} className="text-xs mt-4 mr-3 hover:text-[#d80495]">
            Términos y condiciones
          </a>|
          <a onClick={() => navigate("/aviso-de-privacidad")} className="text-xs mt-4 ml-3 hover:text-[#d80495]">
             Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
