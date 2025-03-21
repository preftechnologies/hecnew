                          
                           //code for latest news section
document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    const latestNews = [
        {
            title: "New Scholarship Programs Announced!",
            description: "Exciting opportunities for students to study abroad with full financial aid.",
            date: "March 17, 2025",
            link: "news/scholarships.html"
        },
        {
            title: "Top Universities Accepting Applications",
            description: "Find out which universities are now open for applications this season.",
            date: "March 15, 2025",
            link: "news/universities.html"
        },
        {
            title: "Visa Policies Updated for 2025",
            description: "Get the latest updates on new visa policies for international students.",
            date: "March 10, 2025",
            link: "news/visa-policies.html"
        }
    ];
    

    latestNews.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <a href="${news.link}" target="_blank">
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <span class="news-date">${news.date}</span>
            </a>
        `;
        newsContainer.appendChild(newsItem);
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 100; // Adjust speed of counter animation

    const startCounting = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / speed;

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // Detect when section is visible and start counter
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".info-boxes"));
});
