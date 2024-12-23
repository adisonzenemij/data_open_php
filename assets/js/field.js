function socrataField() {
  let htmlName = 'fieldModal';
  let result = existsElement(htmlName);
  if (htmlName && result) {
    modalAction('open', htmlName);
    $(`#${htmlName}`).one('shown.bs.modal', function () {
      fieldData(columnService);
    });
  }
}

function fieldTable() {
  return [
    {"className":"text-wrap id","data":"id","id":"id","title":"Accion","type":"text","visible":true},
    {"className":"text-wrap column","data":"column","id":"column","title":"Columna","type":"text","visible":false},
    {"className":"text-wrap value","data":"value","id":"value","title":"Campo","type":"text","visible":true},
  ];
}

function fieldDoom() {
  return [
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'button': false},
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'lenght': false},
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'page': false},
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'register': false},
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'search': true},
  ];
}

function fieldData(response) {
  consoleData(response);
  let htmlName = 'filterField';
  let result = existsElement(htmlName);
  if (htmlName && result) {
    let tbHght = false;
    let column = fieldTable();

    let cnfgDoom = fieldDoom();

    let dataApi = response.map(item => {
      let format = item.property.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      return {
        id: item.property,
        column: item.property,
        value: format,
      };
    });

    let definition = [
      {
        targets: [0],
        render: function (data, type, row) {
          return `<span class="badge text-primary"
            onclick="fieldSelect('${data}');"
            style="cursor: pointer;">
              <em class="fas fa-eye"></em>
              Seleccionar
            </span>
          `;
        },
      },
    ];

    tableHead();
    tableData(
      'dt_field',
      cnfgDoom,
      dataApi,
      column,
      definition,
      [],
      tbHght
    );
  }
}

function fieldSelect(response) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      // Acción a tomar si el usuario confirma
      Swal.fire('¡Hecho!', 'Acción confirmada.', 'success');
      fieldAssign(response);
      fieldClose();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Acción a tomar si el usuario cancela
      Swal.fire('Cancelado', 'Acción cancelada.', 'info');
    }
  });
}

function fieldAssign(response) {
  let htmlName = 'filterField';
  let result = existsElement(htmlName);
  if (htmlName && result) {
    let dataElement = document.getElementById(htmlName);
    // Limpiar el contenido actual del select
    dataElement.innerHTML = '';
    // Crear una nueva opción para cada propiedad
    let option = document.createElement('option');
    // El valor será el nombre de la propiedad
    option.value = response;
    // Convertir la propiedad en formato
    // Primera letra de cada palabra en mayúscula
    option.textContent = response
      // Dividir la propiedad en palabras
      .split('_')
      // Capitalizar la primera letra
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      // Unir las palabras con espacio
      .join(' ');
    // Añadir la opción al campo select
    dataElement.appendChild(option);
  }
}

function fieldClose() {
  let htmlName = 'fieldModal';
  let result = existsElement(htmlName);
  if (htmlName && result) {
    modalAction('close', htmlName);
  }
}

function fieldClean() {
  let htmlName = 'filterField';
  let result = existsElement(htmlName);

  // Verificar si el elemento existe
  if (htmlName && result) {
    let dataElement = document.getElementById(htmlName);

    // Limpiar todas las opciones del select
    while (dataElement.options.length > 0) {
      dataElement.remove(0);
    }

    // Crear la opción por defecto
    let defaultOption = document.createElement('option');
    defaultOption.value = '';  // Valor vacío
    defaultOption.textContent = 'Ninguno';  // Texto de la opción

    // Añadir la opción por defecto al select
    dataElement.appendChild(defaultOption);
  }
}
