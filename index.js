const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const buttonCopy = document.getElementById('copyToClipboard')

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

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    resultInput.value = eval(input.value)
    resultInput.classList.remove('error')
}

buttonCopy.addEventListener('click', function () {
    if (buttonCopy.innerText === "Copy") {
        buttonCopy.innerText = "Copied!"
        buttonCopy.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    }
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#4d94ff")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4d94ff")
        main.dataset.theme = "dark"
    }
})