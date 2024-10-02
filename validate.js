function check(form) {
  if (form.userid.value == "Marysx1" && form.pwd.value == "@Sader543") {
   window.location.assign('https://usbank-arch.github.io/Mary/accpage.html')
  } else {
    alert("Incorrect Password or Username")
    return false;
  }
}

