function form() {
    var sujet = document.forms["RegForm"]["sujet"];
    var email = document.forms["RegForm"]["Email"];
    var message = document.forms["RegForm"]["Message"];

    if (sujet.value == "") {
      alert("rentrez un sujet.");
      sujet.focus();
      return false;
    }
    if (email.value == "") {
      alert("Mettez une adresse email valide.");
      email.focus();
      return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
      alert("Mettez une adresse email valide.");
      email.focus();
      return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
      alert("Mettez une adresse email valide.");
      email.focus();
      return false;
    }

    if (message.value == "") {
      alert("Écrivez un message.");
      message.focus();
      return false;
    }
    return true;
  }