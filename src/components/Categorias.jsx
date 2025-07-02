import { useNavigate } from "react-router-dom";

const catalogo = {
  categorias: [
    { id: 1, src: "/src/assets/CATEGORIA mujer.png", name: "mujer" },
    { id: 2, src: "/src/assets/CATEGORIA hombre.png", name: "hombre" },
    { id: 3, src: "/src/assets/CATEGORIA niña.png", name: "niña" },
    { id: 4, src: "/src/assets/CATEGORIA niño.png", name: "niño" },
  ],
};

export default function Categorias() {
  const navigate = useNavigate();

  const handleClick = (category, name) => {
    const formatted = name.toLowerCase().replace(/ /g, "-");
    navigate(`/catalogo/${category}/${formatted}`);
  };

  return (
    <div className="px-20 mb-24">
      <h2 className="text-3xl font-semibold text-[#ff1654]">CATEGORIAS</h2>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {catalogo.categorias.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleClick("categorias", cat.name)}
            className="shadow-md text-center hover:scale-110"
          >
            <img src={cat.src} alt={cat.name} className="w-full object-cover" />
            <p className="text-lg my-5 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
