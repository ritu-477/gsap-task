gsap.registerPlugin(ScrollTrigger);

gsap.to(".pinned-section", {
    scrollTrigger: {
        trigger: ".pinned-section",
        start: "top top",
        end: "+=900",
        pin: true,
        scrub: 1,
    },
});


gsap.fromTo("#bigArrow",
    { x: -100, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: ".pinned-section",
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
            markers: false,
        },
    });

gsap.to("#fadeSection", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#fadeSection",
        start: "top 80%",

    }
});