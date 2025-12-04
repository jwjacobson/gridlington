const NUM_SQUARES = 25;
const SQUARES = document.querySelectorAll(".square")


function changeColor (square) {
    square.style.backgroundColor = "#f582ae";
}
function revertColor (square) {
    square.style.backgroundColor = "#f3d2c1"; 
}

function chooseSquare() {
    let prev_idx;
    setInterval(() => {
        if (prev_idx !== undefined) {
            revertColor(SQUARES[prev_idx])
        }
        current_idx = Math.floor(Math.random() * NUM_SQUARES);
        changeColor(SQUARES[current_idx]);
        prev_idx = current_idx;
    }, 200);
}

chooseSquare()