document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("footer-container").innerHTML = `
        <style>
            .footer {
                
                
                  background: url('/hecnew/images/footerimg.jpg') no-repeat center center/cover;
                color: white;
                padding: 40px 0;
                text-align: left;
                font-family: 'Inter', sans-serif;
            }
            .footer .container {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                max-width: 1200px;
                margin: auto;
            }
            .footer-column {
                flex: 1;
                min-width: 200px;
                padding: 10px;
            }
            .footer-column h4 {
                font-size: 18px;
                margin-bottom: 15px;
                font-weight: bold;
                color: #38B2AC;
            }
            .footer-column p, .footer-column a {
                font-size: 14px;
                color: #E2E8F0;
                text-decoration: none;
                display: block;
                margin-bottom: 8px;
                transition: color 0.3s;
            }
            .footer-column a:hover {
                color: #63B3ED;
            }
            .social-icons {
                display: flex;
                gap: 10px;
                margin-top: 15px;
            }
            .social-icons a {
                color: white;
                font-size: 20px;
                transition: 0.3s;
            }
            .social-icons a:hover {
                color: #63B3ED;
            }
            .footer-bottom {
                text-align: center;
                margin-top: 20px;
                font-size: 14px;
                color: #A0AEC0;
            }
            /* Floating Contact & Scroll Buttons */
            .floating-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                z-index: 1000;
                align-items: center;
            }
            .whatsapp-container {
                display: flex;
                align-items: center;
                gap: 10px;
                background: #25D366;
                color: white;
                padding: 10px 15px;
                border-radius: 30px;
                font-size: 16px;
                font-weight: bold;
                text-decoration: none;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                transition: background 0.3s;
            }
            .whatsapp-container:hover {
                background: #1EBE5D;
            }
            .whatsapp-container i {
                font-size: 22px;
            }
            .scroll-buttons {
                position: fixed;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                gap: 15px;
                z-index: 1000;
            }
            .scroll-btn {
                background-color: #2B6CB0;
                color: white;
                border: none;
                padding: 15px;
                font-size: 20px;
                cursor: pointer;
                border-radius: 50%;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                transition: 0.3s;
                width: 55px;
                height: 55px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .scroll-btn:hover {
                background-color: #38B2AC;
            }
        </style>

        <footer class="footer">
            <div class="container">
                <div class="footer-column">
                    <img src="/hecnew/images/logoHHH.png" alt="HEC Logo" style="width: 150px; margin-bottom: 10px;">
                    <p>HEC is a premier education consultancy, guiding students in pursuing higher education abroad with expert assistance and a trusted network.</p>
                    <div class="social-icons">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-column">
    <h4>Study Destinations</h4>
   
    <a href="/hecnew/studydestinations/canada/canada.html">Study in Canada</a>
    <a href="/hecnew/studydestinations/australia/australia.html">Study in Australia</a>
    <a href="/hecnew/studydestinations/uk/uk.html">Study in UK</a>
    <a href="/hecnew/studydestinations/france/france.html">Study in France</a>
    <a href="/hecnew/studydestinations/germany/germany.html">Study in Germany</a>
    <a href="/hecnew/studydestinations/switzerland/switzerland.html">Study in Switzerland</a>
    <a href="/hecnew/studydestinations/italy/italy.html">Study in Italy</a>
</div>

<div class="footer-column">
    <h4>Scholarships</h4>
    <a href="#">Scholarships in USA</a>
    <a href="#">Scholarships in Canada</a>
    <a href="#">Scholarships in Australia</a>
    <a href="#">Scholarships in UK</a>
    <a href="#">Scholarships in France</a>
    <a href="#">Scholarships in Germany</a>
    <a href="#">Scholarships in Switzerland</a>
    <a href="#">Scholarships in Italy</a>
</div>

<div class="footer-column">
    <h4>Other Links</h4>
    <a href="/hecnew/contact/contactus.html">Contact Us</a>
    <a href="/hecnew/students/students.html">Students</a>
    <a href="/hecnew/recruiters/recruiters.html">Recruiters</a>
    <a href="/hecnew/index.html">Home</a>
</div>

            </div>
            <div class="footer-bottom">© 2025 HEC Website. All Rights Reserved.</div>
        </footer>
    `;

    // Floating WhatsApp and scroll buttons
    const floatingElements = `
        <div class="floating-container">
            <a href="https://wa.me/923059676763" target="_blank" class="whatsapp-container" title="Chat on WhatsApp">
                <i class="bi bi-whatsapp"></i>
                Quick Contact
            </a>
        </div>
        <div class="scroll-buttons">
            <button class="scroll-btn" id="scrollToTop" title="Go to Top">▲</button>
            <button class="scroll-btn" id="scrollToBottom" title="Go to Bottom">▼</button>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", floatingElements);

    // Scroll event listeners
    document.getElementById("scrollToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("scrollToBottom").addEventListener("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
});
