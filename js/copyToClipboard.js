export default function (ev) {
    const buttonCopy = ev.currentTarget
    if (buttonCopy.innerText === "Copy") {
        buttonCopy.innerText = "Copied!"
        buttonCopy.classList.add("success")
        navigator.clipboard.writeText(document.querySelector('#result').value)
    }
}