const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
var no = 1;

function hidesoal1() {
  var nosoal = "soal"+no;
  var element = document.getElementById(nosoal);
  no = no+1;
  var nosoal = "soal"+no;
  var element2 = document.getElementById(nosoal);
  
  element.style.display = 'none';
  element2.style.display = '';
 }
 