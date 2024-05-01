document.addEventListener('DOMContentLoaded', function () {
    gsap.timeline()
        .from('.bubble1', { duration: 1, opacity: 0, x: 50, y: 50 })
        .from('.bubble2', { duration: 0.7, opacity: 0, x:-50, y: 100 })
        .from('.bubble3', { duration: 0.7, opacity: 0, x:50, y: 100 })
        .from('.bubble4', { duration: 0.7, opacity: 0, x: -50, y: 100 })
});