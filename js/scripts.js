// const navbar = document.querySelector('.page-header');
// window.onscroll = () => {
//     if (window.scrollY > 50) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };
//
// function changeClass(){
//       navbar.classList.add('nav-active');
//     }
// window.onload = function(){
//     document.querySelector('.page-header').addEventListener( 'click', changeClass);
// }
function reveal() {
  var reveals = document.querySelectorAll(".projects,.work,.skills,.footer");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
