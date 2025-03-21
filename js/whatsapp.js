// whatsapp.js (Optional animation handling)

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.getElementById("whatsapp-container");

    // Animate button appearance
    whatsappBtn.style.opacity = "0";
    whatsappBtn.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        whatsappBtn.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        whatsappBtn.style.opacity = "1";
        whatsappBtn.style.transform = "translateY(0)";
    }, 500);
});
