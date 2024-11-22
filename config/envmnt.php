<?php
    # Ruta del archivo de variables de entorno
    define('ENVS', DIR_STRG . '/envs');
    define('ENV_PRDT', ENVS . '/.env');
    define('ENV_BCKP', ENVS . '/.env.dist');

    # Verificar si el archivo de entorno no existe y el de respaldo sí existe
    if (!file_exists(ENV_PRDT) && file_exists(ENV_BCKP)) {
        # Crear una copia del archivo de respaldo
        copy(ENV_BCKP, ENV_PRDT);
    }
