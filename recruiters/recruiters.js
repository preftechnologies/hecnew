// recruiters.js
document.addEventListener("DOMContentLoaded", () => {
    const popup      = document.getElementById("recruiterPopupForm");
    const closeBtn   = document.getElementById("closeRecruiterForm");
    const form       = document.getElementById("recruiterForm");
    const submitBtn  = document.getElementById("submitRecruiter");
  
    // Open on every button with this class
    document.querySelectorAll(".openRecruiterForm").forEach(btn =>
      btn.addEventListener("click", () => {
        popup.style.display = "flex";
      })
    );
  
    // Close popup
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Close when clicking outside form
    window.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });
  
    // Submit handler
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
  
      try {
        const res  = await fetch("/hecnew/submit_recruiter.php", {
          method: "POST",
          body: new FormData(form)
        });
        const text = await res.text();
        alert(text);
        popup.style.display = "none";
        form.reset();
      } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong. Please try again.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  });
  