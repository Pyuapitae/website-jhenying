document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------
     SHOWCASE — HOVER + CLICK LOGIC (your original)
  -------------------------------------------- */
/* SHOWCASE — HOVER LOCK LOGIC */
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
  item.addEventListener('mouseenter', () => {
    stopAuto(); // pause auto-cycle

    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    activeItem = item;

    changeImage(item);
  });
});



  /* -------------------------------------------
     SHOWCASE — AUTO‑CYCLE LOGIC (fixed + working)
  -------------------------------------------- */

  const displayItems = document.querySelectorAll(".displaytext .item");
  const displayText = document.querySelector(".displaytext");

  if (displayItems.length) {
    let index = [...displayItems].findIndex(item => item.classList.contains("active"));
    if (index === -1) index = 0;

    let interval;

    function activateItem(i) {
        displayItems.forEach(item => item.classList.remove("active"));
        const current = displayItems[i];
        current.classList.add("active");

        preview.style.opacity = 0;
        setTimeout(() => {
            preview.src = current.dataset.image;
            preview.style.opacity = 1;
        }, 200);
    }

    function startAuto() {
        interval = setInterval(() => {
            index = (index + 1) % displayItems.length;
            activateItem(index);
        }, 1800); // 1.8 second
    }

    function stopAuto() {
        clearInterval(interval);
    }

    // Start auto‑cycle
    activateItem(index);
    startAuto();

    // Pause on hover
    displayText.addEventListener("mouseenter", stopAuto);

    // Resume on leave
    displayText.addEventListener("mouseleave", () => {
        index = [...displayItems].findIndex(item => item.classList.contains("active"));
        if (index === -1) index = 0;
        startAuto();
    });

    // Manual hover overrides auto
    displayItems.forEach((item, i) => {
        item.addEventListener("mouseenter", () => {
            stopAuto();
            index = i;
            activateItem(i);
        });
    });
  }


  /* -------------------------------------------
     SWIPER INIT
  -------------------------------------------- */
  const gallerySwiper = new Swiper(".gallerySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",

    autoplay: {
    delay: 3000,               // ← 3 seconds
    disableOnInteraction: false
  },

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


  /* -------------------------------------------
     WORK HOVER LOGIC
  -------------------------------------------- */
  const works = document.querySelectorAll('.work1, .work2, .work3, .work4');

  let activeWork = document.querySelector('.work2');
  activeWork.classList.add('active');

  works.forEach(work => {
      work.addEventListener('mouseenter', () => {
          works.forEach(w => w.classList.remove('active'));
          work.classList.add('active');
          activeWork = work;
      });
  });


  /* -------------------------------------------
     CURSOR LOGIC — LANDING
  -------------------------------------------- */
  const landing = document.querySelector(".landing");
  const cursor = document.querySelector(".cursor");

  landing.addEventListener("mousemove", (e) => {
    cursor.style.opacity = 1;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  landing.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });

  landing.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => cursor.classList.add("grow"));
    link.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
  });


  /* -------------------------------------------
     CURSOR LOGIC — ABOUT
  -------------------------------------------- */
  const about = document.querySelector(".about");
  const cursor2 = document.querySelector(".cursor2");

  about.addEventListener("mousemove", (e) => {
    cursor2.style.opacity = 1;
    cursor2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  about.addEventListener("mouseleave", () => {
    cursor2.style.opacity = 0;
  });

  about.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => cursor2.classList.add("grow"));
    link.addEventListener("mouseleave", () => cursor2.classList.remove("grow"));
  });

});


/* -------------------------------------------
   PRELOAD (your original, untouched)
-------------------------------------------- */
const imageSources = [
"public/homepage-images/8.png",
"public/homepage-images/9.png",
"public/homepage-images/10.png",
"public/homepage-images/13.png",
"public/homepage-images/14.png",
"public/homepage-images/16.png",
"public/homepage-images/17.png",
"public/homepage-images/age-a-way-of-living.jpg",
"public/homepage-images/aged-season.jpg",
"public/homepage-images/artisan-interview.jpeg",
"public/homepage-images/branding-work-organize.jpg",
"public/homepage-images/eat-bread.jpg",
"public/homepage-images/event-work-organize.jpg",
"public/homepage-images/exhibition-jhenying.jpg",
"public/homepage-images/house-cookie.png",
"public/homepage-images/illustration-work-organize.jpg",
"public/homepage-images/jhenying-about-me.jpeg",
"public/homepage-images/koou-coffee.jpg",
"public/homepage-images/landing-flash2.jpg",
"public/homepage-images/landing.jpg",
"public/homepage-images/packing-work-organize.jpg",
"public/homepage-images/paper-interview.jpeg",
"public/homepage-images/pony-up-the-money.jpg",
"public/homepage-images/sitting-cookie.png",
"public/homepage-images/spuntnik.jpeg",
"public/homepage-images/squrrle-cookie.png",
"public/homepage-images/sweet-2020.jpg",
"public/homepage-images/temple-cookie.png",
"public/homepage-images/transform-interview.jpg",
];

let loadedImages = 0;

function preloadImages(images, callback) {
  images.forEach(src => {
    const img = new Image();
    img.src = src;

    img.onload = img.onerror = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        callback();
      }
    };
  });
}

preloadImages(imageSources, () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = 0;

  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";
  });
});



