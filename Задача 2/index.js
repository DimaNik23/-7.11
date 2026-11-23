
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
