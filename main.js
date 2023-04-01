document.addEventListener("DOMContentLoaded", function() {
  var option = document.getElementById("option");
  var submitButton = document.getElementById("submit");

  // Verifica se já existe uma opção salva no localStorage e define o valor do campo de formulário
  if (localStorage.getItem("option")) {
    option.value = localStorage.getItem("option");
  }

  submitButton.addEventListener("click", function() {
    // Salva a opção anterior em uma variável
    var previousOption = localStorage.getItem("option");

    // Salva a nova opção no localStorage
    localStorage.setItem("option", option.value);

    // Faz a requisição POST para o arquivo save.php
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Dados salvos com sucesso.");
      }
    };
    xhr.open("POST", "save.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("option=" + option.value);

    // Faz a requisição POST para o arquivo save-data.php com a opção anterior
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Dados anteriores salvos com sucesso.");
      }
    };
    xhr2.open("POST", "save-data.php", true);
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr2.send("option=" + previousOption);
  });
});
