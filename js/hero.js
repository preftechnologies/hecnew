let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const slideCount = slides.length;

// Function to show a specified slide and update navigation dots
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  const dots = document.querySelectorAll('.hero-nav span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Function for manual navigation
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Generate navigation dots if not already present
function createNavigationDots() {
  const heroSlider = document.querySelector('.hero-slider');
  let heroNav = document.querySelector('.hero-nav');
  if (!heroNav) {
    heroNav = document.createElement('div');
    heroNav.className = 'hero-nav';
    heroSlider.appendChild(heroNav);
  }
  heroNav.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.style.width = '12px';
    dot.style.height = '12px';
    dot.style.borderRadius = '50%';
    dot.style.background = 'rgba(255,255,255,0.6)';
    dot.style.cursor = 'pointer';
    dot.style.transition = 'background 0.3s ease';
    if (index === 0) {
      dot.classList.add('active');
      dot.style.background = getComputedStyle(document.documentElement)
                               .getPropertyValue('--primary-color');
    }
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
    heroNav.appendChild(dot);
  });
}

// Show next slide automatically
function showNextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

// Initialize slider
createNavigationDots();
showSlide(currentSlide);

// Set interval to change slide every 4000ms
setInterval(showNextSlide, 4000);
