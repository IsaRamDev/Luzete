import { useState } from "react";

export function useLikes() {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product) => {
    setLikedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // Si el producto ya está en la lista, lo eliminamos
        return prev.filter((p) => p.id !== product.id);
      } else {
        // Si no está, lo agregamos
        return [...prev, product];
      }
    });
  };

  return { likedProducts, toggleLike }; // Asegúrate de devolver estos valores
}
