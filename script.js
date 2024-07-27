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
  opt4.textContent = "Sangat Sesuai"
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
  let resultText, resultColor, resultMessage;

  if (type == "stress") {
    if (selectedValue <= 30) {
      resultText = "Normal";
      resultColor = "green";
      resultMessage = "Wow! Kamu sedang berada di kondisi yang baik. Pertahankan gaya hidup sehatmu! 🌟 (Fun fact: Tertawa selama 10-15 menit bisa membakar sekitar 40 kalori!)";
    } else if (selectedValue <= 40) {
      resultText = "Ringan";
      resultColor = "yellow";
      resultMessage = "Hei! Tingkat stresmu ringan, jadi tidak ada yang perlu dikhawatirkan. Mungkin sedikit relaksasi bisa membantu. 🌼 (Fun fact: Mendengarkan musik yang menenangkan bisa mengurangi tekanan darah dan menurunkan kadar hormon stres!)";
    } else if (selectedValue <= 60) {
      resultText = "Sedang";
      resultColor = "orange";
      resultMessage = "Kamu sedang mengalami stres tingkat sedang. Jangan lupa untuk mengambil waktu untuk dirimu sendiri dan relaksasi. 🌿 (Fun fact: Menghabiskan waktu di alam dapat menurunkan tingkat kortisol dan meningkatkan suasana hati!)";
    } else if (selectedValue <= 70) {
      resultText = "Berat";
      resultColor = "red";
      resultMessage = "Stres kamu cukup tinggi saat ini. Penting untuk mencari dukungan dan mengambil langkah-langkah untuk menguranginya. 🌱 (Fun fact: Olahraga teratur dapat meningkatkan produksi endorfin, yang membantu mengurangi stres dan meningkatkan kesejahteraan!)";
    } else {
      resultText = "Sangat Berat";
      resultColor = "darkred";
      resultMessage = "Stres kamu sangat tinggi. Sangat penting untuk mencari bantuan profesional dan mengambil langkah-langkah serius untuk mengelola stres ini. 🌲 (Fun fact: Berjalan-jalan di alam bisa membantu menenangkan pikiran dan mengurangi kecemasan!)";
    }
  } else if (type == "kecemasan") {
    if (selectedValue <= 7) {
      resultText = "Normal";
      resultColor = "green";
      resultMessage = "Wow! Kamu dalam kondisi yang baik dan tenang. Teruskan dengan gaya hidup positifmu! 🌟 (Fun fact: Menghabiskan waktu bersama hewan peliharaan dapat mengurangi kecemasan dan meningkatkan suasana hati!)";
    } else if (selectedValue <= 9) {
      resultText = "Ringan";
      resultColor = "yellow";
      resultMessage = "Kamu mengalami sedikit kecemasan, tetapi tidak perlu khawatir. Luangkan waktu untuk dirimu sendiri dan nikmati kegiatan yang kamu sukai. 🌼 (Fun fact: Aromaterapi dengan minyak lavender bisa membantu menurunkan tingkat kecemasan!)";
    } else if (selectedValue <= 14) {
      resultText = "Sedang";
      resultColor = "orange";
      resultMessage = "Tingkat kecemasanmu sedang. Jangan lupa untuk beristirahat dan mencari cara-cara relaksasi yang efektif. 🌿 (Fun fact: Berlatih yoga dan meditasi dapat membantu menurunkan kecemasan dan meningkatkan kesejahteraan emosional!)";
    } else if (selectedValue <= 19) {
      resultText = "Berat";
      resultColor = "red";
      resultMessage = "Kamu mengalami kecemasan yang cukup tinggi saat ini. Pertimbangkan untuk mencari dukungan dan berbicara dengan seseorang yang dapat membantu. 🌱 (Fun fact: Menulis jurnal tentang perasaan dan pikiranmu dapat membantu mengurangi kecemasan dan memberikan wawasan yang berguna!)";
    } else {
      resultText = "Sangat Berat";
      resultColor = "darkred";
      resultMessage = "Kamu mengalami kecemasan yang sangat tinggi. Sangat penting untuk mencari bantuan profesional dan mengambil langkah-langkah serius untuk mengelola kecemasan ini. 🌲 (Fun fact: Berjalan-jalan di alam bisa membantu menenangkan pikiran dan mengurangi kecemasan!)";
    }
  }

  // Display the result in the popup
  const resultElement = document.getElementById("resultText");
  const message = document.getElementById("funfact");
  message.textContent = resultMessage;
  resultElement.textContent = resultText;
  resultElement.style.color = resultColor; // Set text color based on result


  // Hide the form and show the popup
  // document.getElementById("form").style.display = "none";
  // document.getElementById("popup").style.display = "block";
  fadeOut(document.getElementById("form"), 200);
  setTimeout(() => fadeIn(document.getElementById("popup"), 200), 200);
}

async function submit() {
  const inputElement = document.getElementById('textInput');
  console.log(inputElement.value);
  console.log(selectedValue);
  const hasiltest = document.getElementById("hasilTest");
  if (inputElement && hasiltest) {
    hasiltest.textContent = "Hasil Tes " + inputElement.value;
  } 

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
  fadeOut(document.getElementById("inputnama"), 200);
  setTimeout(() => fadeIn(document.getElementById("hasil"), 200), 200);
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

document.addEventListener("DOMContentLoaded", function() {
  const inputElement = document.getElementById("textInput");
  const submitButton = document.getElementById("submitButton");

  // Add event listener to input field to enable/disable submit button based on input value
  inputElement.addEventListener("input", function() {
    if (inputElement.value.trim() === "") {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });
});