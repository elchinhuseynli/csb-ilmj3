// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
  var wordWrap = tricksWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="tricksword">$2</span>'
  );
}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
  var letterWrap = tricksLetter.item(i);
  letterWrap.innerHTML = letterWrap.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

// Fade Up Animation
var fadeUpWords = anime.timeline({
  loop: false,
  autoplay: true
});

fadeUpWords.add({
  targets: ".fade-up-words .tricksword",
  translateY: [50, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1000,
  delay: (el, i) => 500 + 30 * i
});

var fadeUpLetters = anime.timeline({
  loop: false,
  autoplay: true
});

fadeUpLetters.add({
  targets: ".fade-up-letters .letter",
  translateY: [50, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2200,
  delay: (el, i) => 300 + 30 * i
});

// var fadeUpCards = anime.timeline({
//   loop: false,
//   autoplay: true
// });

// Stagger your animation

// fadeUpCards.add({
//   targets: ".slider-card",
//   translateX: [100, 0],
//   opacity: [0, 1],
//   easing: "easeOutExpo",
//   duration: 2000,
//   delay: (el, i) => 100 + 30 * i
// });

// // fade Up Cards
// var fadeUpCards = anime.timeline({
//   loop: false,
//   autoplay: false
// });

// // Play animation when scrolled into view
// $(".product-item").on("inview", function (event, isInView) {
//   if (isInView) {
//     $(".product-item").each(function (i) {
//       var $item = $(this);
//       setTimeout(function () {
//         $item.click();
//       }, 200 * i);
//       // delays the next animation by 200 milliseconds
//     });
//   } else {
//   }
// });
