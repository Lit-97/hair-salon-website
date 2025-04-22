// Show the button when scrolled down 100px
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // JavaScript to handle form submission and show confirmation message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission (page refresh)
  
    // Hide the form and show confirmation message on the page
    document.getElementById('contactForm').style.display = 'none';  // Hide the form
    document.getElementById('confirmationMessage').style.display = 'block';  // Show confirmation message on the page
  });
  
  // Close the confirmation message
  function closeConfirmation() {
    // Hide the confirmation message and optionally reset the form for future submissions
    document.getElementById('confirmationMessage').style.display = 'none';
    document.getElementById('contactForm').style.display = 'block';  // Show the form again if needed
  }

  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from refreshing

        // Reset the form fields BEFORE hiding it
        contactForm.reset();

        // Hide the form and show the styled confirmation message
        contactForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});
