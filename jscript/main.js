let container = document.querySelector(".container");
console.log(container);

for (let i = 1; i <= 100; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        let variant = "fizzbuzz";
        container.innerHTML += `<div class="box box--${variant}">${variant}</div>`;
        console.log(variant)
    }

    else if (i % 5 === 0) {
        let variant = "buzz";
        container.innerHTML += `<div class="box box--${variant}">${variant}</div>`;
        console.log(variant)
    }

    else if (i % 3 === 0) {
        let variant = "fizz";
        container.innerHTML += `<div class="box box--${variant}">${variant}</div>`;
        console.log(variant)
    }

    else {
        container.innerHTML += `<div class="box">${i}</div>`;
        console.log(i)
    }

}

var r = document.querySelector(":root");
console.log(r);

let moon = document.getElementById("dark-mode");

let darkModeStatus = true;

moon.addEventListener("click", function () {
    if (darkModeStatus) {
        r.style.setProperty("--background-body", "white");
        r.style.setProperty("--body-text", "black");
        moon.classList.remove("fa-moon");
        moon.classList.add("fa-sun");
        darkModeStatus = false;
    } else {
        r.style.setProperty("--background-body", "black");
        r.style.setProperty("--body-text", "white");
        moon.classList.remove("fa-sun");
        moon.classList.add("fa-moon");
        darkModeStatus = true;
    }
});
