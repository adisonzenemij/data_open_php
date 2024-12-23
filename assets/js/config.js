configInitial();

let configRecord = 2500;

function configInitial() {
  const storage = strgGet(strgLimit);
  if (storage) { configValue(storage); }
  if (!storage) {
    strgSet(strgLimit, configRecord);
    configValue(configRecord);
  }
}

function configDefault() {
  strgSet(strgLimit, configRecord);
  configValue(configRecord);
}

function configValue(value) {
  const htmlName = 'configLimit';
  if (existsElement(htmlName)) {
    const dataElement = elementId(htmlName);
    if (dataElement) {
      dataElement.value = value;
    }
  }
}

function configApply() {
  const htmlName = 'configLimit';
  if (existsElement(htmlName)) {
    const dataElement = elementId(htmlName);
    if (dataElement) {
      let newValue = dataElement.value;
      if (newValue) {
        strgSet(
          strgLimit,
          newValue
        );
      }
    }
  }
  configSuccess();
}

function configSuccess() {
  Swal.fire({
    title: 'Éxito',
    text: 'Configuración aplicada correctamente.',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Aceptar',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      configClose();
    }
  });
}

function configClose() {
  const htmlName = 'configModal';
  if (existsElement(htmlName)) {
    const dataElement = elementId(htmlName);
    if (dataElement) {
      if (dataElement.classList.contains('show')) {
        // Ejecutar la acción si el modal está abierto
        modalAction('close', htmlName);
        serviceStrg();
      }
    }
  }
}
