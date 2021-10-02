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
  targets: ".fade-up .tricksword",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 4400,
  delay: (el, i) => 2500 + 30 * i
});

var fadeUpLetters = anime.timeline({
  loop: false,
  autoplay: true
});

fadeUpLetters.add({
  targets: ".fade-up-letters .letter",
  translateX: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 4400,
  delay: (el, i) => 2400 + 30 * i
});

// Bg animation
var reveal = anime.timeline({
  loop: false,
  autoplay: true
});

reveal.add({
  targets: [".reveal", ".animated-bg"],
  opacity: [0, 1],
  easing: "easeInQuad",
  duration: 2500,
  delay: (el, i) => 500 + 30 * i
});
reveal.play();

var logo = anime.timeline({
  loop: false,
  autoplay: true
});
