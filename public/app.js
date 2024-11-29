if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.log('Error al registrar el Service Worker:', error);
        });
    });
  }
  
  
  const installBtn = document.querySelector('.install-btn');
  installBtn.addEventListener('click', () => {
    alert('¡App instalada con éxito! Ahora puedes usarla offline.');
  });
  