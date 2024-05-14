var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var FirstName = getElementVal("FirstName");
  var LastName = getElementVal("LastName");
  var Email = getElementVal("Email");
  var Password = getElementVal("Password");
  var ConfirmPassword = getElementVal("ConfirmPassword");

  saveMessages(FirstName, LastName, Email, Password, ConfirmPassword);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (FirstName, LastName, Email, Password, ConfirmPassword) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Password: Password,
    ConfirmPassword: ConfirmPassword,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
