
function AvisoDePrivacidad() {
  return (
    <div className="bg-gray-100 sm:py-16 py-8">
      <div className="container mx-auto sm:px-6 px-3">
        <h1 className="sm:text-4xl text-xl font-bold text-center text-[#7400ad] sm:mb-16 mb-5">
          Aviso de Privacidad
        </h1>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 sm:text-base text-sm sm:p-12 p-6">
          <p className="text-gray-900 leading-relaxed mb-12">
            En <span className="font-semibold">Luzete Fashion</span>, valoramos la privacidad de nuestros clientes y estamos comprometidos con la protección de sus datos personales. Este aviso describe cómo recopilamos, utilizamos y protegemos tu información.
          </p>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">1. Datos Recopilados</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Recopilamos los siguientes datos personales para poder ofrecerte nuestros servicios:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Nombre completo</li>
            <li>Dirección de envío y facturación</li>
            <li>Correo electrónico</li>
            <li>Número telefónico</li>
            <li>Información de pago</li>
          </ul>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">2. Uso de la Información</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los datos personales recopilados serán utilizados para los siguientes fines:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Procesar y enviar tus pedidos</li>
            <li>Proveer soporte al cliente</li>
            <li>Enviar promociones, ofertas y novedades (si el cliente ha dado su consentimiento)</li>
            <li>Cumplir con obligaciones legales y fiscales</li>
          </ul>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">3. Protección de Datos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tu información contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema es completamente seguro y no podemos garantizar la seguridad absoluta de tus datos.
          </p>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">4. Compartición de Información</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No compartimos tus datos personales con terceros, salvo en las siguientes situaciones:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Con empresas de mensajería para el envío de tus pedidos</li>
            <li>Con autoridades legales si es requerido por ley</li>
            <li>Con terceros proveedores de servicios que nos ayuden a operar nuestro negocio (p. ej., plataformas de pago)</li>
          </ul>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">5. Derechos del Titular de los Datos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tienes derecho a acceder, rectificar, cancelar u oponerte (derechos ARCO) al tratamiento de tus datos personales. Para ejercer estos derechos, puedes contactarnos a través de los siguientes medios:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Correo electrónico: <a href="mailto:privacidad@luzetefashion.com" className="text-[#7400ad] hover:underline">privacidad@luzetefashion.com</a>
          </p>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">6. Modificaciones al Aviso de Privacidad</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio será publicado en esta página y se notificará a los usuarios registrados mediante correo electrónico.
          </p>

          <h2 className="sm:text-2xl text-lg font-bold text-[#7400ad] mt-6 mb-4">7. Contacto</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tienes preguntas o inquietudes sobre este aviso de privacidad, no dudes en contactarnos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Correo electrónico: <a href="mailto:privacidad@luzetefashion.com" className="text-[#7400ad] hover:underline">privacidad@luzetefashion.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AvisoDePrivacidad;
