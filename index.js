// html elements
const inputEl = document.getElementById("unit-input")
const buttonEl = document.getElementById("convert-btn")
const inputVals = document.querySelectorAll(".units-input")


const lengthM = document.getElementById("length-m")
const lengthF = document.getElementById("length-f")
const volumeL = document.getElementById("volume-l")
const volumeG = document.getElementById("volume-g")
const massK = document.getElementById("mass-k")
const massP = document.getElementById("mass-p")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert(){
    let value = Number(inputEl.value)
    
    inputVals.forEach((element) =>{
        element.textContent = value
    })

    lengthM.textContent = (Number(value)*3.281).toFixed(3)
    lengthF.textContent = (Number(value)/3.281).toFixed(3)

    volumeG.textContent = (Number(value)*0.264).toFixed(3)
    volumeL.textContent = (Number(value)/0.264).toFixed(3)

    massK.textContent = (Number(value)*2.204).toFixed(3)
    massP.textContent = (Number(value)/2.204).toFixed(3)

}

buttonEl.addEventListener("click", convert)