<?php
    # Ruta de directorios MIB (Management Information Base)
    if (isset($_SERVER['MIBDIRS'])) { define('MIBDIRS', $_SERVER['MIBDIRS']); }
    # Directorio donde está instalado MySQL
    if (isset($_SERVER['MYSQL_HOME'])) { define('MYSQL_HOME', $_SERVER['MYSQL_HOME']); }
    # Ruta del archivo de configuración de OpenSSL
    if (isset($_SERVER['OPENSSL_CONF'])) { define('OPENSSL_CONF', $_SERVER['OPENSSL_CONF']); }
    # Directorio de configuración del sistema PEAR
    if (isset($_SERVER['PHP_PEAR_SYSCONF_DIR'])) { define('PHP_PEAR_SYSCONF_DIR', $_SERVER['PHP_PEAR_SYSCONF_DIR']); }
    # Ruta de configuración de PHP
    if (isset($_SERVER['PHPRC'])) { define('PHPRC', $_SERVER['PHPRC']); }
    # Directorio temporal del servidor
    if (isset($_SERVER['TMP'])) { define('TMP', $_SERVER['TMP']); }
    # Host HTTP solicitado
    if (isset($_SERVER['HTTP_HOST'])) { define('HTTP_HOST', $_SERVER['HTTP_HOST']); }
    # Tipo de conexión HTTP (keep-alive, close)
    if (isset($_SERVER['HTTP_CONNECTION'])) { define('HTTP_CONNECTION', $_SERVER['HTTP_CONNECTION']); }
    # Control de caché HTTP
    if (isset($_SERVER['HTTP_CACHE_CONTROL'])) { define('HTTP_CACHE_CONTROL', $_SERVER['HTTP_CACHE_CONTROL']); }
    # Información del navegador solicitante (User-Agent)
    if (isset($_SERVER['HTTP_SEC_CH_UA'])) { define('HTTP_SEC_CH_UA', $_SERVER['HTTP_SEC_CH_UA']); }
    # Indica si el User-Agent es móvil
    if (isset($_SERVER['HTTP_SEC_CH_UA_MOBILE'])) { define('HTTP_SEC_CH_UA_MOBILE', $_SERVER['HTTP_SEC_CH_UA_MOBILE']); }
    # Plataforma del User-Agent
    if (isset($_SERVER['HTTP_SEC_CH_UA_PLATFORM'])) { define('HTTP_SEC_CH_UA_PLATFORM', $_SERVER['HTTP_SEC_CH_UA_PLATFORM']); }
    # Si el navegador solicita el uso de HTTPS
    if (isset($_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS'])) { define('HTTP_UPGRADE_INSECURE_REQUESTS', $_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS']); }
    # Información del navegador que realiza la solicitud
    if (isset($_SERVER['HTTP_USER_AGENT'])) { define('HTTP_USER_AGENT', $_SERVER['HTTP_USER_AGENT']); }
    # Tipos de medios aceptados por el cliente (MIME types)
    if (isset($_SERVER['HTTP_ACCEPT'])) { define('HTTP_ACCEPT', $_SERVER['HTTP_ACCEPT']); }
    # Indica si la solicitud es cross-origin o same-origin
    if (isset($_SERVER['HTTP_SEC_FETCH_SITE'])) { define('HTTP_SEC_FETCH_SITE', $_SERVER['HTTP_SEC_FETCH_SITE']); }
    # Modo de la solicitud (navigate, cors, no-cors, etc.)
    if (isset($_SERVER['HTTP_SEC_FETCH_MODE'])) { define('HTTP_SEC_FETCH_MODE', $_SERVER['HTTP_SEC_FETCH_MODE']); }
    # Indica si el usuario está involucrado en la solicitud
    if (isset($_SERVER['HTTP_SEC_FETCH_USER'])) { define('HTTP_SEC_FETCH_USER', $_SERVER['HTTP_SEC_FETCH_USER']); }
    # Destino de la solicitud (document, image, etc.)
    if (isset($_SERVER['HTTP_SEC_FETCH_DEST'])) { define('HTTP_SEC_FETCH_DEST', $_SERVER['HTTP_SEC_FETCH_DEST']); }
    # URL de referencia (desde dónde se hizo la solicitud)
    if (isset($_SERVER['HTTP_REFERER'])) { define('HTTP_REFERER', $_SERVER['HTTP_REFERER']); }
    # Métodos de codificación aceptados por el cliente
    if (isset($_SERVER['HTTP_ACCEPT_ENCODING'])) { define('HTTP_ACCEPT_ENCODING', $_SERVER['HTTP_ACCEPT_ENCODING']); }
    # Idiomas aceptados por el navegador
    if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) { define('HTTP_ACCEPT_LANGUAGE', $_SERVER['HTTP_ACCEPT_LANGUAGE']); }
    # Cookies enviadas con la solicitud
    if (isset($_SERVER['HTTP_COOKIE'])) { define('HTTP_COOKIE', $_SERVER['HTTP_COOKIE']); }
    # Ruta del sistema en el servidor
    if (isset($_SERVER['PATH'])) { define('PATH', $_SERVER['PATH']); }
    # Ruta del directorio raíz del sistema operativo
    if (isset($_SERVER['SystemRoot'])) { define('SystemRoot', $_SERVER['SystemRoot']); }
    # Ruta del ejecutable del intérprete de comandos
    if (isset($_SERVER['COMSPEC'])) { define('COMSPEC', $_SERVER['COMSPEC']); }
    # Extensiones de archivos ejecutables
    if (isset($_SERVER['PATHEXT'])) { define('PATHEXT', $_SERVER['PATHEXT']); }
    # Directorio de instalación de Windows
    if (isset($_SERVER['WINDIR'])) { define('WINDIR', $_SERVER['WINDIR']); }
    # Firma del servidor (normalmente en formato HTML)
    if (isset($_SERVER['SERVER_SIGNATURE'])) { define('SERVER_SIGNATURE', $_SERVER['SERVER_SIGNATURE']); }
    # Software del servidor web (Apache, Nginx, etc.)
    if (isset($_SERVER['SERVER_SOFTWARE'])) { define('SERVER_SOFTWARE', $_SERVER['SERVER_SOFTWARE']); }
    # Nombre del servidor (generalmente el nombre de dominio)
    if (isset($_SERVER['SERVER_NAME'])) { define('SERVER_NAME', $_SERVER['SERVER_NAME']); }
    # Dirección IP del servidor
    if (isset($_SERVER['SERVER_ADDR'])) { define('SERVER_ADDR', $_SERVER['SERVER_ADDR']); }
    # Puerto en el que está escuchando el servidor
    if (isset($_SERVER['SERVER_PORT'])) { define('SERVER_PORT', $_SERVER['SERVER_PORT']); }
    # Dirección IP del cliente que hizo la solicitud
    if (isset($_SERVER['REMOTE_ADDR'])) { define('REMOTE_ADDR', $_SERVER['REMOTE_ADDR']); }
    # Directorio raíz del servidor para los documentos web
    if (isset($_SERVER['DOCUMENT_ROOT'])) { define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']); }
    # Esquema de la solicitud (http o https)
    if (isset($_SERVER['REQUEST_SCHEME'])) { define('REQUEST_SCHEME', $_SERVER['REQUEST_SCHEME']); }
    # Prefijo del contexto si existe
    if (isset($_SERVER['CONTEXT_PREFIX'])) { define('CONTEXT_PREFIX', $_SERVER['CONTEXT_PREFIX']); }
    # Raíz del contexto del documento
    if (isset($_SERVER['CONTEXT_DOCUMENT_ROOT'])) { define('CONTEXT_DOCUMENT_ROOT', $_SERVER['CONTEXT_DOCUMENT_ROOT']); }
    # Dirección de correo electrónico del administrador del servidor
    if (isset($_SERVER['SERVER_ADMIN'])) { define('SERVER_ADMIN', $_SERVER['SERVER_ADMIN']); }
    # Ruta completa del script que se está ejecutando
    if (isset($_SERVER['SCRIPT_FILENAME'])) { define('SCRIPT_FILENAME', $_SERVER['SCRIPT_FILENAME']); }
    # Puerto del cliente que realiza la solicitud
    if (isset($_SERVER['REMOTE_PORT'])) { define('REMOTE_PORT', $_SERVER['REMOTE_PORT']); }
    # Versión del protocolo CGI
    if (isset($_SERVER['GATEWAY_INTERFACE'])) { define('GATEWAY_INTERFACE', $_SERVER['GATEWAY_INTERFACE']); }
    # Protocolo de la solicitud (HTTP/1.1, HTTP/2)
    if (isset($_SERVER['SERVER_PROTOCOL'])) { define('SERVER_PROTOCOL', $_SERVER['SERVER_PROTOCOL']); }
    # Método HTTP utilizado en la solicitud (GET, POST, etc.)
    if (isset($_SERVER['REQUEST_METHOD'])) { define('REQUEST_METHOD', $_SERVER['REQUEST_METHOD']); }
    # Cadena de consulta de la solicitud: todo después de ? en la URL
    if (isset($_SERVER['QUERY_STRING'])) { define('QUERY_STRING', $_SERVER['QUERY_STRING']); }
    # URI de la solicitud (ruta solicitada)
    if (isset($_SERVER['REQUEST_URI'])) { define('REQUEST_URI', $_SERVER['REQUEST_URI']); }
    # Nombre del script en ejecución
    if (isset($_SERVER['SCRIPT_NAME'])) { define('SCRIPT_NAME', $_SERVER['SCRIPT_NAME']); }
    # Ruta del script actualmente en ejecución
    if (isset($_SERVER['PHP_SELF'])) { define('PHP_SELF', $_SERVER['PHP_SELF']); }
    # Hora de la solicitud en formato de punto flotante
    if (isset($_SERVER['REQUEST_TIME_FLOAT'])) { define('REQUEST_TIME_FLOAT', $_SERVER['REQUEST_TIME_FLOAT']); }
    # Hora de la solicitud en formato de timestamp
    if (isset($_SERVER['REQUEST_TIME'])) { define('REQUEST_TIME', $_SERVER['REQUEST_TIME']); }
    # Indica si la conexión está usando HTTPS
    if (isset($_SERVER['HTTPS'])) { define('HTTPS', $_SERVER['HTTPS']); }

    # Dominios Permitidos
    $allowed_hosts = [
        'localhost',
        '127.0.0.1',
        'engsoft.app',
        'engtest.app',
    ];
    
    # Definir el protoco por defecto
    $protocol = "http";
    # Determinar el esquema (HTTP o HTTPS)
    if (SERVER_NAME !== 'localhost' &&
        SERVER_NAME !== '127.0.0.1'
    ) {
        # Comprobar si el dominio es permitido (con subdominios)
        $allowed_pattern = implode(
            '|', array_map(function($host) {
                return preg_quote(
                    $host,
                    '/'
                );
            },
            $allowed_hosts
        ));
        
        # Permitir subdominios
        if (preg_match('/^(.*\.)?(' . $allowed_pattern . ')$/', SERVER_NAME)) {
            $protocol = 'https';
        }
    }

    # Verifica si el servidor está usando HTTPS
    $serverIsHttps = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    # Define el esquema de la URL en función de si está usando HTTPS o no
    $serverScheme = $serverIsHttps ? 'https' : 'http';
    # Definir constante SCHEME para obtener su servicio
    define('SERVER_SCHEME', $protocol);
    # Construye la URL completa con el esquema, el host y la URI solicitada
    $serverUrl = SERVER_SCHEME . '://' . HTTP_HOST . REQUEST_URI;
    # Elimina la cadena de consulta para obtener la URI sin parámetros
    $uriWithoutQuery = str_replace('?' . QUERY_STRING, '', REQUEST_URI);
    # Define la URL base del servidor (la URL sin la cadena de consulta)
    $serverBaseUrl = SERVER_SCHEME . '://' . HTTP_HOST . $uriWithoutQuery;
    # Define la constante con la URL completa
    define('URL_CURRENT', $serverUrl);
    # Define la URL base del servidor sin la URI
    $serverUrl = SERVER_SCHEME . '://' . HTTP_HOST;
    # Obtener la ruta actual (sin los parámetros de la consulta)
    $currentPath = rtrim(dirname(SCRIPT_NAME), '/') . '/';
    # Almacenar solo el directorio actual del script en ejecución
    define('CURRENT_PATH', $currentPath);
    # Combinar la URL base con la ruta actual y definir la constante APP_URL
    define('APP_URL', $serverUrl . $currentPath);
?>
