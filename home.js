function load() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  
  if (user.length === 0 && pass.length === 0) {
    window.alert("Pls enter user and password");
  } else if (user.length < 3 && pass.length < 3) {
    window.alert("Pls enter correct username and password");
  } else if (user === "admin" && pass === "root") {
    location.href = "home.html";
  } else {
    return;
  }
}