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
            # Recorrer las diferentes plantillas
            foreach ($templates as $template) {
                # Definir la ruta base de las plantillas
                $tmplPath = VIEW . '/' . $template . '.php';
                # Verificar si la plantilla existe
                if (file_exists($tmplPath)) {
                    require_once $tmplPath;
                } else {
                    http_response_code(404);
                    echo "404 Not Found: Template '$template' not found.";
                    # Terminar ejecucion
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
