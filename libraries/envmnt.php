<?php
    # Implementar Variables de Entorno
    $dotenv = Dotenv\Dotenv::createImmutable(ENVS);
    $dotenv->load();
    