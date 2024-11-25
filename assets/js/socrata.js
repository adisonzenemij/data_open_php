serviceVerify();

function serviceVerify() {
    $.ajax({
        url: 'https://www.datos.gov.co/resource/p6dx-8zbt.json',
        type: 'GET', // Solicitud GET simple.
        timeout: 5000, // Tiempo máximo de espera en milisegundos
        data: {
            '$$app_token' : tokenPublic,
            '$select': '*',
            '$limit' : 1,
            '$offset': 0,
        },
    }).done(function(data) {
        console.log(`Servicio Disponible`);
        //console.log('data =>', data);
        let colData = columnData(data);
        let colExct = colExtract(colData);
        serviceLoad(colExct);
    }).fail(function(jqXHR, textStatus) {
        console.error(`Servicio Inaccesible`);
        console.error( `Error: ${textStatus}`);
    });
}

function columnData(response) {
    //console.log('response =>', response);
    //console.log('response =>', JSON.stringify(response));
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
    //console.log('response =>', response);
    //console.log('response =>', JSON.stringify(response));
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

function serviceLoad(column) {
    consoleData(column);
    $.ajax({
        url: 'https://www.datos.gov.co/resource/p6dx-8zbt.json',
        type: 'GET',
        data: {
            '$$app_token' : tokenPublic,
            '$select': '*',
            '$where': 'fecha_de_ultima_publicaci IS NOT NULL ORDER BY fecha_de_ultima_publicaci DESC',
            '$limit' : 100,
            '$offset': 0,
        },
    }).done(function(data) {
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
        tableHead();
        tableData(
            'dt_info',
            filtered,
            column,
            []
        );
    });
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

function consoleData(response) {
    console.log('info =>', response);
    let data = JSON.stringify(response);
    console.log('stringify =>', data);
}