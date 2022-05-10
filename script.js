const note = new Audio();
const baseDir = "./notas/";
const natural = ["C", "D", "E", "F", "G", "A", "B"];
const sharp = ["C#", "D#", "F#", "G#", "A#"];
const full = [...natural, ...sharp];
let selectedNotes = natural;
let actualNote = null;




const iniciarTraining = document.querySelector(".iniciar");
const blockNote = document.querySelector(".note");
const showBlockNote = document.querySelector(".note .bg");
const repetirNota = document.querySelector(".repetir");
const showNote = document.querySelector(".show");
const select = document.querySelector("select");
const span = document.querySelector("span");
const noteC = document.querySelector(".noteC");




select.addEventListener("change", handleChange);
iniciarTraining.addEventListener("click", handleInit);

repetirNota.addEventListener("click", () => {
  note.src = actualNote;
  note.play();
});

showNote.addEventListener("click", () => {
  showBlockNote.classList.add("active");
});
noteC.addEventListener("click", handleNoteC);




function handleNoteC() {
  note.src = "./notas/CGrave.wav";
  note.play();
}
function handleChange(event) {
  if (event.target.value === "natural") {
    selectedNotes = natural;
  } else if (event.target.value === "sharp") {
    selectedNotes = sharp;
  } else {
    selectedNotes = fullNotes;
  }
}
function randomNotes(baseNotes) {
  const actualNote = Math.floor(Math.random() * baseNotes.length);
  return baseNotes[actualNote];
}

function handleInit() {
  const randomNote = randomNotes(selectedNotes);
  actualNote = `${baseDir}${encodeURIComponent(randomNote)}.wav`;
  note.src = actualNote;
  span.innerText = randomNote;
  blockNote.setAttribute("data-note", randomNote);
  showBlockNote.classList.remove("active");
  note.play();
  console.log(actualNote);
}
