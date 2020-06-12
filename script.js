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

//Fetch results

recognition.onresult = (e) => {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;
  content.textContent = transcript;
};

//Activate speech recognition
btn.addEventListener("click", () => {
  recognition.onstart();
});
