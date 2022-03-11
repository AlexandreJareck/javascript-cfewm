function login(e) {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const pswd = document.querySelector("#password").value; // 123
  const cryptoPswd = sha1(pswd);

  console.log(email);
  console.log(pswd);
  console.log(cryptoPswd);

  const body = new URLSearchParams({
    "grant_type": "password",
    "username": email,
    "password": pswd
    // "password": cryptoPswd
  });

  fetch("http://localhost:8080/oauth/token", {
    method: "POST",
    headers: {
      "Authorization": "Basic YWxleGFuZHJlOjEyMw==",
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: body
  }).then(res => res.json())
    .then(res => {
      localStorage.setItem("access_token", res.access_token);
      window.location.href = "/register.html"
    });

}

window.onload = function () {

  console.log("terminou de carregar a página...");

  document.querySelector("#email").focus();

}