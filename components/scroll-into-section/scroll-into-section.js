 // Scrolling into many sections
 function scrollIntoSection() {
    document.querySelectorAll('.topnav__scrollbtn').forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
}