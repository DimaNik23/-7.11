
const heights = [164, 157, 160, 143, 170];

const heightList = document.getElementById("heightList");

function showHeights(list) {
    heightList.innerHTML = "";

    list.forEach(height => {
        const li = document.createElement("li");
        li.textContent = height;
        heightList.appendChild(li);
    });
}

showHeights(heights);

document.getElementById("addHeight").addEventListener("click", () => {
    const height = prompt("Введите рост ученика:");

    if (!height || !height.trim()) {
        alert("Рост не введён!");
        return;
    }

    const number = Number(height);

    if (isNaN(number) || number <= 0) {
        alert("Введите правильный рост!");
        return;
    }

    heights.push(number);
    showHeights(heights);
});
