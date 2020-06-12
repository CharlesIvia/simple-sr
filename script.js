//Query the dom and assign variables
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//Initialize speech recognition

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("Voice activated!");
};

//Activate speech recognition
btn.addEventListener("click", () => {
  recognition.onstart();
});
