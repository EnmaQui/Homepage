const sections = document.querySelectorAll('.seccion');
let currentSection = 0;
let isScrolling = false;

sections.forEach(section => {
    section.style.width = `${window.innerWidth}px`;
});

window.addEventListener('resize', () => {
    sections.forEach(section => {
        section.style.width = `${window.innerWidth}px`;
    });
});

window.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (!isScrolling) {
        const scrollContainer = document.querySelector('.scroll-container');
        const maxSections = sections.length - 1;

        if (e.deltaY > 0 && currentSection < maxSections) {
            currentSection++;
        } else if (e.deltaY < 0 && currentSection > 0) {
            currentSection--;
        }

        isScrolling = true;

        scrollContainer.style.transition = 'transform 0.5s ease-in-out';
        scrollContainer.style.transform = `translateX(-${currentSection * window.innerWidth}px)`;

        setTimeout(() => {
            isScrolling = false;
            scrollContainer.style.transition = '';
        }, 500);
    }
});
