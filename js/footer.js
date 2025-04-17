document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("footer-container").innerHTML = `
    <style>
        .footer {
            background-color: #0f172a;
            color: #e2e8f0;
            padding: 40px 20px;
            font-family: 'Inter', sans-serif;
            border-top: 1px solid #334155;
        }

        .footer .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1200px;
            margin: auto;
            gap: 30px;
        }

        .footer-column {
            flex: 1;
            min-width: 220px;
        }

        .footer-column h4 {
            font-size: 16px;
            color: #38bdf8;
            font-weight: 600;
            margin-bottom: 12px;
        }

        .footer-column p,
        .footer-column a {
            font-size: 14px;
            color: #cbd5e1;
            text-decoration: none;
            margin-bottom: 8px;
            display: block;
            transition: color 0.3s ease;
        }

        .footer-column a:hover {
            color: #38bdf8;
        }

        .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 10px;
        }

        .social-icons a {
            color: #38bdf8;
            font-size: 20px;
            transition: transform 0.3s;
        }

        .social-icons a:hover {
            transform: scale(1.2);
        }

        .footer-bottom {
            text-align: center;
            margin-top: 30px;
            font-size: 13px;
            color: #94a3b8;
        }

        .footer-disclaimer {
            text-align: center;
            font-size: 13px;
            color: #f1f5f9;
            margin-top: 10px;
        }

        .footer-disclaimer a {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 500;
        }

        .footer-disclaimer a:hover {
            text-decoration: underline;
        }

        .floating-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 1000;
            align-items: center;
        }

        .whatsapp-container {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #25D366;
            color: white;
            padding: 8px 12px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            transition: background 0.3s;
        }

        .whatsapp-container:hover {
            background: #1EBE5D;
        }

        .whatsapp-container i {
            font-size: 20px;
        }

        .scroll-buttons {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 1000;
        }

        .scroll-btn {
            background-color: #2563eb;
            color: white;
            border: none;
            padding: 12px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s;
        }

        .scroll-btn:hover {
            background-color: #1e40af;
        }

        @media (max-width: 768px) {
            .footer .container {
                flex-direction: column;
                text-align: center;
            }

            .footer-column {
                margin-bottom: 20px;
            }
        }
    </style>

    <footer class="footer">
        <div class="container">
            <div class="footer-column">
                <img src="/hecnew/images/logoHHH.png" alt="HEC Logo" style="width: 120px; margin-bottom: 15px;">
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

        <div class="footer-disclaimer">
            In partnership with <a href="https://he-direct.com" target="_blank">he-direct.com</a>
        </div>
        <div class="footer-bottom">© 2025 HEC Website. All Rights Reserved.</div>
    </footer>
    `;

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

    document.getElementById("scrollToTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("scrollToBottom").addEventListener("click", function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
});
