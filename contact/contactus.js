document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent normal form submission

        let formData = new FormData(this); // Automatically gets all form values

        fetch("/hecnew/submit_contactus.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show response message
            document.getElementById("contactForm").reset(); // Reset form fields
        })
        .catch(error => console.error("Error:", error));
    });
});
