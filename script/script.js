let array = document.querySelectorAll(".block")
let xArr = []
let oArr = []
let winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]
let count = 0
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function() {
        count++
        if (array[i].innerHTML !== "") {
            return false
        }
        (count == 0 || count % 2 !== 0) ? array[i].innerHTML = `<p>X</p>`: array[i].innerHTML = `<p>O</p>`;
        if (array[i].innerHTML === `<p>X</p>`) {
            xArr.push(i + 1)
        } else oArr.push(i + 1)
        checkWin(xArr, oArr, (i + 1))
    })
}

function checkWin(xArr, oArr, i) {
    for (let x = 0; x < winCombinations.length; x++) {
        let winArr = winCombinations[x]
        let counterX = 0
        let counterO = 0
        if (winArr.indexOf(i) !== -1) {
            for (var k = 0; k < winArr.length; k++) {
                if (xArr.indexOf(winArr[k]) !== -1) {
                    counterX++;
                    if (counterX === 3) {
                        setTimeout(() => {
                            alert("X player Win!")
                        }, 200)
                    }
                }
                if (oArr.indexOf(winArr[k]) !== -1) {
                    counterO++;
                    if (counterO === 3) {
                        setTimeout(() => {
                            alert("O player Win!")
                        }, 200)
                    }
                }
            }
            counterX = 0;
            counterO = 0;
        }
    }
}

document.querySelector("#btn").onclick = function() {
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = ""
    }
    xArr = []
    oArr = []
}