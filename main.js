// JS for Form
const firebaseConfig = {
    apiKey: "AIzaSyBU_W42ShcL0L5kH02sfmcbGtODyrCEwg8",
    authDomain: "pt-ghrce-website.firebaseapp.com",
    databaseURL: "https://pt-ghrce-website-default-rtdb.firebaseio.com",
    projectId: "pt-ghrce-website",
    storageBucket: "pt-ghrce-website.appspot.com",
    messagingSenderId: "981551952532",
    appId: "1:981551952532:web:75c89f0fda8a542d513a81",
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var subject = getElementVal("subject");
  var message = getElementVal("message");


  saveMessages(name, email, phone, subject, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, phone, subject, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email:email,
    phone:phone,
    subject:subject,
    message:message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// JavaScript for Toggle Menu
var navLinks=document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right="0";
    }
    function hideMenu(){
        navLinks.style.right="-200px";
    }