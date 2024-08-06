// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const prodNameInput = document.querySelector("#prod-name");
const prodReviewInput = document.querySelector("#prod-review-text");
const addBtn = document.querySelector(".add-button");

function createIdGenerator() {
  let idNumber = 0;
  return function () {
    idNumber += 1;
    return idNumber;
  };
}

const reviewId = createIdGenerator();
const reviewsIds = [];

function addReview(prodName, review) {
  const newId = reviewId();
  reviewsIds.push(newId);
  localStorage.setItem(
    `${newId}`,
    `product name: ${prodName}, review: ${review}`
  );
}

addBtn.addEventListener("click", () => {
  addReview(prodNameInput.value, prodReviewInput.value);
  prodNameInput.value = "";
  prodReviewInput.value = "";
});

console.log(reviewsIds);
