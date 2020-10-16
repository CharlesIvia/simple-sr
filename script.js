//Query the dom and assign variables
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const header = document.querySelector(".top");
const response = document.querySelector(".response");
const talk = document.querySelector(".talk");

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

let jokes = [
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the school kids eat their homework? Because their teacher told them it was a piece of cake.",
  "What do you call a shoe made out of a banana? A slipper!",
  "What happens when a frog's car breaks? It gets toad. Hahaha",
  "Where do shellfish go to borrow money? From the prawn broker.",
  "I was wondering why the ball was getting bigger. Then it hit me.",
  "I have a few jokes about unemployed people, but none of them work.",
  "How do you make holy water? You boil the hell out of it.",
  "Will glass coffins be a success? Remains to be seen.",
  "Did you hear about the guy whose whole left side was cut, off? He’s all right now.",
  "I can’t believe I got fired from the calendar factory. All I did was take a day off. hahaha",
  "The man who survived pepper spray and mustard gas is now a seasoned veteran.",
  "I went to buy some camouflage trousers yesterday but couldn't find any.",
  "I tried to sue the airline for losing my luggage. I lost my case.",
  "England doesn't have a kidney bank, but it does have a Liverpool.",
];

let goodnight = ["Have a lovely night", "Sleep tight! And sweet dreams."];

let goodMusic = [
  "https://www.youtube.com/watch?v=YGyMcbhCaxo&ab_channel=bellaunioninc",
  "https://www.youtube.com/watch?v=450p7goxZqg",
  "https://www.youtube.com/watch?v=I6wzhp4g2Cw&list=RDI6wzhp4g2Cw&start_radio=1&ab_channel=emPawaAfrica",
  "https://www.youtube.com/watch?v=-L8hLkg21MQ&ab_channel=SimiVEVO",
  "https://www.youtube.com/watch?v=vx4d1fhMwdM&list=PLFA6lYcrPBwmveUMRVzVBkhSOI7EQyNct&ab_channel=X3MMusic",
];

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

  //Set text content

  const setTextContent = () => {
    return (response.textContent = speech.text);
  };

  speech.text = "I did not get that correctly!";
  setTextContent();

  if (message.includes("good morning")) {
    let spokenText =
      morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
    speech.text = spokenText;
    setTextContent();
  } else if (message.includes("evening")) {
    let spokenText =
      eveningGreeting[Math.floor(Math.random() * eveningGreeting.length)];
    speech.text = spokenText;
    setTextContent();
  } else if (message.includes("goodnight")) {
    let spokenText = goodnight[Math.floor(Math.random() * goodnight.length)];
    speech.text = spokenText;
    setTextContent();
  } else if (message.includes("Google")) {
    window.open("https://www.google.com/");
    speech.text = "Opening google!";
    setTextContent();
  } else if (message.includes("your name")) {
    speech.text = "My name is Gatsby Assistant!";
    setTextContent();
  } else if (message.includes("Dark mode") || message.includes("dark mode")) {
    document.body.style.background = "rgb(32,33,36)";
    header.style.color = "white";
    header.style.textShadow = "none";
    speech.text = "Dark mode turned on!";
    setTextContent();
  } else if (message.includes("good bye") || message.includes("goodbye")) {
    speech.text = "Good bye friend. See you soon!";
  } else if (message.includes("hello") || message.includes("Hello")) {
    speech.text = "Hello there. How can I help you?";
    setTextContent();
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
    speech.text = `The date is ${day}th ${thisMonth()} ${year}.`;
    response.textContent = speech.text;
  } else if (message.includes("play some nice music")) {
    window.open(goodMusic[Math.floor(Math.random() * goodMusic.length)]);
    speech.text = "I hope you will enjoy my selection!";
    response.textContent = speech.text;
  } else if (message.includes("joke")) {
    let spokenText = jokes[Math.floor(Math.random() * jokes.length + 1)];
    speech.text = spokenText;
    response.textContent = "TL:DW";
  }

  window.speechSynthesis.speak(speech);
}

talk.addEventListener("click", (e) => {
  talk.classList.toggle("liked");
  clearLiked();
});

function clearLiked() {
  setTimeout(() => {
    talk.classList = "talk";
  }, 5000);
}
