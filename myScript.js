

/* product image */

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

  if (n > product_image.length) {
    product_index = 1;
  }
  if (n < 1) {
    product_index = product_image.length;
  }

  for (i = 0; i < product_image.length; i++) {
    product_image[i].classList.remove("active");
  }

  for (i = 0; i < thumbnailBtn.length; i++) {
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
  }

  for (let i = 0; i < lighthouse_thumbnail.length; i++) {
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



/* cart function starts here */
const itemsPrice = 125.0; /* items price */
var itemOrderCount = 0; /* number of items user wansts to add to cart */
var numberOfItemsOrdered = 0;

const itemOrderAmount = document.querySelector("#itemOrderAmount");

const cartContent = document.querySelector(".cart-con");
const emptyCart = document.querySelector(".empty-cart");

const itemsOrderedNotification = document.querySelector(".items-notification");


/* result of items calculation */
const itemsPriceResult = document.querySelector("#Items-price-result");
/* the multiplier used to calculate the price  */
const cartItemsNumber = document.querySelector("#cartItemsNumber");
const deleteBtn = document.querySelector("#delete");

/* increasing the number of items that the user want to buy */

function item_Increase_or_decrease(n) {
  itemOrderCount += n;

  if (itemOrderCount < 0) {
    itemOrderCount = 0;
  }

  itemOrderAmount.innerHTML = itemOrderCount;
}

/* the add to cart button function */
function deleteCartItem(n) {
  if (n <= 0) {
    cartContent.classList.add("d-none");
    cartContent.classList.remove("d-block");

    emptyCart.classList.add("d-block");
    emptyCart.classList.remove("d-none");

    cartItemsNumber.innerHTML = itemsPriceResult.innerHTML = 0;

    itemsOrderedNotification.classList.remove("on");
    itemsOrderedNotification.innerHTML = "";

    numberOfItemsOrdered = 0; // resets the number of ordered items counted
  } else {
    cartContent.classList.add("d-block");
    cartContent.classList.remove("d-none");

    emptyCart.classList.add("d-none");
    emptyCart.classList.remove("d-block");

    itemsOrderedNotification.classList.add("on");
  }
}

function addToCart() {
  numberOfItemsOrdered += itemOrderCount;

  cartItemsNumber.innerHTML = itemsOrderedNotification.innerHTML = numberOfItemsOrdered;

  itemsPriceResult.innerHTML = `${itemsPrice * numberOfItemsOrdered}.00`;

  // resets the add to cart number
  itemOrderCount = 0;

  itemOrderAmount.innerHTML = 0;

  // itemsOrderedNotification.innerHTML = cartItemsNumber.innerHTML;
  deleteCartItem(numberOfItemsOrdered);
}

deleteBtn.addEventListener("click", function () {
  deleteCartItem(0);
});

/* document.addEventListener('click', function (e) {
  if (!(e.target.getAttribute('class').indexOf('primary-nav')  < 0) ) {
    close_btn.click();
  }
}); */
