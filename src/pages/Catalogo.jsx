import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockProducts = [
  // Productos para mujer - Blusas
  { id: 1, src: "https://via.placeholder.com/150", name: "Blusa 1", price: 25.99, size: "M", color: "Red", vendor: "Vendedor A", category: "mujer", subCategory: "blusas" },
  { id: 2, src: "https://via.placeholder.com/150", name: "Blusa 2", price: 30.99, size: "L", color: "Blue", vendor: "Vendedor B", category: "mujer", subCategory: "blusas" },

  // Productos para hombre - Pantalones
  { id: 3, src: "https://via.placeholder.com/150", name: "Pantalón 1", price: 40.99, size: "M", color: "Black", vendor: "Vendedor C", category: "hombre", subCategory: "pantalones" },
  { id: 4, src: "https://via.placeholder.com/150", name: "Pantalón 2", price: 50.99, size: "S", color: "Gray", vendor: "Vendedor D", category: "hombre", subCategory: "pantalones" },

  // Productos para mujer - Vestidos
  { id: 5, src: "https://via.placeholder.com/150", name: "Vestido 1", price: 60.99, size: "M", color: "Green", vendor: "Vendedor A", category: "mujer", subCategory: "vestidos" },
  { id: 6, src: "https://via.placeholder.com/150", name: "Vestido 2", price: 70.99, size: "L", color: "Pink", vendor: "Vendedor B", category: "mujer", subCategory: "vestidos" },
];

const catalogo = {
  mujer: [{ name: "blusas" }, { name: "conjuntos" }, { name: "vestidos" }],
  hombre: [{ name: "playeras" }, { name: "sudaderas" }],
};

export default function SubCatalog() {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  const subCategoryData = catalogo[category]?.find(
    (subCat) => subCat.name.toLowerCase() === subCategory
  );

  const [filters, setFilters] = useState({
    price: "",
    size: "",
    color: "",
    vendor: "",
  });

  const filteredProducts = mockProducts.filter((product) => {
    return (
      product.category === category &&
      product.subCategory === subCategory &&
      (!filters.price || product.price <= parseFloat(filters.price)) &&
      (!filters.size || product.size === filters.size) &&
      (!filters.color || product.color === filters.color) &&
      (!filters.vendor || product.vendor === filters.vendor)
    );
  });

  const handleProductClick = (productId) => {
    navigate(`/catalogo/${category}/${subCategory}/${productId}`);
  };

  return (
    <div className="flex">
      {/* Filtros */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Filtros</h2>
        <div className="mb-4">
          <label className="block mb-2">Precio máximo</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Talla</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
          >
            <option value="">Todas</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Color</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.color}
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Red">Rojo</option>
            <option value="Blue">Azul</option>
            <option value="Black">Negro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Vendedor</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.vendor}
            onChange={(e) => setFilters({ ...filters, vendor: e.target.value })}
          >
            <option value="">Todos</option>
            {Array.from(
              new Set(mockProducts.map((product) => product.vendor))
            ).map((vendor) => (
              <option key={vendor} value={vendor}>
                {vendor}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Productos */}
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">
          {category.charAt(0).toUpperCase() + category.slice(1)} -{" "}
          {subCategoryData?.name || "Subcategoría no encontrada"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:bg-gray-200 hover:scale-110 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-52 object-cover rounded-lg"
              />
              <p className="text-lg font-semibold mt-2">{product.name}</p>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
