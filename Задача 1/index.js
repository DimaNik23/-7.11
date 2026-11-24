const books = [
    "Мастер и Маргарита",
    "Гарри Поттер",
    "Над пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"
];

const bookList = document.querySelector(".bookList");
const addBook = document.querySelector(".addBook");
const searchBook = document.querySelector(".searchBook");

function createBook(book, index) {
    const li = document.createElement("li");
    li.textContent = `${index + 1}) ${book}`;
    bookList.appendChild(li);
}

books.forEach(createBook);

addBook.addEventListener("click", () => {
    const name = prompt("Введите название книги:");

    if (!name || !name.trim()) {
        alert("Название книги не введено!");
        return;
    }

    books.push(name.trim());
    createBook(name.trim(), books.length - 1);
});

searchBook.addEventListener("click", () => {
    const name = prompt("Введите название книги для поиска:");
    const items = document.querySelectorAll(".bookList li");
    const search = name ? name.trim().toLowerCase() : "";

    const results = Array.from(items).map((item, index) => {
        const found = search !== "" && books[index].toLowerCase().includes(search);

        item.classList.toggle("found", found);

        return found;
    });

    if (!results.includes(true)) {
        alert("Книга не найдена!");
    }
});
