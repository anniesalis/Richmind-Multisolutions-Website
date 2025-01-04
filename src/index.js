
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("div").forEach((section) => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, // Start state
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // When 80% of the viewport hits the top of the section
                end: "bottom 20%", // When 20% of the viewport leaves the section
                toggleActions: "play none none none", // Play animation on scroll
            },
        }
    );
});
