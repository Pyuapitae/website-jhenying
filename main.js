document.addEventListener("DOMContentLoaded", () => {
  /* SHOWCASE LOGIC */
  const items = document.querySelectorAll('.item');
  const preview = document.getElementById('preview-img');

  let activeItem = document.querySelector('.item.active');

  function changeImage(item) {
    const newImg = item.dataset.image;
    preview.style.opacity = 0;

    setTimeout(() => {
      preview.src = newImg;
      preview.style.opacity = 1;
    }, 150);
  }

  items.forEach(item => {
    item.addEventListener('mouseenter', () => changeImage(item));

    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeItem = item;
      changeImage(item);
    });

    item.addEventListener('mouseleave', () => changeImage(activeItem));
  });

  /* SWIPER INIT — properly closed */
  const gallerySwiper = new Swiper(".gallerySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
      el: ".gallerySwiper .swiper-pagination",
      clickable: true,
    }
  });

const works = document.querySelectorAll('.work1, .work2, .work3, .work4');

// Make work2 active on load
let activeWork = document.querySelector('.work2');
activeWork.classList.add('active');

works.forEach(work => {
    work.addEventListener('mouseenter', () => {
        works.forEach(w => w.classList.remove('active'));
        work.classList.add('active');
        activeWork = work; // update the last active
    });
});


});


//   // ✅ PRELOAD (single system only)
// const imageSources = [
//   "age-a-way-of-living.jpg",
//   "aged-season.jpg",
//   "branding-work-organize.jpg",
//   "eat-bread.jpg",
//   "event-work-organize.jpg",
//   "house-cookie.png",
//   "illustration-work-organize.jpg",
//   "koou-coffee.jpg",
//   "landing.jpg",
//   "packing-work-organize.jpg",
//   "pony-up-the-money.jpg",
//   "sitting-cookie.png",
//   "squrrle-cookie.png",
//   "sweet-2020.jpg",
//   "temple-cookie.png",
// ];

// let loadedImages = 0;

// function preloadImages(images, callback) {
//   images.forEach(src => {
//     const img = new Image();
//     img.src = src;

//     img.onload = img.onerror = () => {
//       loadedImages++;
//       if (loadedImages === images.length) {
//         callback();
//       }
//     };
//   });
// }

// // ✅ Run once
// preloadImages(imageSources, () => {
//   const loader = document.getElementById("loader");

//   loader.style.opacity = 0;

//   loader.addEventListener("transitionend", () => {
//     loader.style.display = "none";
//   });
// });
  