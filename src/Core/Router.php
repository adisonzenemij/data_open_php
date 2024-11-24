<?php
    namespace App\Core;

    class Router {
        private $routes = [];

        # Agregar nueva ruta al sistema de enrutamiento
        public function addRoute($method, $path, $controller, $action) {
            # Asignar el controlador y la acción a la ruta especificada
            $this->routes[$method][$path] = [$controller, $action];
        }

        public function handleRequest() {
            # Obtener los diferentes metodos de solicitudes
            $method = REQUEST_METHOD;
            # Obtener el URI actual (la ruta solicitada)
            $path = parse_url(URL_CURRENT, PHP_URL_PATH);
            # Obtener la ruta base automáticamente basada en el directorio del script
            $basePath = str_replace('\\', '/', dirname(SCRIPT_NAME));
            # Si la basePath no es "/", agregar una barra al final para que coincida
            if ($basePath !== '/') { $basePath .= '/'; }
            # Eliminar el prefijo del directorio del proyecto de la ruta actual
            if (strpos($path, $basePath) === 0) {
                $path = substr($path, strlen($basePath) - 1);
            }
            # Verificar si existe una ruta registrada que coincida con el método y la ruta actual
            if (isset($this->routes[$method][$path])) {
                list($controller, $action) = $this->routes[$method][$path];
                $controllerInstance = new $controller();
                $controllerInstance->$action();
            } else {
                http_response_code(404);
                require_once TMPL . '/notfound.php';
            }
        }
    }
?>
