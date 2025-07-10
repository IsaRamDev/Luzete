import { useState } from "react";

export default function FilterPanel({
  filters,
  setFilters,
  sortOption,
  setSortOption,
  handleToggleButton,
  uniqueVendors,
}) {
  const FilterSection = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b-2 border-gray-400 px-3 sm:py-5 py-2 text-gray-600">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <label className="font-medium sm:text-2xl text-sm">{title}</label>
          <span className="sm:text-2xl font-bold">{open ? "–" : "+"}</span>
        </div>
        {open && <div className="mt-2">{children}</div>}
      </div>
    );
  };

  return (
    <div className="sm:w-1/4 w-40 p-4 shadow-2xl border border-gray-200 rounded-lg">
      <h2 className="sm:text-4xl mb-4 text-center text-gray-600">Filtrar</h2>

      <div className="sm:mb-4 mb-2 text-sm sm:text-base">
        <label className="block sm:text-2xl font-medium mb-2 text-gray-600">Ordenar por:</label>
        <div className="flex-col text-gray-600">
          <button
            className={`px-5 border-2 border-gray-400 rounded-full ${sortOption === "priceAsc" ? "bg-[#7400ad] text-white" : "none"}`}
            onClick={() =>
              setSortOption(sortOption === "priceAsc" ? "" : "priceAsc")
            }
          >
            Novedades
          </button>
          <div className="flex gap-2 mt-2 flex-col sm:flex-row">
            <button
              className={`sm:px-4 px-3 border-2 border-gray-400 rounded-full ${sortOption === "priceDesc" ? "bg-[#7400ad] text-white" : "none"}`}
              onClick={() =>
                setSortOption(sortOption === "priceDesc" ? "" : "priceDesc")
              }
            >
              Mayor precio
            </button>
            <button
              className={`sm:px-4 px-3 border-2 border-gray-400 rounded-full ${sortOption === "nameAsc" ? "bg-[#7400ad] text-white" : "none"}`}
              onClick={() =>
                setSortOption(sortOption === "nameAsc" ? "" : "nameAsc")
              }
            >
              Menor precio
            </button>
          </div>
        </div>
      </div>

      <FilterSection title="Precio">
        <div className="flex-row sm:text-base text-sm">
          <div className="flex items-center sm:gap-4 mb-2">
            <label>De:</label>
            <input
              type="number"
              className="px-2 border-2 border-gray-400 rounded-full w-1/2 sm:text-base text-sm sm:w-1/2 min-w-24"
              placeholder=" Precio mínimo"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
            />
          </div>
          <div className="flex items-center sm:gap-4 gap-2">
            <label className="sm:ml-2">A:</label>
            <input
              type="number"
              className="px-2 border-2 border-gray-400 rounded-full sm:w-1/2 min-w-24"
              placeholder="Precio máximo"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Descuentos">
        <div className="flex flex-wrap sm:gap-4 gap-2 sm:text-base text-sm">
          {[10, 20, 30, 40, 50].map((percent) => (
            <button
              key={percent}
              className={`sm:px-3 px-1 rounded-full border-2 border-gray-400 ${filters.discounts.includes(percent.toString()) ? "bg-[#7400ad] text-white" : "none"}`}
              onClick={() =>
                handleToggleButton("discounts", percent.toString())
              }
            >
              {percent}%
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Talla">
        <div className="flex flex-wrap sm:gap-4 gap-2 sm:text-base text-sm">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              className={`sm:px-3 px-1 rounded-full border-2 border-gray-400 ${filters.sizes.includes(size) ? "bg-[#7400ad] text-white" : "none"}`}
              onClick={() => handleToggleButton("sizes", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Color">
        <div className="flex flex-wrap sm:gap-4 gap-2 sm:text-base text-sm">
          {["Red", "Blue", "Black", "Green", "Pink", "Gray", "Brown", "Yellow", "White", "Purple", "Orange", "Magenta", "Aqua"].map((color) => (
            <button
              key={color}
              className={`rounded-full border-2 flex items-center justify-center transition-all ${filters.colors.includes(color) ? "ring-2 ring-[#7400ad]" : "border-gray-400"}`}
              onClick={() => handleToggleButton("colors", color)}
              title={color}
            >
              <div
                className="sm:w-6 sm:h-6 w-4 h-4 rounded-full"
                style={{ backgroundColor: color.toLowerCase() }}
              />
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Vendedor">
        <div className="flex flex-wrap sm:gap-4 gap-2 sm:text-base text-sm">
          {uniqueVendors.map((vendor) => (
            <button
              key={vendor}
              className={`sm:px-3 px-1 rounded-full border-2 border-gray-400 ${filters.vendors.includes(vendor) ? "bg-[#7400ad] text-white" : "none"}`}
              onClick={() => handleToggleButton("vendors", vendor)}
            >
              {vendor}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}
