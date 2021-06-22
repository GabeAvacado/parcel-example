function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}

function setText() {
    date = new Date();
    if (date.getHours() < 12) {
        return 'Before Noon';
    }
}

const time = getTime();
document.getElementById("time").innerText = time;

const text = setText();
document.getElementById("text").innerText = text;