
function QuienesSomos() {
  return (
    <div className="sm:pt-16 pt-6 sm:pb-32 pb-10">
      <div className="container mx-auto sm:px-6 px-3">
        <h1 className="sm:text-4xl text-xl font-bold text-center text-[#7400ad] sm:mb-16 mb-5">
          ¿Quiénes Somos?
        </h1>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center sm:p-32 p-6">
          <img
            src="/src/assets/LUZETE MAQUETA (1).jpg"
            alt="Profesionales de la moda"
            className="absolute w-full h-full object-cover z-0"
          />
          <div className="sm:text-lg text-sm">
            <p className="leading-relaxed text-justify relative z-0">
              <span className="font-semibold">Luzete Fashion</span> es una marca 100% mexicana dedicada a ofrecer las últimas tendencias en moda. Nuestra misión es brindar productos que resalten la belleza y estilo único de cada persona, sin comprometer la calidad ni la accesibilidad.
            </p>
            <p className="leading-relaxed text-justify mt-6 relative z-0">
              Desde nuestros inicios, hemos trabajado con pasión para posicionarnos como una de las marcas líderes en el mercado. Nuestro equipo está compuesto por profesionales que entienden las necesidades de nuestros clientes y buscan constantemente innovar en diseño, calidad y servicio.
            </p>
            <p className="leading-relaxed text-justify mt-6 relative z-0">
              Creemos en la importancia de representar lo mejor de México y de construir una marca que no solo sea reconocida por su calidad, sino también por su compromiso con el crecimiento económico y social del país.
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
