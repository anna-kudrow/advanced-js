// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title))
      throw new Error(`${title} book is already in the library!`);
    this.#books.push(title);
    return this.#books;
  }

  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error(`There is no book with ${title} name`);
    } else {
      const removingBookInd = this.#books.indexOf(title);
      return this.#books.splice(removingBookInd, 1);
    }
  }

  hasBook(title) {
    return this.#books.includes(title) ? true : false;
  }

  constructor(books) {
    const setBooks = new Set(books);
    if (books.length == Array.from(setBooks).length) {
      this.#books = books;
    } else {
      throw new Error("There are dowble books");
    }
  }
}

const lib = new Library(["horse", "dorian", "wind", "jim beam"]);

lib.removeBook("wind");

console.log(lib.allBooks);

console.log(lib.allBooks);

lib.addBook("lolita");

console.log(lib.hasBook("lolita"));

console.log(lib.allBooks);
