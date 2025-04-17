document.addEventListener("DOMContentLoaded", function () {
    let homePath = window.location.pathname.includes("/studydestinations/")
        ? "/hecnew/index.html"
        : "index.html";

    document.getElementById("header-container").innerHTML = `
    <style>
        .navbar {
         background: linear-gradient(to right, #38b2ac, #2b6cb0); /* Teal to Blue */


            padding: 12px 30px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            height: 80px;
            display: flex;
            align-items: center;
            box-shadow: none;
            backdrop-filter: saturate(180%) blur(10px);
        }

        .navbar.scrolled {
            background-color: #111827;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .navbar-brand {
            display: flex;
            align-items: center;
        }

        .navbar-brand img {
            max-height: 60px;
            width: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
            padding: 5px;
        }

        .navbar-brand img:hover {
            transform: scale(1.05);
        }

        .navbar-nav .nav-link {
            color: #f8fafc !important;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 15px;
            transition: all 0.3s ease;
            border-radius: 5px;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link:focus {
            color: #93c5fd !important;
            background-color: #1e3a8a;
        }

        .navbar-nav .nav-link.active {
            color: #38bdf8 !important;
        }

        .dropdown-menu {
            background-color: #1e293b;
            border: none;
        }

        .dropdown-menu .dropdown-item {
            color: #f1f5f9 !important;
            font-size: 14px;
            transition: background 0.3s ease;
        }

        .dropdown-menu .dropdown-item:hover {
            background-color: #3b82f6;
        }

        .navbar-toggler-icon {
            filter: invert(1);
        }

        @media (max-width: 992px) {
            .navbar {
                padding: 10px 20px;
                height: auto;
            }

            .navbar-brand img {
                max-height: 50px;
            }

            .navbar-nav .nav-link {
                padding: 10px;
                font-size: 14px;
            }
        }

        body {
            padding-top: 80px;
        }
    </style>

    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="${homePath}">
                <img src="/hecnew/images/logoAA.png" alt="HEC Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/hecnew/index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/hecnew/students/students.html">Students</a></li>
                    <li class="nav-item"><a class="nav-link" href="/hecnew/recruiters/recruiters.html">Recruiters</a></li>
                    <li class="nav-item"><a class="nav-link" href="/hecnew/studydestinations/studydest.html">Study Destinations</a></li>
                    <li class="nav-item"><a class="nav-link" href="/hecnew/contact/contactus.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
