const sliderContainer = document.querySelector('.slider-container');
const serviceItems = document.querySelectorAll('.service-item');
const totalItems = serviceItems.length;
let currentIndex = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentIndex < totalItems - 2) {
        currentIndex++;
        updateSlider();
    }
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const offset = -currentIndex * (100 / 3); // Calculate offset based on current index
    sliderContainer.style.transform = `translateX(${offset}%)`;
}
//bars section

window.onload = function() {
    // Get all bars
    const bars = document.querySelectorAll('.bar');
    // Iterate through each bar and animate
    
    bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';  // Set width dynamically
    });
}

 function animateNumbers() {
        const counters = document.querySelectorAll('.count');
        const speed = 200; // Adjust speed for animation  

        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;

                const increment = target / speed;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(animate, 20); // Adjust delay for smoother animation
                } else {
                    counter.innerText = target; // Set final value
                }
            };
            animate();
        });
    }

   
    function handleScroll() {
        const section = document.getElementById('our-progress');
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            animateNumbers();
            window.removeEventListener('scroll', handleScroll); // Run only once
        }
    }

    window.addEventListener('scroll', handleScroll);

