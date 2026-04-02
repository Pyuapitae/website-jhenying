document.addEventListener("DOMContentLoaded", () => {

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

        // Hover preview
        item.addEventListener('mouseenter', () => {
            changeImage(item);
        });

        // Click to set active
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            activeItem = item;
            changeImage(item);
        });

        // Leave → return to active
        item.addEventListener('mouseleave', () => {
            changeImage(activeItem);
        });

    });


    preview.style.opacity = 1;
    setTimeout(() => {
        preview.src = newImg;
        preview.style.opacity = 2;
    }, 200);


});

// helped by copilet
