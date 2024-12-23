<?php
    namespace App\Core;

    class Render {
        # Método para cargar las plantillas
        public static function view($templates, $data = []) {
            # Asegurarse de que $templates es un arreglo
            if (!is_array($templates)) {
                $templates = [$templates];
            }
            # Extraer datos a variables
            extract($data);
            # Cargar archivos en la plantilla final
            require_once TMPL . '/doctype.php';
            require_once TMPL . '/navbar.php';
            # Recorrer las plantillas
            foreach ($templates as $template) {
                # Definir las posibles rutas para las plantillas
                $tmplPaths = [
                    VIEW . '/' . $template . '.php',
                    VIEW . '/' . $template . '.html'
                ];

                # Verificar si las plantillas existen
                $templateFound = false;
                foreach ($tmplPaths as $path) {
                    if (file_exists($path)) {
                        require_once $path;
                        $templateFound = true;
                        # Salir del ciclo
                        break;
                    }
                }

                # Cuando no encuentre ninguna plantilla 404
                if (!$templateFound) {
                    http_response_code(404);
                    echo "404 Not Found: Template '$template' not found.";
                    # Terminar ejecución
                    return;
                }
            }
            # Cargar archivos en la plantilla final
            require_once TMPL . '/footer.php';
            require_once TMPL . '/script.php';
            require_once TMPL . '/final.php';
        }
    }
?>
