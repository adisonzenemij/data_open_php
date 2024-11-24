<?php
    # Obtener la ruta completa del archivo actual
    $fileRoute = __FILE__;
    # Obtener solo el nombre del archivo sin la ruta
    $fileIndex = basename($fileRoute);
    # Obtener index.php y reemplazarlo
    $folderRoot = str_replace('/' . $fileIndex, '', SCRIPT_NAME);
    # Definir constante para ruta del proyecto
    define('FOLDER_ROOT', $folderRoot);
?>
