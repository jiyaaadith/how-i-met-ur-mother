// JavaScript for timeline photo display
const timelineItems = document.querySelectorAll('.timeline li');
const timelinePhoto = document.getElementById('timeline-photo').querySelector('img');

timelineItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-img');
        timelinePhoto.classList.add('fade-out');
        
        setTimeout(() => {
            timelinePhoto.src = imgSrc;
            timelinePhoto.classList.remove('fade-out');
            timelinePhoto.classList.add('fade-in');
        }, 300);

        setTimeout(() => {
            timelinePhoto.classList.remove('fade-in');
        }, 600);
    });
});

// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
