const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png"
]

function backgroundset() {
    const printimg = images[Math.floor(Math.random() * images.length)]
    const bgimg = document.createElement("img")
    bgimg.src = `img/${printimg}`
    bgimg.classList.add('bground');
    document.body.appendChild(bgimg)
}

backgroundset()

setInterval(backgroundset, 300000);