function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (uname == "nisa" && pass == "123") {
        location.replace("succes.html");
        alert("Login Berhasil!");
    } else {
        alert("Login gagal");
    }
}