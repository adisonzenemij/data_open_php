function tableHead() {
  // Remover thead de la tabla y su tr con th
  $('.table .table_thead_tr').remove();
}

function tableData(reference, doomConfig, dataApi, columnSet, definition, buttons, sizeHgt = 500) {
  if (appDebug) { console.log(dataApi); }
  let cnfgDoom = tableDoom(doomConfig);
  let cnfgLang = tableLang();
  // Inicializar tabla de datos
  libTableInfo = $(`#${reference}`).DataTable({
    // Leer datos de prácticamente cualquier fuente de datos JSON
    /*ajax: {
      cache: true,
      dataType: 'json',
      dataSrc: 'data',
      deferRender: true,
      type: 'GET',
      url: endpoint,
    },*/
    // Opciones para crear, editar, borrar y sincronizar
    altEditor: true,
    // Combinar valores en las demas celdas
    autoFill: false,
    // Control de funciones Manejo inteligente del ancho de columna
    autoWidth: true,
    // Botones que usan clases de bootstrap
    buttons: Object.values(buttons),
    // Movilizar columnas en la tabla
    colReorder: true,
    // Establecer propiedades de inicialización de definición de columna.
    columnDefs: definition,
    // Cargar columnas del encabezado
    columns: columnSet,
    // Setear la data recibida de la api
    data: dataApi,
    // Creará todos los elementos HTML necesarios por adelantado
    deferRender: true,
    // Reinicialiar los datos de la tabla
    destroy: true,
    // Estructura de las columnas para el DOOM
    dom: cnfgDoom,
    // Fijar columnas en la tabla
    fixedColumns: false,
    // Fijar columnas en la parte superior de la tabla
    fixedHeader: true,
    // Mostrar entradas de los registros
    info: true,
    // Focalizar una celda de la tabla
    keys: false,
    // Lenguaje de la tabla
    language: cnfgLang,
    // Cambiar numero de registros por pagina
    lengthChange: true,
    // Definir cantidad de registros por paginacion
    lengthMenu: [
      [50, 100, 150, 200, 250, -1,],
      [50, 100, 150, 200, 250, 'Todo',],
    ],
    // Ordenar columnas en ascendente o descendente
    order: [
      [0, 'desc',]
    ],
    // Controlar si las tablas de datos deben usar celda única superior
    orderCellsTop: true,
    // Ordenar segun columna los registros
    ordering: true,
    // Paginar registros limitadamente
    paging: true,
    // Habilitar botones extras en el paginado
    //DataTables has six built-in paging button arrangements:
    //numbers - Page number buttons only (1.10.8)
    //simple - 'Previous' and 'Next' buttons only
    //simple_numbers - 'Previous' and 'Next' buttons, plus page numbers
    //full - 'First', 'Previous', 'Next' and 'Last' buttons
    //full_numbers - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
    //first_last_numbers - 'First' and 'Last' buttons, plus page numbers
    pagingType: 'full',
    // Procesando informacion de registros
    processing: true,
    // Control para el tamaño de la tabla de datos
    responsive: false,
    // Agrupar las filas de los registros
    rowGroup: false,
    // Control de busqueda de registros
    searching: true,
    // Selccionar varias filas de registro
    select: true,
    // Procesamiento del lado del servidor
    serverSide: false,
    // Control para el desplazamiento medido de arriba abajo
    scrollCollapse: true,
    // Permite dibujar grandes conjuntos de datos en la pantalla muy rápidamente
    scroller: false,
    // Control para el desplazamiento de derecha a izquiera
    scrollX: true,
    // Control para el desplazamiento medido de arriba abajo
    scrollY: sizeHgt,
    // Guardar el estado de una tabla (su posición de paginación, estado de pedido, etc.)
    stateSave: false,
  });

  // Agregar un oyente de eventos para el evento 'draw.dt'
  libTableInfo.on('draw.dt', function() {});
};

// Generar dinámicamente la estructura
function tableDoom(option) {
  console.log('option', option);
  return `
    <'row mb-1'
      ${doomButton(option.find(item => item.button) || null)}
      ${doomRegister(option.find(item => item.register) || null)}
      ${doomLenght(option.find(item => item.lenght) || null)}
      ${doomSearch(option.find(item => item.search) || null)}
      ${doomPage(option.find(item => item.page) || null)}
    >
    <'row mb-1'
      <'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
        tr
      >
    >
  `;
}

function doomButton(config) {
  if (!config) return '';
  return `
    <'col-xs-${config.xs} col-sm-${config.sm} col-md-${config.md} col-lg-${config.lg} col-xl-${config.xl} align-items-center text-center'
      <'panel rounded-0 mb-1'
        <'panel-container show'
          <'panel-content p-0'
            <'panel-tag p-1 bg-white'
              B
            >
          >
        >
      >
    >
  `;
}

function doomLenght(config) {
  if (!config) return '';
  return `
    <'col-xs-${config.xs} col-sm-${config.sm} col-md-${config.md} col-lg-${config.lg} col-xl-${config.xl} align-items-center text-center'
      <'panel rounded-0 mb-1'
        <'panel-container show'
          <'panel-content p-0'
            <'panel-tag p-1 bg-white'
              l
            >
          >
        >
      >
    >
  `;
}

function doomPage(config) {
  if (!config) return '';
  return `
    <'col-xs-${config.xs} col-sm-${config.sm} col-md-${config.md} col-lg-${config.lg} col-xl-${config.xl} align-items-center text-center'
      <'panel rounded-0 mb-1'
        <'panel-container show'
          <'panel-content p-0'
            <'panel-tag p-1 bg-white'
              p
            >
          >
        >
      >
    >
  `;
}

function doomRegister(config) {
  if (!config) return '';
  return `
    <'col-xs-${config.xs} col-sm-${config.sm} col-md-${config.md} col-lg-${config.lg} col-xl-${config.xl} align-items-center text-center'
      <'panel rounded-0 mb-1'
        <'panel-container show'
          <'panel-content p-0'
            <'panel-tag p-1 bg-white'
              i
            >
          >
        >
      >
    >
  `;
}

function doomSearch(config) {
  console.log('config', config);
  if (!config) return '';
  return `
    <'col-xs-${config.xs} col-sm-${config.sm} col-md-${config.md} col-lg-${config.lg} col-xl-${config.xl} align-items-center text-center'
      <'panel rounded-0 mb-1'
        <'panel-container show'
          <'panel-content p-0'
            <'panel-tag p-1 bg-white'
              f
            >
          >
        >
      >
    >
  `;
}

function tableLang() {
  return {
    aria: {
      sortAscending: ': activate to sort column ascending',
      sortDescending: ': activate to sort column descending',
    },
    decimal: '',
    emptyTable: 'Sin Datos',
    info: 'Registros (Del _START_ Al _END_) Total De _TOTAL_ Registros',
    infoEmpty: 'Registros (Del 0 Al 0) Total De 0 Registros',
    infoFiltered: '(Filtrados del Total de _MAX_ Registros)',
    infoPostFix: '',
    lengthMenu: 'Mostrar _MENU_ Registros Por Página',
    loadingRecords: 'Cargando...',
    paginate: {
      first: 'Primera',
      last: 'Última',
      next: 'Siguiente',
      previous: 'Anterior',
    },
    processing: 'Procesando...',
    search: 'Filtrar:',
    thousands: ',',
    zeroRecords: 'No se encontrados registros segun el filtrado.',
  };
}

function tableAdjust() {
  // Ajustar automáticamente las columnas de la tabla
  if (libTableInfo) { libTableInfo.columns.adjust().draw(); }
};

function hideColumnsByClass(classPrefix) {
  if (libTableInfo) {
    if (appDebug) { console.log('libTableInfo existe'); }

    libTableInfo.columns().every(function () {
      let column = this;
      if (appDebug) { console.log('iterate column:'); }
      if (appDebug) { console.log(column); }

      let header = $(column.header());
      if (appDebug) { console.log('header column:'); }
      if (appDebug) { console.log(header); }

      // Obtener todas las clases del encabezado de columna como una cadena
      let allClasses = header.attr('class');

      // Dividir las clases en un array
      let classesArray = allClasses.split(' ');

      // Verificar si alguna de las clases comienza con classPrefix
      let isVisible = false;
      for (const element of classesArray) {
        if (element.startsWith(classPrefix)) {
          isVisible = true;
          break;
        }
      }

      // Ocultar la columna si alguna clase comienza con classPrefix
      if (isVisible) {
        if (appDebug) { console.log('hide column'); }
        column.visible(false);
      }
    });

    libTableInfo.columns.adjust().draw(false); // Redibujar la tabla
    if (appDebug) { console.log('table redraw'); }
  }
}
