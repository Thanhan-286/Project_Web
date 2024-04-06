
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
  }
}  

window.addEventListener('scroll', toggleAnimationElementInWindow)

function toggleAnimationElementInWindow() {
    var animationElements = document.querySelectorAll('.show-on-scroll')

    for (var i = 0; i < animationElements.length; i++) {
        var heightScreen = window.innerHeight
        var rectTop = animationElements[i].getBoundingClientRect().top
        var viewPoint = 150

        if (rectTop < heightScreen - viewPoint) {
            animationElements[i].classList.add('start')
        } else {
            animationElements[i].classList.remove('start')
        }
    }
}

