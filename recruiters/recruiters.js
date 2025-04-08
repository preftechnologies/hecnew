
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

        let formData = new FormData(this);
        const submitBtn = document.getElementById("submitRecruiter");
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

        fetch("/hecnew/submit_recruiter.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById("recruiterPopupForm").style.display = "none";
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
});
