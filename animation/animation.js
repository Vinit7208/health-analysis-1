const items = document.querySelectorAll('.carousel-item');
let current = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active', 'left', 'right');
    
    if (index === current) {
      item.classList.add('active');
    } else if (index === (current - 1 + items.length) % items.length) {
      item.classList.add('left');
    } else if (index === (current + 1) % items.length) {
      item.classList.add('right');
    }
  });
}

// Auto-slide every 3 seconds
setInterval(() => {
  current = (current + 1) % items.length;
  updateCarousel();
}, 3000);

// Initialize
updateCarousel();