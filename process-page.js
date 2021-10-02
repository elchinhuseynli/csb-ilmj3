const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  direction: "horizontal",
  smooth: true,
  multiplier: 0.5
});

// Loads the audio
var audio = document.getElementById("audio");
audio.load();

// First click and second click toggle
$(".audio-lottie").click(function () {
  $(this).toggleClass("audio-toggle");
  if ($(this).hasClass("audio-toggle")) {
    // first click
    audio.play();
  } else {
    // second click
    audio.pause();
  }
});

// <!-- Initialize Card Swipers -->

var feltswiper = new Swiper(".felt-slider", {
  effect: "cards",
  grabCursor: true
});

var strawswiper = new Swiper(".straw-slider", {
  effect: "cards",
  grabCursor: true
});

var linewrapper = new Swiper(".linings-slider", {
  effect: "cards",
  grabCursor: true
});

var bandswrapper = new Swiper(".bands-wrapper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 48,
  centeredSlides: true,
  grabCursor: true,
  loop: false,
  speed: 1000,
  navigation: {
    nextEl: ".v-next",
    prevEl: ".v-prev"
  }
});

//  <!-- Initialize draggable  -->

$(function () {
  $(".trip-block").draggable();
  $("#droppable").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    }
  });
});

//  <!-- Initialize datapicker  -->

var Webflow = Webflow || [];
Webflow.push(function () {
  document.getElementsByClassName("date").flatpickr({
    enableTime: true,
    altInput: true
    // This outputs in the format of Month Day, Year HH:MM
    // There are a LOT of ways to format and it's super easy to swap.
    // See here: https://flatpickr.js.org/formatting/
  });
});
