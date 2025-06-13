
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
  


    document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.video-gallery-container');
  const rightArrow = document.querySelector('.video-arrow-right');
  const leftArrow = document.querySelector('.video-arrow-left');

  function scrollByOneCard(direction) {
    if (!container) return;
    const card = container.querySelector('.video-item');
    if (card) {
      const cardWidth = card.offsetWidth + 30; // 30px gap
      container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  }

  if (rightArrow) {
    rightArrow.onclick = function() { scrollByOneCard(1); };
  }
  if (leftArrow) {
    leftArrow.onclick = function() { scrollByOneCard(-1); };
  }
});
