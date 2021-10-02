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
var fadeUp = anime.timeline({
  loop: false,
  autoplay: true,
  delay: 500
});

fadeUp.add({
  targets: ".fade-up .letter",
  translateY: [50, 0],
  translateZ: 0,
  opacity: [0, 1],
  rotateY: [20, 0],
  easing: "easeOutExpo",
  duration: 4400,
  delay: (el, i) => 1000 + 30 * i
});
fadeUp.play();

// Fade Up Animation
var reveal = anime.timeline({
  loop: false,
  autoplay: true
});

reveal.add({
  targets: [".reveal", ".animated-bg-component", ".video-wrapper"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 3000,
  delay: (el, i) => 500 + 30 * i
});
reveal.play();

var logo = anime.timeline({
  loop: false,
  autoplay: true
});

logo.add({
  targets: ".logo",
  opacity: [0, 1],
  rotateY: [35, 0],
  easing: "easeOutExpo",
  duration: 5000,
  delay: (el, i) => 1500 + 30 * i
});

var logo = anime.timeline({
  loop: false,
  autoplay: true
});

logo.add({
  targets: ".logo",
  opacity: [0, 1],
  rotateY: [35, 0],
  easing: "easeOutExpo",
  duration: 5000,
  delay: (el, i) => 1500 + 30 * i
});

var navReveal = anime.timeline({
  loop: false,
  autoplay: true
});

navReveal.add({
  targets: ".nav-reveal",
  opacity: [0, 1],
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 5000,
  delay: (el, i) => 2500 + 50 * i
});
