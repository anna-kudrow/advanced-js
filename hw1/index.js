// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// const musicCollection = [
//   {
//     title: "Oops!… I Did It Again",
//     artist: "Britnie Spirs",
//     year: 2000,
//   },
//   {
//     title: "Пятница",
//     artist: "5'nizza",
//     year: 2003,
//   },
//   {
//     title: "After Hours",
//     artist: "The Weekend",
//     year: 2020,
//   },
// ];

// musicCollection[Symbol.iterator] = function () {
//   return {
//     current: 0,
//     to: this.length,
//     next() {
//       return this.current < this.to
//         ? { done: false, value: musicCollection[this.current++] }
//         : { done: true };
//     },
//   };
// };

// for (let album of musicCollection) {
//   console.log(
//     `Name of album: ${album.title}, artist: ${album.artist} made in ${album.year}`
//   );
// }

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const kitcheners = new Map();
kitcheners
  .set("Victor", "pizza-maker")
  .set("Olga", "sushi-maker")
  .set("Dmitrii", "confectioner");

const orderList = new Map();
const orderForKitcheners = new Map();

function createOdrer(clientName, table, order) {
  return orderList.set(
    { client: clientName, tableNo: table },
    order.split(",")
  );
}

createOdrer("Anna", 4, "pizza oregano, sushi banana");
createOdrer("Gala", 2, "desert fondan");
createOdrer("Maria", 1, "desert marmalade");

function giveOrderToKitchen() {
  const orders = orderList.values();
  for (const order of orders) {
    for (const dish of order) {
      if (dish.includes("pizza")) {
        orderForKitcheners.set("Victor", dish);
      } else if (dish.includes("sushi")) {
        orderForKitcheners.set("Olga", dish);
      } else if (dish.includes("desert"))
        orderForKitcheners.set("Dmitrii", dish);
    }
    return orderForKitcheners;
  }
}

console.log(giveOrderToKitchen());
