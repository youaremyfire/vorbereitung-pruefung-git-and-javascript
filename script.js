const circle = document.querySelector("#circ")
 let dy = 0
 let dx = 0


function start() { 
    const svg = document.querySelector("svg")
    for (let i = 0; i < 10; i= i +2){
        for (let j = 0; j < 10; j = j + 2){    
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
            rect.setAttribute("x", i *10)
            rect.setAttribute("y", j*10)
            rect.setAttribute("width", 10)
            rect.setAttribute("height", 10)
            rect.setAttribute("fill", "black")
            svg.appendChild(rect)
            
        }
    }
    

dx = 1

    window.requestAnimationFrame(update)
}

function update() {
    if ( dy < 2.5) {
        dy = dy + 0.05 
    }

let cy = parseFloat (circle.getAttribute( "cy" ))

if (cy > 100){
    dy = dy * (-1)
}

    cy = cy + dy
    circle.setAttribute("cy", cy)



    // seitwärts Bewegung
    let cx = parseFloat (circle.getAttribute( "cx" ))

    if (cx > 100){
        dx = dx * (-1)
    } else if (cx < 0) {
        dx = dx * (-1)
    }

    cx = cx + dx
    circle.setAttribute("cx", cx)

    window.requestAnimationFrame(update)
}