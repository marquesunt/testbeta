<?php
if(isset($_POST['submit'])) {
    $option = $_POST['option'];
    $filename = 'save.txt';

    // Verifica se o arquivo existe e faz backup dos dados anteriores em save-data.txt
    if (file_exists($filename)) {
        $previousData = file_get_contents($filename);
        file_put_contents('save-data.txt', $previousData);
    }

    // Salva a nova opção selecionada em save.txt
    file_put_contents($filename, $option);
}
?>
