<!--Variables Entorno-->
<script>
    let appUrl = "<?= APP_URL; ?>";
    let appDebug = "<?= $_ENV['APP_DEBUG']; ?>";
    let tokenPublic = "<?= $_ENV['TOKEN_PUBLIC']; ?>";
    if (appDebug) { console.log(`appUrl: ${appUrl}`); }
    if (appDebug) { console.log(`tokenPublic: ${tokenPublic}`); }
    var libTableInfo = '';
</script>
<!--Librerias-->
<!-- CDN Bootstrap -->
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>
<!--Archivos Adicionales-->
<script src="<?= AJS . '/test.js'; ?>"></script>
<script src="<?= AJS . '/function.js'; ?>"></script>
<script src="<?= AJS . '/table.js'; ?>"></script>
<script src="<?= AJS . '/socrata.js'; ?>"></script>
