var product_index = 1;

const product_image = document.querySelectorAll(".product-img");
const thumbnailBtn = document.querySelectorAll(".thumbnail-btn");

PlusProduct = (n) => {
    showProduct((product_index += n));
};

currentProduct = (n) => {
    showProduct((product_index = n));
};

showProduct = (n) => {
    var i;

    if (n > product_image.length) { product_index = 1; }

    if (n < 1) { product_index = product_image.length; }

    for (i = 0; i < product_image.length; i++) {
        product_image[i].classList.remove("active");
        thumbnailBtn[i].classList.remove("active");
    }

    product_image[product_index - 1].classList.add("active");
    thumbnailBtn[product_index - 1].classList.add("active");
};

showProduct(product_index);




/* lighthouse slide  */

var lighthouseIndex = 1;

const lighthouse_img = document.querySelectorAll(".product-lightbox-img");
const lighthouse_thumbnail = document.querySelectorAll(".lighthouse-thumbnail");

showLighthouseSlide = (n) => {
    lighthouseSlide(lighthouseIndex += n)
}

currentLighthouseSlide = (n) => {
    lighthouseSlide(lighthouseIndex = n)
}


lighthouseSlide = (n) => {

    if (n < 1) {
        lighthouseIndex = lighthouse_img.length;
    }

    if (n > lighthouse_img.length) {
        lighthouseIndex = 1;
    }

    for (let i = 0; i < lighthouse_img.length; i++) {
        lighthouse_img[i].style.display = "none";
        lighthouse_thumbnail[i].classList.remove("active");
    }

    lighthouse_img[lighthouseIndex - 1].style.display = "block";
    lighthouse_thumbnail[lighthouseIndex - 1].classList.add("active");

}

lighthouseSlide(lighthouseIndex);


/* click event on the product slide image so the is visible  */
const lighthouseContainer = document.querySelector("#myLightBox");

for (var i = 0; i < product_image.length; i++) {
    product_image[i].addEventListener("click", function () {
        lighthouseContainer.style.display = "block";
        lighthouseSlide(lighthouseIndex = product_index);
    })
}