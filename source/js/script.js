var navigation = document.querySelector(".navigation");
var button = navigation.querySelector(".navigation__button");

navigation.classList.remove("navigation--nojs");
navigation.classList.add("navigation--closed");

button.addEventListener('click', function() {
  navigation.classList.toggle("navigation--closed");
});
