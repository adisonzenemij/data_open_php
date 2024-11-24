<?php
    namespace App\Controller;

    use App\Core\Render;
    use App\Library\Identified;

    class MainController {
        final public function __construct() {}

        final public function index() {
            # Cargar datos si es necesario
            $data = ['title' => 'test',];
            # Cargar las diferentes plantillas
            $templates = ['main'];
            # Renderiar plantilla y configuracion
            Render::view($templates, $data);
            # Generar UUID oficial
            $this->trigger();
            # Generar UUID personalizado
            $this->short();
        }

        public function trigger() {
            # Generar UUID oficial
            $uuidTrigger = Identified::trigger() . "<br/>";
            # Imprimir el UUID generado
            echo "UUID:" . " " . $uuidTrigger;
        }

        public function short() {
            # Generar UUID personalizado
            $uuidShort = Identified::short(25, 5);
            # Imprimir el UUID generado
            echo "UUID:" . " " . $uuidShort . "<br/>";
        }
    }
?>
