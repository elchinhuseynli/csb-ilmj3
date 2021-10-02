$(".embed-video").on("click", function () {
  $(".video-wrapper").toggleClass("full");
  $(".intro-wrapper").removeClass("dissapear");
  $(".navbar").removeClass("dissapear");
});

// Set to the class of your embed
let backgroundVid = $(".embed-video");

backgroundVid.each(function () {
  $("video", this).get(0).play();
});

backgroundVid.on("click", function () {
  let myVideo = $(this).find("video");
  $(this).toggleClass("playing");
  if ($(this).hasClass("playing")) {
    // First action
    myVideo.get(0).play();
    myVideo.prop("muted", false);
  } else {
    // Second action
    myVideo.get(0).pause();
    // Reset video timeline to beginning
    // myVideo.get(0).currentTime = 0;
  }
});

$(".play-video-link").on("click", function () {
  $(".embed-video").click();
  $(".intro-wrapper").addClass("dissapear");
  $(".navbar").addClass("dissapear");
});
