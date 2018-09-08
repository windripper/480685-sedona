"use strict";

var button = document.querySelector(".button-search-form-show");
var form = document.querySelector(".search-form");
var inputIn = form.querySelector(".appointment-item-in input");
var inputOut = form.querySelector(".appointment-item-out input");

var minusAdult = form.querySelector(".button-adults-minus");
var plusAdult = form.querySelector(".button-adults-plus");
var minusChild = form.querySelector(".button-children-minus");
var plusChild = form.querySelector(".button-children-plus");
var numAdult = form.querySelector("#search-form-adults").value;
var numChild = form.querySelector("#search-form-children").value;

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("numAdult");
  storage = localStorage.getItem("numChild");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (form.classList.contains("search-form-show")) {
    form.classList.remove("search-form-error");
    form.classList.remove("search-form-show");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-show");
  }

  if (storage) {
    numAdult.value = storage;
    numChild.value = storage;
  }

  setTimeout(function () {
    form.classList.toggle("search-form-show");
  }, 300);
});

form.addEventListener("submit", function (evt) {
  if (!inputIn.value || !inputOut.value) {
    evt.preventDefault();
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("numAdult", numAdult.value);
      localStorage.setItem("numChild", numChild.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("search-form-show")) {
      form.classList.remove("search-form-show");
    }
  }
});

minusAdult.addEventListener('click', function (event) {
  event.preventDefault();
  if (numAdult > 0) {
    numAdult--;
    document.querySelector('#search-form-adults').value = numAdult;
  }
});

plusAdult.addEventListener('click', function (event) {
  event.preventDefault();
  numAdult++;
  document.querySelector('#search-form-adults').value = numAdult;
});

minusChild.addEventListener('click', function (event) {
  event.preventDefault();
  if (numChild > 0) {
    numChild--;
    document.querySelector('#search-form-children').value = numChild;
  }
});

plusChild.addEventListener('click', function (event) {
  event.preventDefault();
  numChild++;
  document.querySelector('#search-form-children').value = numChild;
});
