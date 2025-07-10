import { useState } from 'react';

function SoporteTecnico() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    problema: '',
    descripcion: '',
  });

  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Simular envío de formulario (puedes integrar con tu backend o EmailJS)
    setTimeout(() => {
      setFormData({ nombre: '', email: '', problema: '', descripcion: '' }); // Limpia los campos
      setEnviando(false);
      setExito(true);
      setTimeout(() => setExito(false), 3000); // Oculta el mensaje de éxito después de 3 segundos
    }, 2000);
  };

  return (
    <div className="bg-gray-100 sm:py-16 py-8">
      <div className="container mx-auto sm:px-6 px-3">
        <h1 className="sm:text-4xl text-xl font-bold text-center text-[#7400ad] sm:mb-16 mb-5">
          Soporte Técnico
        </h1>
        <div className="bg-white rounded-lg shadow-md sm:p-12 p-6 border border-gray-200 sm:text-base text-sm">
          <p className="sm:text-lg text-gray-900 leading-relaxed text-center mb-6">
            ¿Tienes problemas técnicos? Completa el formulario para reportar tu problema o consulta nuestra guía de solución de problemas.
          </p>
          <h2 className="sm:text-2xl text-xl font-bold text-[#7400ad] mb-6">Problemas Comunes</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-gray-700">
                Mi aplicación no carga correctamente
              </h3>
              <p className="text-gray-600">
                Intenta borrar la caché de tu navegador o reinicia la aplicación. Si el problema persiste, envía un reporte.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-700">
                No puedo iniciar sesión
              </h3>
              <p className="text-gray-600">
                Asegúrate de que tus credenciales sean correctas o utiliza la opción &quot;¿Olvidaste tu contraseña?&quot; para restablecerla.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-700">
                La página se queda en blanco
              </h3>
              <p className="text-gray-600">
                Verifica tu conexión a internet y recarga la página. Si sigue ocurriendo, infórmanos del problema.
              </p>
            </li>
          </ul>
          <h2 className="sm:text-2xl text-xl font-bold text-[#7400ad] mt-12 mb-6">
            Reportar un Problema
          </h2>
          {exito && (
            <p className="text-green-500 text-center font-semibold mb-4">
              ¡Tu reporte ha sido enviado con éxito!
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-gray-700 font-medium">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Escribe tu nombre"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tuemail@ejemplo.com"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="problema" className="block text-gray-700 font-medium">
                Tipo de Problema
              </label>
              <select
                id="problema"
                name="problema"
                value={formData.problema}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              >
                <option value="" disabled>
                  Selecciona un tipo de problema
                </option>
                <option value="Carga lenta">Carga lenta</option>
                <option value="Error de inicio de sesión">Error de inicio de sesión</option>
                <option value="Página en blanco">Página en blanco</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="descripcion" className="block text-gray-700 font-medium">
                Descripción del Problema
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe tu problema con el mayor detalle posible"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`${
                  enviando ? 'bg-gray-400' : 'bg-gradient-to-r from-[#7400ad] to-[#d80495]'
                } text-white px-8 py-2 sm:text-xl rounded-full  hover:scale-125 transition duration-200`}
                disabled={enviando}

              >
                {enviando ? 'Enviando...' : 'Enviar Reporte'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SoporteTecnico;
