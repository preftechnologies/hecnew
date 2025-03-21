document.addEventListener("DOMContentLoaded", function() {
    // Open the recruiter form popup
    document.getElementById("openRecruiterForm").addEventListener("click", function() {
        document.getElementById("recruiterPopupForm").style.display = "flex";
    });

    // Close the recruiter form popup
    document.getElementById("closeRecruiterForm").addEventListener("click", function() {
        document.getElementById("recruiterPopupForm").style.display = "none";
    });

    // Handle form submission
    document.getElementById("recruiterForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent normal form submission

        // Collect form data
        let formData = new FormData(this);

        // Send data via AJAX
        fetch("/hecnew/submit_recruiter.php", {

            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show response message
            document.getElementById("recruiterPopupForm").style.display = "none"; // Hide form after submission
        })
        .catch(error => console.error("Error:", error));
    });
});
