function swwetClose() {
  setTimeout(() => {
    Swal.close();
  }, 2000);
}

function swwetInfo() {
  Swal.fire({
    title: 'Procesando...',
    text: 'Por favor, espera un momento.',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

function swwetService() {
  Swal.fire({
    title: 'Error',
    text: 'Servicio Inaccesible.',
    icon: 'error'
  });
}
