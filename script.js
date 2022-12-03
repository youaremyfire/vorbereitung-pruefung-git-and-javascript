function start() {
    window.requestAnimationFrame(update)
}

function update() {
    console.log("Hello World")

    window.requestAnimationFrame(update)
}