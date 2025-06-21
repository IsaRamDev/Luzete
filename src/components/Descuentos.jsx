import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = descuentos.slice(startIndex, endIndex);

  return (
    <div className="mb-20 px-20" id="descuentos">
      <h2 className="text-3xl font-semibold mb-4 text-[#ff1654]">OFERTAS hasta 50%</h2>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <div key={item.id} onClick={() => navigate(`/producto/${item.id}`)} className="hover:scale-110 shadow-md mb-5">
              <img src={item.src} alt={item.name} className="w-full object-cover" />
              <div className="my-2 pl-4 text-sm">
                <p className="text-base">{item.name}</p>
                <p className="text-[#ff1654] font-bold">
                  {item.price}
                  <label className="ml-1 p-0.5 bg-[#ff1654] text-white">-30%</label>
                </p>
                <p className="font-extrabold line-through">{item.vendor}</p>
              </div>
            </div>
          ))}
        </div>

        {currentPage > 0 && (
          <button onClick={() => setCurrentPage(currentPage - 1)} className="absolute top-1/2 -ml-12 h-16 w-16 transform -translate-y-1/2">
            <img src="/src/assets/B IZQ.png" alt="Prev" className="w-8 h-8" />
          </button>
        )}
        {(currentPage + 1) * itemsPerPage < descuentos.length && (
          <button onClick={() => setCurrentPage(currentPage + 1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-12">
            <img src="/src/assets/B DER.png" alt="Next" className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}
