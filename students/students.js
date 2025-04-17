// students.js
document.addEventListener("DOMContentLoaded", () => {
    const popup     = document.getElementById("studentPopupForm");
    const closeBtn  = document.getElementById("closeStudentForm");
    const form      = document.getElementById("studentForm");
    const submitBtn = document.getElementById("submitStudent");
  
    // Open popup on all matching buttons
    document.querySelectorAll(".openStudentForm").forEach(btn =>
      btn.addEventListener("click", () => {
        popup.style.display = "flex";
      })
    );
  
    // Close popup
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Close when clicking outside
    window.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });
  
    // Handle form submit
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
  
      try {
        const res  = await fetch("../submit_appointment.php", {
          method: "POST",
          body: new FormData(form)
        });
        const text = await res.text();
        alert(text);
        popup.style.display = "none";
        form.reset();
      } catch (err) {
        console.error("Submission error:", err);
        alert("Something went wrong. Please try again.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  });
  