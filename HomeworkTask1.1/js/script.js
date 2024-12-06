var sentence = document.getElementById("sentence");

function changeText(text) {
    return text.toUpperCase();
}

sentence.addEventListener("mouseover", function() {
    sentence.textContent = changeText("Deal of The Month");
});

sentence.addEventListener("mouseout", function() {
    sentence.textContent = changeText("Deal of The Day");
});

var result = sentence.textContent.toUpperCase();
sentence.textContent = result;