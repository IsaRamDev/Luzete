import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BotonHome() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <button
      onClick={goToHome}
      className="fixed sm:bottom-10 sm:right-10 bottom-5 right-5 bg-[#d80495] hover:bg-[#7400ad] text-white sm:p-4 p-2 rounded-full shadow-lg z-[9999]"
      aria-label="Ir al inicio"
    >
      <FaHome size={20} />
    </button>
  );
}

export default BotonHome;
