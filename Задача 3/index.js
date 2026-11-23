
const products = [
    "Яблоки",
    "Молоко",
    "Арбуз",
    "Кофе",
    "Сахар",
    "Макароны",
    "Книга"
];

const productList = document.getElementById("productList");


function showProducts() {
    productList.innerHTML = "";

    products.sort();

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    });
}


showProducts();

document.getElementById("addProduct").addEventListener("click", () => {
    const name = prompt("Введите название товара:");

    if (!name || !name.trim()) {
        alert("Название товара не введено!");
        return;
    }

    products.push(name.trim());
    showProducts();
});
