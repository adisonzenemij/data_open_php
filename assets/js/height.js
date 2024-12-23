heightInitial();

function heightInitial() {
  // Capturar la altura actual del navegador
  const initialWindowHeight = window.innerHeight;
  console.log('height initial:', initialWindowHeight, 'px');

  // Almacenar valor en una variable global
  window.appHeight = initialWindowHeight;
}

// Accede al valor global
function showHeight() {
  let appHeight = window.appHeight;
  console.log('value initial:', appHeight, 'px');
  return appHeight;
}

// Escuchar eventos de redimensionamiento para actualizar la altura global
window.addEventListener('resize', function() {
  // Actualizar la variable global con la nueva altura
  const newWindowHeight = window.innerHeight;
  console.log('height resize:', newWindowHeight, 'px');

  // Actualizar el valor de la variable global
  window.appHeight = newWindowHeight;
});

// Obtener el valor inicial
heightInitial();
