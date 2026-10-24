document.addEventListener('DOMContentLoaded', () => {
    const bannerCookies = document.getElementById('cookie-banner');
    const botonAceptar = document.getElementById('accept-btn');
    const botonCerrar = document.getElementById('close-btn');

    // 1. Comprobar si el usuario ya dio su consentimiento previamente
    const cookiesAceptadas = localStorage.getItem('cookieConsent');

    if (!cookiesAceptadas) {
        // Si no existe el registro, mostramos el banner removiendo la clase 'hidden'
        bannerCookies.classList.remove('hidden');
    }

    // 2. Función para aceptar y ocultar el banner guardando en localStorage
    const manejarConsentimiento = () => {
        localStorage.setItem('cookieConsent', 'true');
        bannerCookies.classList.add('hidden');
    };

    // Evento al hacer clic en el botón "Aceptar"
    botonAceptar.addEventListener('click', manejarConsentimiento);

    // Evento al hacer clic en la "X" para cerrar el banner
    botonCerrar.addEventListener('click', manejarConsentimiento);
});