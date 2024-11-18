const btn = document.querySelector(".btn");

const container = document.querySelector(".container");

const color = ["red", "blue", "green", "yellow"];

function createDiv (number) {

    container.innerHTML = "";

    const blockSize = 100 / number;

    for (i = 0; i < number * number; i++) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("div-block");
        newDiv.style.width = `${blockSize}%`;
        newDiv.style.height = `${blockSize}%`;
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", function() {
            newDiv.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
        });
        
        newDiv.addEventListener("mouseout", function() {
            newDiv.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
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

