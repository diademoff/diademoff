var elements = [
    document.getElementById('title'),
    document.getElementById('skills'),
    document.getElementById('projects'),
    document.getElementsByClassName('subtitle')[0]
]

elements.forEach(e => {
    e.style.opacity = '1';
});

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomString(length) {
    var result = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        var n = getRandomNum(0, chars.length);
        n = Math.floor(n);
        result += chars[n];
    }
    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function animateElementText(element, content) {
    var text = content;
    var textStrings = []

    for (let i = 0; i < text.length - 1; i++) {
        var variants = Math.round(getRandomNum(1, 3));
        for (let j = 0; j < variants; j++) {
            var resString = text.substring(0, i) + getRandomString(1);
            textStrings.push(resString);
        }
    }
    textStrings.push(text);
    for (let i = 0; i < textStrings.length; i++) {
        const txt = textStrings[i];
        sleep(i * 75).then(() => {
            element.textContent = txt;
        });
    }
}

var title = document.querySelectorAll("#title h1")[0];
var content = title.textContent;

// Animation is disabled:
// animateElementText(title, content);