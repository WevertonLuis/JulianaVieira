const imageSections = document.querySelectorAll('.image-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 });

imageSections.forEach((section) => {
    observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const targetSection = document.querySelector(sectionId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

$(document).ready(function() {
    // Open the lightbox when an image is clicked
    $('.column img').click(function() {
      var src = $(this).attr('src');
      $('#lightbox').fadeIn();
      $('#lightbox img').attr('src', src);
    });
  
    // Close the lightbox when the close button is clicked
    $('#close-btn').click(function() {
      $('#lightbox').fadeOut();
    });
  });
