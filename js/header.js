document.addEventListener("DOMContentLoaded", function() {
    // Determine the correct path for index.html based on the current page location
    let homePath = window.location.pathname.includes("/studydestinations/") 
        ? "/hecnew/index.html" 
        : "index.html";

    document.getElementById("header-container").innerHTML = `
      <style>
            /* Navbar Styling */
            .navbar {
                background: url('/hecnew/images/footerimg.jpg') no-repeat center center/cover;
                padding: 12px 30px;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 999;
                box-shadow: 0 4px 6px rgba(0,0,0,0.2);
                transition: all 0.3s ease-in-out;
                min-height: 70px;
                display: flex;
                align-items: center;
            }

            .navbar:hover {
                box-shadow: 0 6px 12px rgba(0,0,0,0.3);
            }

            .navbar-brand {
                display: flex;
                align-items: center;
            }

            /* ✅ Updated Logo Size */
            .navbar-brand img {
                height: auto;
                max-height: 90px; /* Increased size for better visibility */
                width: auto;
                padding: 5px;
            }

            /* Navbar Links */
            .navbar-nav .nav-link {
                color: white !important; 
                font-size: 16px;
                font-weight: 600;
                padding: 10px 15px;
                transition: all 0.3s ease;
                border-radius: 5px;
            }

            .navbar-nav .nav-link:hover, .navbar-nav .nav-link:focus {
                color: white !important;
                background: #2B6CB0;
            }

            /* Responsive Navbar */
            @media (max-width: 992px) {
                .navbar {
                    padding: 10px 20px;
                    min-height: 65px;
                }
                .navbar-brand img {
                    max-height: 70px;
                }
                .navbar-nav .nav-link {
                    padding: 10px;
                    font-size: 14px;
                }
            }

            /* Active & Hover Effects */
            .navbar-nav .nav-link:hover {
                color: #38B2AC !important;
            }

            .navbar-nav .nav-link.active {
                color: #48BB78 !important;
            }

            /* Dropdown Menu */
            .dropdown-menu {
                background-color: #0D1B2A;
                border: none;
            }

            .dropdown-menu .dropdown-item {
                color: white !important;
                font-size: 14px;
                transition: background 0.3s ease;
            }

            .dropdown-menu .dropdown-item:hover {
                background-color: #1B263B;
            }

            /* Mobile Menu Toggler */
            .navbar-toggler-icon {
                filter: invert(1);
            }

            /* Prevent content from being overlapped by fixed navbar */
            body {
                padding-top: 80px;
            }
        </style>


    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <!-- ✅ Fixed Logo Link -->
            <a class="navbar-brand" href="${homePath}">
                <img src="/hecnew/images/logoHHH.png" alt="HEC Logo">
            </a>

            <!-- Mobile Menu Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/hecnew/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hecnew/students/students.html">Students</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hecnew/recruiters/recruiters.html">Recruiters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hecnew/studydestinations/studydest.html">Study Destinations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hecnew/contact/contactus.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
});
