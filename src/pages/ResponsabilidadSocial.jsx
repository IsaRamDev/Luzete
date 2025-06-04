function ResponsabilidadSocial() {
  return (
    <div className="bg-gray-100 pt-16 pb-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#001F54] mb-16">
          Responsabilidad Social
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276613_640.jpg" // Imagen representativa del comercio local en México
              alt="Comercio Local en México"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              En <span className="font-semibold">Luzete Fashion</span>, nos
              especializamos en la venta por mayoreo de productos de moda para
              boutiques, tiendas minoristas y emprendedores. Ofrecemos un
              catálogo amplio y actualizado que permite a nuestros clientes
              mantenerse a la vanguardia en tendencias de moda, asegurando
              calidad y precios competitivos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mt-6">
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
