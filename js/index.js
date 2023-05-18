import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ']

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const btnValue = charKeyBtn.dataset.value
        input.value += btnValue
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    buttonCopy.innerText = 'Copy'
    buttonCopy.classList.remove("success")
    input.focus()
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)