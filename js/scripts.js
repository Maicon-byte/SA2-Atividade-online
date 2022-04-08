function validateForm() {
    let x = document.forms["formulario"]["email"].value;
    if (x == "") {
      alert("O campo de Email e obrigatorio!");
      return false;
    }
  }