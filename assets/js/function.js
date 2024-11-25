// Actualizar la altura del elemento
function updateElementHeight() {
    const tableContainer = document.getElementById('tableContent');
    const height = tableContainer.offsetHeight; // Alto del contenedor
    console.log('Alto del contenedor:', height, 'px');
}

// Escuchar cambios de tamaño de la ventana
window.addEventListener('resize', updateElementHeight);

// Llamar la función al cargar la página
updateElementHeight();