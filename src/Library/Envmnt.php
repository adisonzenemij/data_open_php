<?php
    namespace App\Library;

    use Dotenv\Dotenv;

    class Envmnt {
        # Implementar Variables de Entorno
        public function execute() {
            $dotenv = Dotenv::createImmutable(ENVS);
            $dotenv->load();
        }
    }
?>
