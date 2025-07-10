import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
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

    const serviceID = 'tu_service_id'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'tu_template_id'; // Reemplaza con tu Template ID de EmailJS
    const userID = 'tu_user_id'; // Reemplaza con tu User ID de EmailJS

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Correo enviado:', response);
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' }); // Limpia los campos
        setEnviando(false);
        setExito(true);
        setTimeout(() => setExito(false), 3000); // Oculta el mensaje de éxito después de 3 segundos
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setEnviando(false);
      });
  };

  return (
    <div className="bg-gray-100 sm:py-16 py-8">
      <div className="container mx-auto sm:px-6 px-3">
        <h1 className="sm:text-4xl text-xl font-bold text-center text-[#7400ad] sm:mb-16 mb-5">
          Contáctanos
        </h1>
        <div className="bg-white rounded-lg shadow-md sm:text-base text-sm sm:p-12 p-6">
          <p className="sm:text-lg text-gray-900 leading-relaxed text-center mb-6">
            ¿Tienes alguna pregunta o necesitas ayuda? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
          </p>
          {exito && (
            <p className="text-green-500 text-center font-semibold mb-4">
              ¡Tu mensaje ha sido enviado con éxito!
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
              <label htmlFor="asunto" className="block text-gray-700 font-medium">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder="¿Sobre qué es tu mensaje?"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700 font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Escribe tu mensaje aquí"
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
                {enviando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
