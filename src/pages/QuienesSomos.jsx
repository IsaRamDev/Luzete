
function QuienesSomos() {
  return (
    <div className="pt-16 pb-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#7400ad] mb-16">
          ¿Quiénes Somos?
        </h1>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-20">
          <img
            src="https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg"
            alt="Profesionales de la moda"
            className="absolute w-full h-full object-cover z-0"
          />
          <div>
            <p className="text-lg leading-relaxed text-justify relative z-0">
              <span className="font-semibold">Luzete Fashion</span> es una marca 100% mexicana dedicada a ofrecer las últimas tendencias en moda. Nuestra misión es brindar productos que resalten la belleza y estilo único de cada persona, sin comprometer la calidad ni la accesibilidad.
            </p>
            <p className="text-lg leading-relaxed text-justify mt-6 relative z-0">
              Desde nuestros inicios, hemos trabajado con pasión para posicionarnos como una de las marcas líderes en el mercado. Nuestro equipo está compuesto por profesionales que entienden las necesidades de nuestros clientes y buscan constantemente innovar en diseño, calidad y servicio.
            </p>
            <p className="text-lg leading-relaxed text-justify mt-6 relative z-0">
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
