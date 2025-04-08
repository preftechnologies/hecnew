
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitContact");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent normal form submission

        let formData = new FormData(this); // Automatically gets all form values

        // Disable button and show Bootstrap spinner inside the button
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

        fetch("/hecnew/submit_contactus.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                alert(data);
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Something went wrong. Please try again.");
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            });
    });
});
