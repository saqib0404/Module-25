// Option 1
function makeBlue() {
    document.body.style.backgroundColor = "rgb(71, 71, 143)"
}

// Option 2
const steelblueButton = document.getElementById("steelblue-btn");
steelblueButton.onclick = makeSteelblue;

function makeSteelblue() {
    document.body.style.backgroundColor = "steelblue";
}

// Option 3
const grayButton = document.getElementById("gray-btn");
grayButton.onclick = function makeGray() {
    document.body.style.backgroundColor = "gray";
}

// Option 4
const pinkButton = document.getElementById('pink-btn');
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "pink";
});

// Option 4.5
document.getElementById('golden-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = "goldenrod";
});
