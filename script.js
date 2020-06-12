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

  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}
