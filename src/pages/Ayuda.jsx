import { useState } from 'react';

function Ayuda() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pregunta: '',
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

    // Simular envío de formulario (puedes conectar esto a tu backend o EmailJS)
    setTimeout(() => {
      setFormData({ nombre: '', email: '', pregunta: '' }); // Limpia los campos
      setEnviando(false);
      setExito(true);
      setTimeout(() => setExito(false), 3000); // Oculta el mensaje de éxito después de 3 segundos
    }, 2000);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#001F54] mb-16">
          Ayuda
        </h1>
        <div className="bg-white rounded-lg shadow-md p-12">
          <p className="text-lg text-gray-900 leading-relaxed text-center mb-6">
            Encuentra respuestas a tus preguntas o solicita soporte adicional.
          </p>
          <h2 className="text-2xl font-bold text-[#001F54] mb-6">Preguntas Frecuentes</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-gray-700">
                ¿Cómo puedo restablecer mi contraseña?
              </h3>
              <p className="text-gray-600">
                Puedes restablecer tu contraseña haciendo clic en &quot;¿Olvidaste tu contraseña?&quot; en la pantalla de inicio de sesión.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-700">
                ¿Cómo contacto al soporte técnico?
              </h3>
              <p className="text-gray-600">
                Puedes enviarnos un mensaje utilizando el formulario en la sección &quot;Contáctanos&quot;.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-700">
                ¿Dónde puedo encontrar las políticas de privacidad?
              </h3>
              <p className="text-gray-600">
                Nuestras políticas de privacidad están disponibles en el enlace en el pie de página de este sitio web.
              </p>
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-[#001F54] mt-12 mb-6">
            ¿Necesitas más ayuda?
          </h2>
          {exito && (
            <p className="text-green-500 text-center font-semibold mb-4">
              ¡Tu solicitud ha sido enviada con éxito!
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
              <label htmlFor="pregunta" className="block text-gray-700 font-medium">
                Pregunta o Detalle del Problema
              </label>
              <textarea
                id="pregunta"
                name="pregunta"
                value={formData.pregunta}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe brevemente tu problema o consulta"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`${
                  enviando ? 'bg-gray-400' : 'bg-[#001F54]'
                } text-white px-6 py-3 rounded-lg hover:bg-[#003080] transition duration-300 w-full`}
                disabled={enviando}
              >
                {enviando ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;