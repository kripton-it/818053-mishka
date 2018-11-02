var navigation = document.querySelector(".navigation");
var button = navigation.querySelector(".navigation__button");
var weekOrder = document.querySelector(".week__order");
var goodsButtons = document.querySelectorAll(".goods__cart-button");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

navigation.classList.remove("navigation--nojs");
navigation.classList.add("navigation--closed");

button.addEventListener("click", function () {
  navigation.classList.toggle("navigation--closed");
});

if (weekOrder) {
  weekOrder.addEventListener("click", function () {
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

if (goodsButtons) {
  for (var i = 0; i < goodsButtons.length; i++) {
    goodsButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    });
  }
}

if (overlay) {
  overlay.addEventListener("click", function () {
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
