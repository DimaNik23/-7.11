
const books = [
    "Мастер и Маргарита",
    "Гарри Поттер",
    "Над пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"
];

const bookList = document.getElementById("bookList");

function showBooks(foundIndex = -1) {
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}) ${book}`;

        if (index === foundIndex) {
            li.classList.add("found");
        }

        bookList.appendChild(li);
    });
}

document.getElementById("addBook").addEventListener("click", () => {
    const name = prompt("Введите название книги:");

    if (!name || !name.trim()) {
        alert("Название книги не введено!");
        return;
    }

    books.push(name.trim());
    showBooks();
});

document.getElementById("searchBook").addEventListener("click", () => {
    const name = prompt("Введите название книги для поиска:");

    const foundIndex = name && name.trim()
        ? books.findIndex(book => book.toLowerCase().includes(name.trim().toLowerCase()))
        : -1;

    showBooks(foundIndex);

    if (foundIndex === -1) {
        alert("Книга не найдена!");
    }
});

showBooks();
