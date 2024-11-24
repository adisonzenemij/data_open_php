<?php
    namespace App\Library;

    use Ramsey\Uuid\Uuid;

    class Identified {
        # Método para generar un UUID
        public static function trigger() {
            # Generar un UUID versión 4
            return Uuid::uuid4()->toString();
        }

        # Método para generar un UUID corto con guiones
        public static function short($length, $separator = 4) {
            # Generar un identificador corto basado en bytes aleatorios
            $uuidShort = substr(bin2hex(random_bytes($length)), 0, $length);
            
            # Añadir guiones en posiciones específicas
            $uuidWithHyphens = '';
            for ($i = 0; $i < strlen($uuidShort); $i++) {
                $uuidWithHyphens .= $uuidShort[$i];
                # Añadir guión después de cada separador caracteres
                if (($i + 1) % $separator === 0 && ($i + 1) < strlen($uuidShort)) {
                    $uuidWithHyphens .= '-';
                }
            }

            return $uuidWithHyphens;
        }
    }
?>
