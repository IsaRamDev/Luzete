function ResponsabilidadSocial() {
  return (
    <div className="sm:pt-16 pt-6 sm:pb-32 pb-10">
      <div className="container mx-auto sm:px-6 px-3">
        <h1 className="sm:text-4xl text-xl font-bold text-center text-[#7400ad] sm:mb-16 mb-5">
          Responsabilidad Social
        </h1>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center sm:p-32 p-6">
          <img
            src="/src/assets/LUZETE MAQUETA (2).jpg"
            alt="Comercio Local en México"
            className="absolute w-full h-full object-cover z-0"
          />
          <div>
          </div>
          <div className="sm:text-lg text-sm">
            <p className="leading-relaxed text-justify relative z-0">
              En <span className="font-semibold">Luzete Fashion</span>, nos
              especializamos en la venta por mayoreo de productos de moda para
              boutiques, tiendas minoristas y emprendedores. Ofrecemos un
              catálogo amplio y actualizado que permite a nuestros clientes
              mantenerse a la vanguardia en tendencias de moda, asegurando
              calidad y precios competitivos.
            </p>
            <p className="leading-relaxed text-justify mt-6 relative z-0">
              Nuestro compromiso es contribuir al crecimiento económico del
              país, fomentando la creación de empleos y fortaleciendo las
              comunidades locales. A través de nuestras iniciativas, buscamos
              impulsar el desarrollo de la industria de la moda en México y
              posicionar al talento nacional en el mercado global.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsabilidadSocial;
