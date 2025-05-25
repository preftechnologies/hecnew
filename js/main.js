                          
                           //code for latest news section
// document.addEventListener("DOMContentLoaded", function () {
//     const newsContainer = document.getElementById("news-container");

//     const latestNews = [
//         {
//             title: "New Scholarship Programs Announced!",
//             description: "Exciting opportunities for students to study abroad with full financial aid.",
//             date: "March 17, 2025",
//             link: "news/scholarships.html"
//         },
//         {
//             title: "Top Universities Accepting Applications",
//             description: "Find out which universities are now open for applications this season.",
//             date: "March 15, 2025",
//             link: "news/universities.html"
//         },
//         {
//             title: "Visa Policies Updated for 2025",
//             description: "Get the latest updates on new visa policies for international students.",
//             date: "March 10, 2025",
//             link: "news/visa-policies.html"
//         }
//     ];
    

//     latestNews.forEach(news => {
//         const newsItem = document.createElement("div");
//         newsItem.classList.add("news-item");
//         newsItem.innerHTML = `
//             <a href="${news.link}" target="_blank">
//                 <h3 class="news-title">${news.title}</h3>
//                 <p class="news-description">${news.description}</p>
//                 <span class="news-date">${news.date}</span>
//             </a>
//         `;
//         newsContainer.appendChild(newsItem);
//     });
    
// });
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

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".info-boxes .box");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          boxes.forEach(box => box.classList.add("visible"));
          observer.disconnect(); // stop observing once it's visible
        }
      });
    }, { threshold: 0.5 });
  
    const infoBoxesSection = document.querySelector(".info-boxes");
    if (infoBoxesSection) {
      observer.observe(infoBoxesSection);
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add("visible");
        }
      });
    }
  
    let options = {
      threshold: [0.1]
    };
  
    let observer = new IntersectionObserver(onEntry, options);
  
    let elements = document.querySelectorAll(
      ".info-boxes .box, .partners-section .partner-box"
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  
    const partnersList = document.querySelector(".partners-list");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const scrollStep = 200; // Adjust based on the width of each partner box and margin
  
    // Function to scroll the partners list horizontally
    function scrollHorizontally(amount) {
      partnersList.scrollBy({
        left: amount,
        behavior: "smooth"
      });
    }
  
    // Event listener for left arrow
    leftArrow.addEventListener("click", function () {
      scrollHorizontally(-scrollStep);
    });
  
    // Event listener for right arrow
    rightArrow.addEventListener("click", function () {
      scrollHorizontally(scrollStep);
    });
  
    // Automatic sliding
    setInterval(() => {
      scrollHorizontally(scrollStep);
    }, 3000); // Adjust delay time as needed
  });

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("announcements/announcements.html")
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById("announcement-container").innerHTML = data;
//       });
//   });
  
  // Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true
});

          // infinite corousal effect for universities banner 


 document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.partners-list-wrapper');
    const track   = document.querySelector('.partners-list');
    // 1) duplicate so we can loop
    track.innerHTML += track.innerHTML;

    // 2) infinite auto-scroll
    let speed = 1;       // pixels per frame
    let rafId;
    function autoScroll() {
      wrapper.scrollLeft += speed;
      // when we've scrolled half the total (one original set), reset
      if (wrapper.scrollLeft >= track.scrollWidth / 2) {
        wrapper.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(autoScroll);
    }
    autoScroll();

    // 3) arrow controls
    const scrollAmount = wrapper.clientWidth * 0.8;
    document.querySelector('.left-arrow').addEventListener('click', () => {
      wrapper.scrollLeft -= scrollAmount;
    });
    document.querySelector('.right-arrow').addEventListener('click', () => {
      wrapper.scrollLeft += scrollAmount;
    });

    // 4) pause on hover
    wrapper.addEventListener('mouseenter', () => cancelAnimationFrame(rafId));
    wrapper.addEventListener('mouseleave', () => autoScroll());
  });


