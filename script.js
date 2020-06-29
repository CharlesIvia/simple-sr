//Query the dom and assign variables
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const header = document.querySelector(".top");
const response = document.querySelector(".response");

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
  "Hello, good evening!",
  "Good evening! It is a beautiful evening today. How are you?",
];

let goodnight = ["Have a lovely night", "Sleep tight! And sweet dreams."];

//Fetch results

recognition.onresult = (e) => {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;
  content.textContent =
    transcript.charAt(0).toUpperCase() + transcript.slice(1) + "?";
  readOutLoud(transcript);
};

//Activate speech recognition
btn.addEventListener("click", () => {
  recognition.start();
});

//Read speech loud

function readOutLoud(message) {
  let synth = window.speechSynthesis;
  let voiceOptions = synth.getVoices();
  let voiceChoice = voiceOptions[5];
  const speech = new SpeechSynthesisUtterance();
  speech.voice = voiceChoice;

  speech.text = "I did not get that correctly!";
  response.textContent = speech.text;

  if (message.includes("good morning")) {
    let spokenText =
      morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
    speech.text = spokenText;
    response.textContent = speech.text;
  } else if (message.includes("evening")) {
    let spokenText =
      eveningGreeting[Math.floor(Math.random() * eveningGreeting.length)];
    speech.text = spokenText;
    response.textContent = speech.text;
  } else if (message.includes("goodnight")) {
    let spokenText = goodnight[Math.floor(Math.random() * goodnight.length)];
    speech.text = spokenText;
    response.textContent = speech.text;
  } else if (message.includes("Google")) {
    window.open("https://www.google.com/");
    speech.text = "Opening google!";
    response.textContent = speech.text;
  } else if (message.includes("your name")) {
    speech.text = "My name is Gatsby Assistant!";
    response.textContent = speech.text;
  } else if (message.includes("Dark mode") || message.includes("dark mode")) {
    document.body.style.background = "rgb(32,33,36)";
    header.style.color = "white";
    header.style.textShadow = "none";
    btn.style.background = "rgb(32,33,36)";
    btn.style.color = "rgb(237, 77, 77)";
    speech.text = "Dark mode turned on!";
    response.textContent = speech.text;
  } else if (message.includes("good bye") || message.includes("goodbye")) {
    speech.text = "Good bye friend. See you soon!";
  } else if (message.includes("hello") || message.includes("Hello")) {
    speech.text = "Hello there. How can I help you?";
    response.textContent = speech.text;
  } else if (message.includes("day") || message.includes("date")) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    function thisMonth() {
      if (month == 6) {
        let month = "June";
        return month;
      } else if (month == 7) {
        let month = "July";
        return month;
      }
    }
    speech.text = `The date is ${day}th ${thisMonth()} ${year}`;
    response.textContent = speech.text;
  }
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}
