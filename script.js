const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");
const progressBar = document.getElementById("progressBar"); 
const questionText = document.getElementById("questionText");

const optionsList = [
  "Merasa panas",
  "Kaki bergoyang-goyang",
  "Tidak bisa relaks / tidak bisa santai",
  "Takut hal buruk terjadi",
  "Pusing",
  "Jantung berdenyut cepat",
  "Sempoyongan / serasa mau jatuh",
  "Merasa ngeri",
  "Gelisah / gugup",
  "Merasa tercekik",
  "Tangan gemetaran",
  "Menggigil",
  "Takut hilang kendali",
  "Kesulitan bernafas",
  "Takut mati",
  "Ketakutan",
  "Sakit perut",
  "Serasa mau pingsan / berkunang-kunang",
  "Muka jadi kemerah-merahan",
  "Keringat panas / keringat dingin"
];

let currentIndex = 0;

function updateQuestionText() {
  if (currentIndex < optionsList.length) {
    questionText.textContent = optionsList[currentIndex];
    currentIndex++;
  } else {
    showResult();
  }
}

function showResult() {
  let resultText;
  if (selectedValue <= 7) {
    resultText = "Normal";
  } else if (selectedValue <= 9) {
    resultText = "Ringan";
  } else if (selectedValue <= 14) {
    resultText = "Sedang";
  } else if (selectedValue <= 19) {
    resultText = "Berat";
  } else {
    resultText = "Sangat Berat";
  }
  
  // Display the result in the modal
  document.getElementById("resultText").textContent = `Your result is: ${resultText}`;
  
  // Show the modal
  $('#resultModal').modal('show');
}

var selectedValue = 0;
var currentWidth = 0; // Initialize currentWidth outside event listeners

opt1.addEventListener('click', () => {
  selectedValue += 0;
  currentWidth += 5;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${currentWidth}%`;  
  console.log(selectedValue); 
  updateQuestionText();
});

opt2.addEventListener('click', () => {
  selectedValue += 1;
  currentWidth += 5;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${currentWidth}%`;  
  console.log(selectedValue); 
  updateQuestionText();
});

opt3.addEventListener('click', () => {
  selectedValue += 2;
  currentWidth += 5;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${currentWidth}%`;  
  console.log(selectedValue); 
  updateQuestionText();
});

opt4.addEventListener('click', () => {
  selectedValue += 3;
  currentWidth += 5;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${currentWidth}%`;  
  console.log(selectedValue); 
  updateQuestionText();
});
