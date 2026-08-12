document.addEventListener(“DOMContentLoaded”, function () {

// =========================
// INSCRIPTION
// =========================

const inscriptionForm = document.querySelector(”#inscription-form”);

if (inscriptionForm) {

inscriptionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }
  const existingUser = localStorage.getItem("tradingUser");
  if (existingUser) {
    const user = JSON.parse(existingUser);
    if (user.email === email) {
      alert("Un compte existe déjà avec cette adresse email.");
      return;
    }
  }
  const user = {
    name: name,
    email: email,
    password: password
  };
  localStorage.setItem("tradingUser", JSON.stringify(user));
  alert("Compte créé avec succès !");
  window.location.href = "connexion.html";
});

}

// =========================
// CONNEXION
// =========================

const connexionForm = document.querySelector(”#connexion-form”);

if (connexionForm) {

connexionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const savedUser = localStorage.getItem("tradingUser");
  if (!savedUser) {
    alert("Aucun compte trouvé. Crée d'abord un compte.");
    return;
  }
  const user = JSON.parse(savedUser);
  if (user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Connexion réussie !");
    window.location.href = "accueil.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});

}

});
