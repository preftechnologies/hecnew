// Use a timer variable so we can cancel it if needed
let popupTimer = null;

// Show the popup after 6 seconds if it hasn't been closed/submitted
window.addEventListener('DOMContentLoaded', () => {
  popupTimer = setTimeout(() => {
    const popup = document.getElementById('popupContactForm');
    if (popup) {
      // Use "flex" so the centered layout (from CSS flex) is applied
      popup.style.display = 'flex';
    }
  }, 7000);
});

// When closing the popup, clear the timer to prevent re-display
function closePopupForm() {
  if (popupTimer) {
    clearTimeout(popupTimer);
    popupTimer = null;
  }
  document.getElementById('popupContactForm').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('popupForm');
  const submitBtn = document.getElementById('popupSubmit');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Form submission started");
    let formData = new FormData(form);
    
    // Disable the button and show the spinner
    submitBtn.disabled = true;
    let originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

    // Use the existing absolute path to the PHP submit handler to match your contact page's implementation
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
        // Close the popup and cancel the timer if still active
        closePopupForm();
      })
      .catch(err => {
        console.error("Error in submission:", err);
        alert("Submission failed. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
