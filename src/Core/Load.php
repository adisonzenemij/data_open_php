<?php
    namespace App\Core;

    use App\Controller\MainController as ctrMain;

    class Load {
        private $router;

        # Constructor para inicializar el enrutador
        public function __construct($router) {
            $this->router = $router;
            # Cargar las rutas en el constructor
            $this->loadRoutes();
        }

        # Método para cargar las rutas
        private function loadRoutes() {
            # Cargar rutas de controladores
            $this->router->addRoute(
                'GET',
                '/',
                ctrMain::class,
                'index'
            );
            # Cargar rutas de controladores
            $this->router->addRoute(
                'GET',
                '/main',
                ctrMain::class,
                'index'
            );
        }
    }
?>
