function initSwiper() {
  new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.gallery-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
}

function initLightbox() {
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    keyboardNavigation: true,
    closeButton: true
  });
}

const galleryData = {
  galleryItems: [
    {src: "static/1.jpg", alt: "Projekt 1"},
    {src: "static/2.jpg", alt: "Projekt 2"},
    {src: "static/3.jpg", alt: "Projekt 3"},
    {src: "static/4.jpg", alt: "Projekt 4"},
    {src: "static/5.jpg", alt: "Projekt 5"},
    {src: "static/6.jpg", alt: "Projekt 6"},
    {src: "static/7.jpg", alt: "Projekt 7"},
    {src: "static/8.jpg", alt: "Projekt 8"},
    {src: "static/9.jpg", alt: "Projekt 9"},
    {src: "static/10.jpg", alt: "Projekt 10"},
    {src: "static/11.jpg", alt: "Projekt 11"},
    {src: "static/12.jpg", alt: "Projekt 12"}
  ]
}

document.addEventListener('DOMContentLoaded', function() {
	renderGallery(galleryData.galleryItems);
	initSwiper();
	initLightbox();
});


function renderGallery(items) {
  const slider = document.getElementById('slider');
  
  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <a href="${item.src}" class="glightbox" data-gallery="projects">
        <img src="${item.src}" alt="${item.alt}">
      </a>
    `;
    slider.appendChild(slide);
  });
}

