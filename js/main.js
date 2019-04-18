//https://davidwalsh.name/javascript-debounce-function
//------------------------------------------------------------------
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


const chicks = document.getElementsByClassName('chick');
console.log(chicks)

// function checkSlide(e){
//   console.log(e);
// }

function showScrollY(e){
  console.log(window.scrollY);
}

function checkSlide(e){
  for(var i = 0; i < chicks.length; i++){
    const hatchAt = (window.scrollY + window.innerHeight) - chicks[i].offsetHeight/2;
    const chickBottom = chicks[i].offsetTop + chicks[i].offsetHeight;
    const isPeeking = hatchAt > chicks[i].offsetTop;
    const isNotScrolledPast = window.scrollY < chickBottom;
    console.log("Chick " + i + " is peeking : " + isPeeking + "\t and has not scrolled by yet:" + isNotScrolledPast) ;

    if (isPeeking && isNotScrolledPast){
      chicks[i].classList.add('appear');
    } else {
      chicks[i].classList.remove('appear');
    }
  }


}

window.addEventListener('scroll', debounce(checkSlide));
