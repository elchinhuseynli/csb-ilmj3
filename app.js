const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  direction: "horizontal",
  smooth: true,
  multiplier: 0.5
});

//   // GSAP integration

//   gsap.registerPlugin(ScrollTrigger);

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     scrollLeft(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.x;
//     },

//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight
//       };
//     },

//     pinType: document.querySelector(".smooth-scroll").style.transform
//       ? "transform"
//       : "fixed"
//   });

//   gsap.to(".image", {
//     opacity: 1,
//     filter: "blur(0px)",
//     scrollTrigger: {
//       trigger: ".image",
//       scroller: ".smooth-scroll",
//       horizontal: true,

//       start: "left center",
//       end: "left left",

//       invalidateOnRefresh: true,
//       markers: true,
//       onEnter: () => {
//         console.log("Enter");
//       }
//     }
//   });
// });
