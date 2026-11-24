const products = [
    "Яблоки",
    "Молоко",
    "Арбуз",
    "Кофе",
    "Сахар",
    "Макароны",
    "Книга"
];

const productList = document.querySelector(".productList");
const addProduct = document.querySelector(".addProduct");

function showProducts() {
    productList.innerHTML = "";

    products.sort((a, b) => a.localeCompare(b, "ru"));

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    });
}

showProducts();

addProduct.addEventListener("click", () => {
    const name = prompt("Введите название товара:");

    if (!name || !name.trim()) {
        alert("Название товара не введено!");
        return;
    }

    products.push(name.trim());
    showProducts();
});
