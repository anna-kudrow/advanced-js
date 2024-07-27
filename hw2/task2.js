// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const inputReviewEl = document.querySelector(".review__input");
const sendReviewBtn = document.querySelector(".review__button");
const reviewsBox = document.querySelector(".reviews__box");

function loadInitialReviews(data) {
  data.map((el) => {
    const reviewsArr = el.reviews;
    reviewsArr.map((e) => {
      reviewsBox.insertAdjacentHTML("beforeend", `<li>${e.text}</li>`);
    });
  });
}

loadInitialReviews(initialData);

sendReviewBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const input = inputReviewEl.value;
  if (input.length < 10 || input.length > 500) {
    inputReviewEl.value = "";
    throw new Error(
      alert(
        "Lenght of a review must be not less than 50 and not longer than 500 symbols."
      )
    );
  } else {
    reviewsBox.insertAdjacentHTML("beforeend", `<li>${input}</li>`);
  }
  //   input = "";    -  так не работат почему-то
  inputReviewEl.value = "";
});
