// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt6xkJSb9UvXUWnAmkixpDgT3TzRjK3yw",
  authDomain: "personal-website-2cbd0.firebaseapp.com",
  projectId: "personal-website-2cbd0",
  storageBucket: "personal-website-2cbd0.appspot.com",
  messagingSenderId: "895486149384",
  appId: "1:895486149384:web:799572d70e16b538daa2bd",
  measurementId: "G-7R93PZ7EHF",
  databaseURL: "https://personal-website-2cbd0-default-rtdb.firebaseio.com",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const writeToDatabase = (name, email, phone, subject, message) => {
  app
    .database()
    .ref("Registration/" + Date.now())
    .set({
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });
};

const db = getDatabase(app);
$(".contact_form").on("submit", function (e) {
  e.preventDefault();
  var json = {
    name: $(".contact_form #name").val(),
    email: $(".contact_form #email").val(),
    phone: $(".contact_form #phone").val(),
    message: $(".contact_form #message").val(),
    subject: $(".contact_form #subject").val(),
  };
  var name = $(".contact_form #name").val();
  var email = $(".contact_form #email").val();
  var phone = $(".contact_form #phone").val();
  var message = $(".contact_form #message").val();
  var subject = $(".contact_form #subject").val();
  var success = $(".contact_form .returnmessage").data("success");
  $(".contact_form .returnmessage").empty();
  if (name === "" || email === "" || message === "") {
    $("div.empty_notice").slideDown(500).delay(2000).slideUp(500);
  } else {
    console.log(json);
    const userRef = ref(
      db,
      "users/" + genRandom() + "-" + $(".contact_form #name").val()
    );
    console.log(userRef);
    set(userRef, json)
      .then(() => {
        $(".submit").css("display", "none");
        $(".pw_contact .pw_button").css("background", "green");
        $(".pw_contact .pw_button").css("color", "white");
        $(".success").css("display", "block");
      })
      .catch((error) => {
        console.error("Error writing data to the database: ", error);
      });
  }
});

function genRandom() {
  return Math.floor(Math.random() * 8000000) + 1000000;
}
