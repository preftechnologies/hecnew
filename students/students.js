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

    fetch("../submit_appointment.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        closePopup(); // Close the popup after submission
        document.getElementById("appointmentForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
