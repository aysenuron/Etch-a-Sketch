const btn = document.querySelector(".btn");

const container = document.querySelector(".container");

function createDiv (number) {

    container.innerHTML = "";

    const blockSize = 100 / number;

    for (i = 0; i < number * number; i++) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("div-block");
        newDiv.style.width = `${blockSize}%`;
        newDiv.style.height = `${blockSize}%`;
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", function() {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            newDiv.style.backgroundColor = randomColor;
        });
        
    }
}

btn.addEventListener("click", function() {
    let question = prompt("Write a number. (Max. 100)");
    if (question > 100) {alert("Invalid size! Please choose a number less than 100.");
        return;
    }
    createDiv (question);
});

