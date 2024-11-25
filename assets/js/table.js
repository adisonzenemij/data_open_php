function tableHead() {
    // Remover thead de la tabla y su tr con th
    $('.table .table_thead_tr').remove();
}

function tableData(reference, dataApi, columnSet, buttons) {
    console.log(dataApi);
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
      columnDefs: [],
      // Cargar columnas del encabezado
      columns: columnSet,
      // Setear la data recibida de la api
      data: dataApi,
      // Creará todos los elementos HTML necesarios por adelantado
      deferRender: true,
      // Reinicialiar los datos de la tabla
      destroy: true,
      // Estructura de las columnas para el DOOM
      dom:
        `
          <'row mb-1'
            <'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-items-center'
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
          >
          <'row mb-1'
            <'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 align-items-center text-center'
              <'panel rounded-0 mb-1'
                <'panel-container show'
                  <'panel-content p-0'
                    <'panel-tag p-1 bg-white'
                      <'span color-fusion-900'
                        i
                      >
                    >
                  >
                >
              >
            >
            <'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 align-items-center'
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
          >
          <'row mb-1'
            <'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
              tr
            >
          >
        `,
      // Fijar columnas en la tabla
      fixedColumns: false,
      // Fijar columnas en la parte superior de la tabla
      fixedHeader: true,
      // Mostrar entradas de los registros
      info: true,
      // Focalizar una celda de la tabla
      keys: false,
      // Lenguaje de la tabla
      language: {
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
      },
      // Cambiar numero de registros por pagina
      lengthChange: false,
      // Definir cantidad de registros por paginacion
      lengthMenu: [
        [100, 200, 300, 400, 500, -1,],
        [100, 200, 300, 400, 500, 'Todo',],
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
      select: 'single',
      // Procesamiento del lado del servidor
      serverSide: false,
      // Control para el desplazamiento medido de arriba abajo
      scrollCollapse: true,
      // Permite dibujar grandes conjuntos de datos en la pantalla muy rápidamente
      scroller: false,
      // Control para el desplazamiento de derecha a izquiera
      scrollX: true,
      // Control para el desplazamiento medido de arriba abajo
      scrollY: 750,
      // Guardar el estado de una tabla (su posición de paginación, estado de pedido, etc.)
      stateSave: false,
    });
  
    // Agregar un oyente de eventos para el evento 'draw.dt'
    libTableInfo.on('draw.dt', function() {});
  };
  
  function tableAdjust() {  
    // Ajustar automáticamente las columnas cada vez que se redibuja la tabla
    libTableInfo.columns.adjust().draw();
  };
  
  function hideColumnsByClass(classPrefix) {
    console.log('Ingreso a la función hideColumnsByClass');
    
    if (libTableInfo) {
      console.log('libTableInfo existe');
      
      libTableInfo.columns().every(function () {
        let column = this;
        console.log('Iterando sobre la columna:');
        console.log(column);
        
        let header = $(column.header());
        console.log('Encabezado de la columna:');
        console.log(header);
  
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
          console.log('Ocultando columna');
          column.visible(false);
        }
      });
      
      libTableInfo.columns.adjust().draw(false); // Redibujar la tabla
      console.log('Tabla redibujada');
    }
    else {
      console.log('libTableInfo no existe');
    }
  }
  