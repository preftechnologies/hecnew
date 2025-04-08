
// Open Popup
document.getElementById("openPopup").addEventListener("click", function () {
    document.getElementById("appointmentPopup").classList.add("active");
});

// Close Popup
function closePopup() {
    document.getElementById("appointmentPopup").classList.remove("active");
}

// Close the popup when clicking outside the form
window.onclick = function (event) {
    let popup = document.getElementById("appointmentPopup");
    if (event.target === popup) {
        closePopup();
    }
};

// Handle Form Submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    let formData = new FormData(this);
    const submitBtn = document.getElementById("submitAppointment");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

    fetch("../submit_appointment.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        closePopup();
        document.getElementById("appointmentForm").reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
});
