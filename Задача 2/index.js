const heights = [164, 157, 160, 143, 170];

const heightList = document.querySelector(".heightList");
const addHeight = document.querySelector(".addHeight");
const filterHeight = document.querySelector(".filterHeight");

let minHeight = 0;

function createHeight(height) {
    const li = document.createElement("li");
    li.textContent = height;
    heightList.appendChild(li);
}

function showHeights(list) {
    heightList.innerHTML = "";
    list.forEach(createHeight);
}

showHeights(heights);

addHeight.addEventListener("click", () => {
    const height = prompt("Введите рост ученика:");

    if (!height || !height.trim()) {
        alert("Рост не введён!");
        return;
    }

    const number = +height;

    if (!isFinite(number) || number <= 0) {
        alert("Введите правильный рост!");
        return;
    }

    heights.push(number);

    if (number >= minHeight) {
        createHeight(number);
    }
});

filterHeight.addEventListener("click", () => {
    const value = prompt("Введите минимальный рост:");

    if (!value || !value.trim()) {
        minHeight = 0;
        showHeights(heights);
        return;
    }

    minHeight = +value;

    if (!isFinite(minHeight)) {
        minHeight = 0;
        showHeights(heights);
        return;
    }

    const filteredHeights = heights.filter(height => height >= minHeight);

    showHeights(filteredHeights);
});
