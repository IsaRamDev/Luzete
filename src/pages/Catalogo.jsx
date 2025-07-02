import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterPanel from "../components/Filtro";
import ProductCard from "../components/FilteredProducts";
import { mockProducts, catalogo } from "../components/data/MockData";

export default function SubCatalog() {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    sizes: [],
    colors: [],
    vendors: [],
    discounts: [],
  });

  const [sortOption, setSortOption] = useState("");

  const handleToggleButton = (key, value) => {
    setFilters((prev) => {
      const values = prev[key];
      if (values.includes(value)) {
        return { ...prev, [key]: values.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...values, value] };
      }
    });
  };

  const filteredProducts = mockProducts.filter((product) => {
    const priceOk =
      (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice));

    const sizeOk =
      filters.sizes.length === 0 || filters.sizes.includes(product.size);

    const colorOk =
      filters.colors.length === 0 || filters.colors.includes(product.color);

    const vendorOk =
      filters.vendors.length === 0 || filters.vendors.includes(product.vendor);

    const discountOk =
      filters.discounts.length === 0 ||
      filters.discounts.some((discount) => {
        const percent = parseInt(discount);
        return product.price <= 100 * (1 - percent / 100);
      });

    return (
      product.category === category &&
      product.subCategory === subCategory &&
      priceOk &&
      sizeOk &&
      colorOk &&
      vendorOk &&
      discountOk
    );
  });

  return (
    <div className="flex mb-10">
      <FilterPanel
        filters={filters}
        setFilters={setFilters}
        sortOption={sortOption}
        setSortOption={setSortOption}
        handleToggleButton={handleToggleButton}
        uniqueVendors={Array.from(new Set(mockProducts.map((p) => p.vendor)))}
      />

      <div className="relative ml-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} onClick={() => navigate(`/catalogo/${category}/${subCategory}/${item.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
}
