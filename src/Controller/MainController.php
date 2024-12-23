<?php
    namespace App\Controller;

    use App\Core\Render;

    class MainController {
        final public function __construct() {}

        final public function index() {
            # Cargar datos si es necesario
            $data = ['title' => 'test',];
            # Cargar las diferentes plantillas
            $templates = ['main','filter','field'];
            # Renderiar plantilla y configuracion
            Render::view($templates, $data);
        }
    }
?>
