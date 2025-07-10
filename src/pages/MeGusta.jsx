import { useNavigate } from "react-router-dom";

const descuentos = [
  { id: 1, src: "/src/assets/PRODUCTO (1).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 2, src: "/src/assets/PRODUCTO (2).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 3, src: "/src/assets/PRODUCTO (3).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
  { id: 4, src: "/src/assets/PRODUCTO (4).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 5, src: "/src/assets/PRODUCTO (5).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 6, src: "/src/assets/PRODUCTO (6).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
  { id: 7, src: "/src/assets/PRODUCTO (7).png", name: "Descuento en auriculares", price: "$19.99", vendor: "Vendedor 1" },
  { id: 8, src: "/src/assets/PRODUCTO (8).png", name: "Descuento en cámaras", price: "$29.99", vendor: "Vendedor 2" },
  { id: 9, src: "/src/assets/PRODUCTO (1).png", name: "Descuento en relojes", price: "$39.99", vendor: "Vendedor 3" },
];

export default function Descuentos() {
  const navigate = useNavigate();

  return (
    <div className="sm:mb-20 mb-10 sm:mt-32 mt-20 px-4 sm:px-10 lg:px-20" id="descuentos">
      <h2 className="sm:text-3xl text-xl font-semibold sm:mb-8 mb-2 text-[#7400ad]">Favoritos</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {descuentos.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/producto/${item.id}`)}
            className="flex gap-4 items-start cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-all flex-wrap"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full sm:w-32 md:w-40 lg:w-48 h-auto object-cover shrink-0"
            />
            <div className="flex-1 min-w-0 text-sm sm:text-lg">
              <p className="font-medium text-[#222]">{item.name}</p>
              <p className="text-[#ff1654] font-bold flex items-center gap-2">
                MXN {item.price}
                <span className="p-1 px-2 bg-[#ff1654] text-white text-xs rounded">-30%</span>
              </p>
              <p className="font-semibold line-through">
                {item.vendor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}