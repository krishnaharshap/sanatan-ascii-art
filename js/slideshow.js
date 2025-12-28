// slideshow.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryEl = document.getElementById('gallery');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const copyBtn = document.getElementById('copy');

    let slides = [];      // array of ASCII art items (text)
    let currentIndex = 0;

    async function loadSlides() {
        const filePaths = [
            'ascii-art/Deities/ganesha.txt',
            'ascii-art/Deities/shiva.txt',
            'ascii-art/Deities/nataraja.txt',
            'ascii-art/Deities/datta-paduka.txt',
            'ascii-art/Graphics/om-namah-shivaya.txt',
            'ascii-art/Symbols/om.txt',
            'ascii-art/Symbols/swastika.txt',
            // add more here …
        ];

        for (const path of filePaths) {
            try {
                const resp = await fetch(path);
                const text = await resp.text();
                slides.push(text);
            } catch (err) {
                console.error('Failed to load slide:', path, err);
            }
        }

        showSlide(0);
    }

    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;
        currentIndex = index;
        galleryEl.textContent = slides[currentIndex];
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide((currentIndex + 1) % slides.length);
    });

    copyBtn.addEventListener('click', () => {
        const text = slides[currentIndex];
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Copy failed:', err);
            });
    });

    // Keyboard navigation: left/right arrow, Enter key on button
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
    });

    // Start
    loadSlides();
});
