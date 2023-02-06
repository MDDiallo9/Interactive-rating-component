
const buttons = document.querySelectorAll(".button")
const submit = document.getElementById("submit")
let select = ""


function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('clicked');
    return select += this.innerText
}
buttons.forEach(button => button.addEventListener('click',toggleOpen))
submit.addEventListener("click",refresh)

function refresh(){
    const window = document.querySelector(".window")
    while (window.firstChild) {
        window.removeChild(window.firstChild);
    }
    console.log("submit");
    const selection = document.querySelector(".selection")
    selection.innerHTML = `You selected ${select} ouf of 5`
    selection.style = "color:var(--orange); background-color:var(--bgrey);border-radius:30px;padding:8px 0px;width:45%;font-size:12px;text-align:center"
    let img = document.createElement("img")
    img.setAttribute("src","./images/illustration-thank-you.svg")
    img.style = "width: 150px;padding:2rem"
    let h2 = document.createElement("h2")
    h2.innerHTML = "Thank you!"
    h2.style = "padding:1rem;font-size:20px"
    let text = document.createElement("div")
    text.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don't hesitate to get in touch!`
    text.classList = "text"
    text.style = "width:280px;text-align:center;font-size:14px;font-weight:400"
    window.style = "height: 320px;width: 300px;display: flex;flex-direction: column;align-items:center"
    window.appendChild(img)
    window.appendChild(selection)
    window.appendChild(h2)
    window.appendChild(text)
}