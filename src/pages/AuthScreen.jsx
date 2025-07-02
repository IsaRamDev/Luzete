import { useState } from 'react';

function AuthScreen() {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    // Simular el proceso de registro/inicio de sesión
    setTimeout(() => {
      setEnviando(false);
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }, 2000);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white rounded-lg shadow-md py-10 p-16">
          <div className="flex justify-center mb-8">
            <button
              className={`w-1/2 py-2 text-center font-bold text-lg ${
                isRegister
                  ? 'border-b-2 border-[#7400ad] text-[#7400ad]'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsRegister(true)}
            >
              Registrarse
            </button>
            <button
              className={`w-1/2 py-2 text-center font-bold text-lg ${
                !isRegister
                  ? 'border-b-2 border-[#7400ad] text-[#7400ad]'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsRegister(false)}
            >
              Iniciar Sesión
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
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
                  required={isRegister}
                  placeholder="Escribe tu nombre"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                E-mail
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
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Escribe tu contraseña"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-10"
              />
            </div>
            {isRegister && (
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Repite tu contraseña"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            )}
            {!isRegister && (
            <p className="text-gray-600 text-center">
              ¿Has olvidado tu contraseña?{' '}
            </p>
          )}
            <div className='flex justify-center'>
              <button
                type="submit"
                className={`${
                  enviando ? 'bg-gray-400' : 'bg-gradient-to-r from-[#7400ad] to-[#d80495]'
                } text-white px-8 py-2 rounded-full text-xl hover:bg-[#003080] transition duration-300`}
                disabled={enviando}
              >
                {enviando
                  ? 'Procesando...'
                  : isRegister
                  ? 'REGISTRARSE'
                  : 'INICIAR SESIÓN'}
              </button>
            </div>
          </form>
          {!isRegister && (
            <p className="text-gray-600 text-center mt-6">
              ¿No tienes cuenta?{' '}
              <a
                href="#"
                className="text-[#7400ad] font-semibold hover:underline"
              >
                Registrate
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
