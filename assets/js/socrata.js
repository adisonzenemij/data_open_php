serviceStrg();

function serviceStrg() {
  console.log('serviceStrg');
  let storage = localStorage.getItem(strgFilter);
  if (storage) {
    let dataApi = JSON.parse(storage);
    if (dataApi.length == 0) {
      serviceVerify('');
    }
    if (dataApi.length > 0) {
      filterApply();
    }
  }
}

let columnService;

function serviceVerify(whereCluase) {
  swwetInfo();
  $.ajax({
    url: 'https://www.datos.gov.co/resource/p6dx-8zbt.json',
    type: 'GET',
    timeout: 5000,
    data: {
      '$$app_token' : tokenPublic,
      '$select': '*',
      '$limit' : 1,
      '$offset': 0,
    },
  }).done(function(data) {
    swwetClose();
    console.log(`Servicio Disponible`);
    console.log('data =>', data);
    columnService = columnData(data);
    let colExct = colExtract(columnService);
    serviceLoad(colExct, whereCluase);
  }).fail(function(jqXHR, textStatus) {
    swwetService();
    if (appDebug) {
      console.error(`Servicio Inaccesible`);
      console.error( `Error: ${textStatus}`);
    }
  });
}

function columnData(response) {
  consoleData(response);
  // Arreglo vacio
  let result = [];
  // Verificar si contiene más de un objeto
  if (response && response.length > 0) {
    // Recorrer todos los objetos del arreglo
    response.forEach((obj, index) => {
      // Obtener las claves de cada objeto
      const keys = Object.keys(obj);
      //console.log('data:', keys);
      // Recorrer las propiedades
      keys.forEach(key => {
        // Evitar duplicados en el arreglo de columnas
        if (!result.some(data => data.id === key)) {
          result.push({
            property: key,
          });
        }
      });
    });
  }
  return result;
}

function colExtract(response) {
  consoleData(response);
  // Arreglo vacio
  let result = [];
  // Obtener las propiedades a omitir
  const skipProp = propertySkip();
  // Verificar si contiene más de un objeto
  if (response && response.length > 0) {
    // Recorrer todos los objetos del arreglo
    response.forEach((obj, index) => {
      // Recorrer las claves y valores del objeto
      Object.entries(obj).forEach(([key, value]) => {
        // Omitir columnas o propiedades establecidas
        if (skipProp.includes(value)) { return; }
        // Evitar duplicados basándonos en el valor
        if (!result.some(data => data.value === value)) {
          result.push({
            className: `text-wrap ${value}`,
            data: value,
            id: value,
            title: value,
            type: 'text',
            visible: true,
          });
        }
      });
    });
  }
  return result;
}

function dataDoom() {
  return [
    {'xs': '12', 'sm': '12', 'md': '12', 'lg': '12', 'xl': '12', 'button': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '3', 'xl': '3', 'lenght': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '3', 'xl': '3', 'page': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '3', 'xl': '3', 'register': true},
    {'xs': '12', 'sm': '12', 'md': '6', 'lg': '3', 'xl': '3', 'search': true},
  ];
}

function serviceLoad(column, whereClause) {
  let whereAdd = '';
  if (whereClause !== '') {
    whereAdd = `AND ${whereClause}`;
  }
  consoleData(column);
  swwetInfo();
  let tbHght = showHeight() - 190;
  $.ajax({
    url: 'https://www.datos.gov.co/resource/p6dx-8zbt.json',
    type: 'GET',
    data: {
      '$$app_token' : tokenPublic,
      '$select': '*',
      '$where': socWhere() + ' ' + whereAdd + ' ' + soOrderBy(),
      '$limit' : 100,
      '$offset': 0,
    },
  }).done(function(data) {
    swwetClose();
    console.log(`records: ${data.length}`);
    console.log('data =>', data);
    // Omitir propiedades definidas
    const skipProp = propertySkip();
    const filtered = data.map((item) => {
      // Desestructurar y omitir propiedades
      const filteredItem = { ...item };
      // Elimina las propiedades
      skipProp.forEach(
        (prop) => delete filteredItem[prop]
      );
      // Retornar propiedades
      return filteredItem;
    });
    let cnfgDoom = dataDoom();
    tableHead();
    tableData(
      'dt_info',
      cnfgDoom,
      filtered,
      column,
      [],
      [],
      tbHght
    );
    setTimeout(() => {
      classRem(
        'dt_table',
        'd-none'
      );
    }, 500);
  }).fail(function(jqXHR, textStatus) {
    swwetService();
    if (appDebug) {
      console.error(`Servicio Inaccesible`);
      console.error( `Error: ${textStatus}`);
    }
  });
}

function socWhere() {
  return 'fecha_de_ultima_publicaci IS NOT NULL';
}

function soOrderBy() {
  return 'ORDER BY fecha_de_ultima_publicaci DESC';
}

function propertySkip() {
  return [
    'urlproceso',
    'fecha_de_recepcion_de',
    'fecha_de_apertura_de_respuesta',
    'fecha_de_apertura_efectiva',
    'fecha_de_publicacion_fase_3',
  ];
}
