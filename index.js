function load() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  
  if (!user.length  && !pass.length ) {
    window.alert("Please enter user and password");
  } else if (user.length < 3 && pass.length < 3) {
    window.alert("Please enter correct username and password");
  } else if (user === "admin" && pass === "root") {
    location.href = "home.html";
  } else {
    window.alert("Please enter correct username and password");
  }
}
