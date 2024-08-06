"use strict";

// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
var prodNameInput = document.querySelector("#prod-name");
var prodReviewInput = document.querySelector("#prod-review-text");
var addBtn = document.querySelector(".add-button");

function createIdGenerator() {
  var idNumber = 0;
  return function () {
    idNumber += 1;
    return idNumber;
  };
}

var reviewId = createIdGenerator();
var reviewsIds = [];

function addReview(prodName, review) {
  var newId = reviewId();
  reviewsIds.push(newId);
  localStorage.setItem("".concat(newId), "product name: ".concat(prodName, ", review: ").concat(review));
}

addBtn.addEventListener("click", function () {
  addReview(prodNameInput.value, prodReviewInput.value);
  prodNameInput.value = "";
  prodReviewInput.value = "";
});
console.log(reviewsIds);