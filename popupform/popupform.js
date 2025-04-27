// Prevent multiple declarations
if (typeof popupTimer === 'undefined') {
  let popupTimer = null;
}

// All code inside a single DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Popup show after 7 seconds
  popupTimer = setTimeout(() => {
    const popup = document.getElementById('popupContactForm');
    if (popup) {
      popup.style.display = 'flex';
    }
  }, 7000);

  // Close popup function
  window.closePopupForm = function () {
    if (popupTimer) {
      clearTimeout(popupTimer);
      popupTimer = null;
    }
    const popup = document.getElementById('popupContactForm');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  // Attach submit event if form exists
  const form = document.getElementById('popupForm');
  const submitBtn = document.getElementById('popupSubmit');

  if (form && submitBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log("Form submission started");

      const formData = new FormData(form);

      // Disable the button and show spinner
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

      // Send data
      fetch("/hecnew/submit_contactus.php", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(data => {
        console.log("Form submission response:", data);
        alert(data);
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        closePopupForm();
      })
      .catch(err => {
        console.error("Error in submission:", err);
        alert("Submission failed. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
    });
  }
});
