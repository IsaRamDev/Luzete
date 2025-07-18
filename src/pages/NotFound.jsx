import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="sm:text-5xl text-xl font-bold mb-4">¡Página no encontrada!</h1>
      <p className="sm:text-2xl mb-10">Serás redirigido en unos segundos...</p>
      <img src="/src/assets/NotFoundDog.jpeg" alt="Next" className="sm:h-96 sm:w-96 sm:p-0 p-10" />
    </div>
  );
}