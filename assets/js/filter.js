$(`#filterModal`).one('shown.bs.modal', function () {
  filterData('');
});

function filterTable() {
  return [
    {"className":"text-wrap id","data":"id","id":"id","title":"Accion","type":"text","visible":true},
    {"className":"text-wrap field","data":"field","id":"field","title":"Campo","type":"text","visible":false},
    {"className":"text-wrap ticket","data":"ticket","id":"ticket","title":"Etiqueta","type":"text","visible":true},
    {"className":"text-wrap cond","data":"cond","id":"cond","title":"Condicion","type":"text","visible":true},
    {"className":"text-wrap value","data":"value","id":"value","title":"Valor","type":"text","visible":true},
  ];
}

function socrataFilter() {
  // Capturar el formulario
  let form = document.getElementById('filterForm');

  // Crear un objeto FormData
  let formData = new FormData(form);

  // Obtener los valores de los campos del formulario
  let filterField = document.getElementById('filterField').value; // Campo select "filterField"
  let filterCond = formData.get('filterCond');   // Campo select "filterCond"
  let filterValue = formData.get('filterValue'); // Campo input "filterValue"

  // Imprimir los valores para verificar
  console.log('filterField:', filterField);
  console.log('filterCond:', filterCond);
  console.log('filterValue:', filterValue);

  // Validar los campos antes de continuar
  if (!filterValid(filterField, filterCond, filterValue)) {
    return; // Si la validación falla, salir de la función
  }

  // Generar un ID aleatorio único
  let valueRandom = Math.random().toString(36).substr(2, 9) + Date.now();
  let filterTicket = filterField
    // Dividir la propiedad en palabras
    .split('_')
    // Capitalizar la primera letra
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    // Unir las palabras con espacio
    .join(' ');

  let dataApi = {
    id: valueRandom,
    field: filterField,
    ticket: filterTicket,
    cond: filterCond,
    value: filterValue,
  };

  filterData(dataApi)
  fieldClean();
  filterClean();
}

function filterClean() {
  $('#filterCond').val('');
  $('#filterValue').val('');
}

// Función para validar los campos
function filterValid(filterField, filterCond, filterValue) {
  // Validar si algún campo está vacío
  if (!filterField || !filterCond || !filterValue) {
    // Si alguno está vacío, mostrar un SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Validación Formulario',
      text: 'Completa todos los campos antes de continuar.',
    });
    return false;
  }
  return true;
}

function filterDoom() {
  return [
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'button': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '6', 'xl': '6', 'lenght': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '6', 'xl': '6', 'page': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '6', 'xl': '6', 'register': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '6', 'xl': '6', 'search': true},
  ];
}

function filterData(response) {
  let tbHght = 500;
  let column = filterTable();

  let cnfgDoom = filterDoom();

  let dataApi = []; // Inicializa el array de datos

  // Si ya hay registros previos en la tabla, recuperarlos
  if (localStorage.getItem(strgFilter)) {
    dataApi = JSON.parse(localStorage.getItem(strgFilter));
  }

  // Agregar el nuevo registro a los datos existentes
  if (response) {
    dataApi.push(response);
  }

  // Guardar los datos actualizados en el localStorage
  localStorage.setItem(strgFilter, JSON.stringify(dataApi));

  let definition = [
    {
      targets: [0],
      render: function (data, type, row) {
        return `<span class="badge text-danger"
          onclick="filterDelete('${data}');"
          style="cursor: pointer;">
            <em class="fas fa-trash"></em>
            Eliminar
          </span>
        `;
      },
    },
  ];

  tableHead();
  tableData(
    'dt_filter',
    cnfgDoom,
    dataApi,
    column,
    definition,
    [],
    tbHght
  );
}

function filterDelete(response) {
  console.log('response =>', response);
  // Recuperar los datos del almacenamiento
  let dataApi = JSON.parse(localStorage.getItem(strgFilter)) || [];

  // Filtrar el objeto con el id correspondiente
  let updatedData = dataApi.filter(item => item.id !== response);

  // Guardar los datos actualizados en el almacenamiento
  localStorage.setItem(strgFilter, JSON.stringify(updatedData));

  // Actualizar la tabla
  filterData();
}

function filterApply() {
  let storage = localStorage.getItem(strgFilter);
  console.log('storage:', storage);
  let whereConditions = [];

  if (storage) {
    let dataApi = JSON.parse(storage);
    console.log(dataApi);

    // Construir la cadena de condiciones con 'AND'
    dataApi.forEach(item => {
      if (item.field && item.cond && item.value) {
        // Si la condición es LIKE, añadir % antes y después del valor
        if (item.cond.toUpperCase() === 'LIKE') {
          item.value = `%${item.value}%`;  // Se agrega el % alrededor del valor
        }

        // Se asume que el campo 'field' es el nombre del atributo, 'cond' es la condición y 'value' es el valor a comparar.
        let condition = `${item.field} ${item.cond} '${item.value}'`;
        whereConditions.push(condition);
      }
    });

    // Unir las condiciones con 'AND'
    let whereClause = whereConditions.join(' AND ');

    // Aplicar la condición al servicio
    serviceVerify(whereClause);
    modalAction('close', 'filterModal');
  }
}
