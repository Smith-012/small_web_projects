const timeline = gsap.timeline({});
const timeline2 = gsap.timeline({});

let splitMessage = SplitText.create(".message", {
  type: "chars",
  charsClass: "char",
});

let split = SplitText.create(".letters", {
  type: "chars",
  charsClass: "char",
});

timeline
  .to(".container", {
    y: "0",
    duration: 1,
    opacity: 1,
    ease: "elastic.out(1,0.3)",
  })
  .to(".loader", {
    width: "100%",
    duration: 7,
    ease: "expoScale(0.5,7,none)",
  })
  .to(".outer-container", {
    y: "100vh",
    duration: 1.5,
    ease: "bounce.out",
  })
  .from(splitMessage.chars, {
    opacity: 0,
    y: 50,
    ease: "back(4)",
    stagger: {
      from: "end",
      each: 0.05,
    },
  });

split.chars.forEach((spl) => {
  timeline2.fromTo(
    spl,
    {
      y: "0px",
      opacity: 0,
    },
    {
      y: "-100px",
      opacity: 1,
      yoyo: true,
      repeat: -1,
      delay: 0.2,
      rotation: () => gsap.utils.random(-30, 30),
    }
  );
});
