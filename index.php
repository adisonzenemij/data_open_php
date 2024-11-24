<?php
    # Directorio Proyecto
    define('DIR', __DIR__);
    
    # Incluir archivos de configuraciones
    require DIR . '/config/autoload.php';
    require DIR . '/vendor/autoload.php';
    
    # Cargar variables
    use App\Library\Envmnt;
    # Cargar el enrutador
    use App\Core\Load;
    # Cargar el enrutador
    use App\Core\Router;
    
    # Crear instancia del entorno
    $envmnt = new Envmnt();
    # Obtener variables de entorno
    $envmnt->execute();
    
    # Crear instancia del enrutador
    $router = new Router();
    # Crear instancia para cargar las rutas
    $config = new Load($router);
    # Manejar la solicitud
    $router->handleRequest();
?>
