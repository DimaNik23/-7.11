
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
