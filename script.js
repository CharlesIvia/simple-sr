//Query the dom and assign variables
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//Initialize speech recognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Voice activated!");
};

//Set variables

let morningGreetings = [
  "Good morning, how are you?",
  "Bonjour. Have a lovely day!",
];

let eveningGreeting = [
  "Hello, good eveing!",
  "Good eveining! It is a beutiful evening. How are you?",
];

let goodnight = ["Have a lovely night", "Sleep tight! And sweet dreams."];

//Fetch results

recognition.onresult = (e) => {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//Activate speech recognition
btn.addEventListener("click", () => {
  recognition.start();
});

//Read speech loud

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I did not get that correctly!";

  if (message.includes("good morning")) {
    let spokenText =
      morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
    speech.text = spokenText;
  } else if (message.includes("evening")) {
    let spokenText =
      eveningGreeting[Math.floor(Math.random() * eveningGreeting.length)];
    speech.text = spokenText;
  } else if (message.includes("goodnight")) {
    let spokenText = goodnight[Math.floor(Math.random() * goodnight.length)];
    speech.text = spokenText;
  } else if (message.includes("Google")) {
    window.open("https://www.google.com/");
    speech.text = "Opening google!";
  }
  speech.volume = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}
