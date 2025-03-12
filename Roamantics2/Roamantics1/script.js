function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        interval = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(interval);
            }
        }, step);
}

counter("count1", 0, 1285, 1500);
counter("count2", 0, 786, 2500);
counter("count3", 0, 1440, 1500);
counter("count4", 0, 310, 3000);
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default for mobile
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: { slidesPerView: 1 },  // Small screens (mobile)
        768: { slidesPerView: 2 },  // Medium screens (tablets)
        1024: { slidesPerView: 3 }  // Large screens (desktops)
    }
});

AOS.init({
    duration: 1000,
    once: true,
    });