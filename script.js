const SUPABASE_URL = 'https://vzgczkqwlzrxxpubqweb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Z2N6a3F3bHpyeHhwdWJxd2ViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTcxNjQzMiwiZXhwIjoyMDM3MjkyNDMyfQ.SACDbzq_M3jlhrvs5V4vgjffrSKbFQOWJMPnZAQ_K-c'

const supabases = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
let optionsList = [];
let totalQuestions = 0;

function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let type = getQueryParam('test');
if (type == "kecemasan") {
  optionsList = [
    "Mati rasa / terasa gatal",
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
  totalQuestions = 20;
}
else if (type == "stress") {
  opt1.textContent = "Tidak Sesuai";
  opt2.textContent = "Kadang"
  opt3.textContent = "Sering"
  opt4.textContent = "Sangat Sering"
  optionsList = [
    "Saya merasa bahwa diri saya menjadi marah karena hal-hal sepele.",
    "Saya merasa bibir saya sering kering.",
    "Saya sama sekali tidak dapat merasakan perasaan positif.",
    "Saya mengalami kesulitan bernafas (misalnya : seringkali terengah-engah atau tidak dapat bernafas padahal tidak melakukan aktivitas fisik sebelumnya).",
    "Saya sepertinya tidak kuat lagi untuk melakukan suatu kegiatan.",
    "Saya cenderung bereaksi berlebihan terhadap suatu situasi.",
    "Saya merasa goyah (misalnya : kaki terasa mau ’copot’).",
    "Saya merasa sulit untuk bersantai.",
    "Saya menemukan diri saya berada dalam situasi yang membuat saya merasa sangat cemas dan saya akan merasa sangat lega jika semua ini berakhir.",
    "Saya merasa tidak ada hal yang dapat diharapkan di masa depan.",
    "Saya menemukan diri saya mudah merasa kesal.",
    "Saya merasa telah menghabiskan banyak energi untuk merasa cemas.",
    "Saya merasa sedih dan tertekan.",
    "Saya menemukan diri saya menjadi tidak sabar ketika mengalami penundaan (misalnya : kemacetan lalu lintas, menunggu sesuatu).",
    "Saya merasa lemas seperti mau pingsan.",
    "Saya merasa saya kehilangan minat akan segala hal.",
    "Saya merasa bahwa saya tidak berharga sebagai seorang manusia.",
    "Saya merasa bahwa saya mudah tersinggung.",
    "Saya berkeringat secara berlebihan (misalnya : tangan berkeringat), padahal temperatur tidak panas atau tidak melakukan aktivitas fisik sebelumnya.",
    "Saya merasa takut tanpa alasan yang jelas.",
    "Saya merasa bahwa hidup tidak bermanfaat.",
    "Saya merasa sulit untuk beristirahat.",
    "Saya mengalami kesulitan dalam menelan.",
    "Saya tidak dapat merasakan kenikmatan dari berbagai hal yang saya lakukan.",
    "Saya menyadari kegiatan jantung, walaupun saya tidak sehabis melakukan aktivitas fisik (misalnya : merasa detak jantung meningkat atau melemah).",
    "Saya merasa putus asa dan sedih.",
    "Saya merasa bahwa saya sangat mudah marah.",
    "Saya merasa saya hampir panik.",
    "Saya merasa sulit untuk tenang setelah sesuatu membuat saya kesal.",
    "Saya takut bahwa saya akan ‘terhambat’ oleh tugas-tugas sepele yang tidak biasa saya lakukan.",
    "Saya tidak merasa antusias dalam hal apapun.",
    "Saya sulit untuk sabar dalam menghadapi gangguan terhadap hal yang sedang saya lakukan.",
    "Saya sedang merasa gelisah.",
    "Saya merasa bahwa saya tidak berharga.",
    "Saya tidak dapat memaklumi hal apapun yang menghalangi saya untuk menyelesaikan hal yang sedang saya lakukan.",
    "Saya merasa sangat ketakutan.",
    "Saya melihat tidak ada harapan untuk masa depan.",
    "Saya merasa bahwa hidup tidak berarti.",
    "Saya menemukan diri saya mudah gelisah.",
    "Saya merasa khawatir dengan situasi dimana saya mungkin menjadi panik dan mempermalukan diri sendiri.",
    "Saya merasa gemetar (misalnya : pada tangan).",
    "Saya merasa sulit untuk meningkatkan inisiatif dalam melakukan sesuatu."
  ];
  totalQuestions = 42;
}

let currentIndex = 0;
let progressIncrement = 100 / totalQuestions;
updateQuestionText();

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
  if (type == "stress") {
    if (selectedValue <= 30) {
      resultText = "Normal";
    } else if (selectedValue <= 40) {
      resultText = "Ringan";
    } else if (selectedValue <= 60) {
      resultText = "Sedang";
    } else if (selectedValue <= 70) {
      resultText = "Berat";
    } else {
      resultText = "Sangat Berat";
    }
  } else if (type == "kecemasan") {
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
  }


  // Display the result in the popup
  document.getElementById("resultText").textContent = `Your result is: ${resultText}`;

  // Hide the form and show the popup
  // document.getElementById("form").style.display = "none";
  // document.getElementById("popup").style.display = "block";
  fadeOut(document.getElementById("form"),200);
  setTimeout(() => fadeIn(document.getElementById("popup"),200), 200);
}

async function submit() {
  const inputElement = document.getElementById('textInput');
  console.log(inputElement.value);
  console.log(selectedValue);
  if (!inputElement.value || inputElement.value != "") {


    if (type == "stress") {
      const { data, error } = await supabases
        .from('stress')
        .insert([
          { 'nama': inputElement.value, 'skor': selectedValue },
        ])
        .select()
      console.log(error ? error : data);
    } else if (type == "kecemasan") {
      const { data, error } = await supabases
        .from('kecemasan')
        .insert([
          { 'nama': inputElement.value, 'skor': selectedValue },
        ])
        .select()
      console.log(error ? error : data);
    }
  }

  // document.getElementById("inputnama").style.display = "none";
  // document.getElementById("hasil").style.display = "block";
  fadeOut(document.getElementById("inputnama"),200);
  setTimeout(() => fadeIn(document.getElementById("hasil"),200), 200);
}

var selectedValue = 0;
var currentWidth = 0;

opt1.addEventListener('click', () => {
  selectedValue += 0;
  currentWidth += progressIncrement;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${Math.round(currentWidth)}%`;
  console.log(selectedValue);
  updateQuestionText();
});

opt2.addEventListener('click', () => {
  selectedValue += 1;
  currentWidth += progressIncrement;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${Math.round(currentWidth)}%`;
  console.log(selectedValue);
  updateQuestionText();
});

opt3.addEventListener('click', () => {
  selectedValue += 2;
  currentWidth += progressIncrement;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${Math.round(currentWidth)}%`;
  console.log(selectedValue);
  updateQuestionText();
});

opt4.addEventListener('click', () => {
  selectedValue += 3;
  currentWidth += progressIncrement;
  progressBar.style.width = `${currentWidth}%`;
  progressBar.textContent = `${Math.round(currentWidth)}%`;
  console.log(selectedValue);
  updateQuestionText();
});


function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = 'none'; // Hide the element after fade-out
  }, duration); // Match the transition duration
}

function fadeIn(element, duration) {
  element.style.display = 'block'; // Make the element visible
  setTimeout(() => {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = 1;
  }, 10); // Small delay to ensure the element is visible before the transition starts
}