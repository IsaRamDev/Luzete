import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalleDescuento from "./pages/DetallesDescuento";
import NotFound from "./pages/NotFound";
import Catalogo from "./pages/Catalogo";
import ResponsabilidadSocial from "./pages/ResponsabilidadSocial";
import QuienesSomos from "./pages/QuienesSomos";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import AvisoDePrivacidad from "./pages/AvisoDePrivacidad";
import Contactanos from "./pages/Contactanos";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ayuda from "./pages/Ayuda";
import SoporteTecnico from "./pages/SoporteTecnico";
import AuthScreen from "./pages/AuthScreen";
import CarritoDeCompras from "./pages/CarritoCompras";

import React, { useEffect, useState } from "react";
import MeGusta from "./pages/MeGusta";
import PerfilScreen from "./pages/PerfilScreen";
import PantallaDevoluciones from "./pages/Devoluciones";
import BotonHome from "./components/BotonHome";

function App() {
   const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://www.luzetefashion.com/api/products.php")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => setProductos(data))
    .catch(error => console.error("Error cargando productos:", error));
}, []);

  return (
    <Router>
      <div>
        <Navbar />
        <BotonHome />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:category/:subCategory"
              element={<Catalogo />}
            />
            <Route
              path="/producto/:descuentoId"
              element={<DetalleDescuento />}
            />
            <Route
              path="/responsabilidad-social"
              element={<ResponsabilidadSocial />}
            />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route
              path="/terminos-y-condiciones"
              element={<TerminosYCondiciones />}
            />
            <Route
              path="/aviso-de-privacidad"
              element={<AvisoDePrivacidad />}
            />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/soporte-tecnico" element={<SoporteTecnico />} />
            <Route path="/auth-screen" element={<AuthScreen />} />
            <Route path="/carrito-compras" element={<CarritoDeCompras />} />
            <Route path="/me-gusta" element={<MeGusta />} />
            <Route path="/perfil" element={<PerfilScreen />} />
            <Route path="/devoluciones" element={<PantallaDevoluciones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
