

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
var itemNumber = 0;

const itemAmountNum = document.querySelector("#itemAmountNum");

const itemsPrice = 125.0; /* items price */

const cartCon = document.querySelector(".cart-con");
const emptyCart = document.querySelector(".empty-cart");

const itemsLabel = document.querySelector(".items-label");

/* the multiplier used to calculate the price  */
const cartItemsNumber = document.querySelector("#cartItemsNumber");

/* result of items calculation */
const itemsPriceResult = document.querySelector("#Items-price-result");

const deleteBtn = document.querySelector("#delete");

/* increasing the number of items that the user want to buy */

function itemCount(n) {
  itemNumber += n;

  if (itemNumber < 0) {
    itemNumber = 0;
  }

  itemAmountNum.innerHTML = itemNumber;
}

/* the add to cart button function */
function deleteCartItem(n) {
  if (n <= 0) {
    cartCon.classList.add("d-none");
    cartCon.classList.remove("d-block");

    emptyCart.classList.add("d-block");
    emptyCart.classList.remove("d-none");

    cartItemsNumber.innerHTML = itemsPriceResult.innerHTML = 0;

    itemsLabel.classList.remove("on");
    itemsLabel.innerHTML = "";
  } else {
    cartCon.classList.add("d-block");
    cartCon.classList.remove("d-none");

    emptyCart.classList.add("d-none");
    emptyCart.classList.remove("d-block");

    itemsLabel.classList.add("on");
  }
}

function addToCart() {
  cartItemsNumber.innerHTML = Number(cartItemsNumber.innerHTML) + itemNumber;

  itemsPriceResult.innerHTML = `\$${
    itemsPrice * Number(cartItemsNumber.innerHTML)
  }.00`;

  // resets the add to cart number
  itemNumber = 0;

  itemAmountNum.innerHTML = 0;

  itemsLabel.innerHTML = cartItemsNumber.innerHTML;
  deleteCartItem(Number(cartItemsNumber.innerHTML));
}

deleteBtn.addEventListener("click", function () {
  deleteCartItem(0);
});

/* document.addEventListener('click', function (e) {
  if (!(e.target.getAttribute('class').indexOf('primary-nav')  < 0) ) {
    close_btn.click();
  }
}); */
