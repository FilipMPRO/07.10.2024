const body = document.querySelector("body")

const div = document.createElement("div")

div.style.width = "300px";
div.style.height = "300px";
div.style.border = "1px solid black";

body.appendChild(div)
//zad1
const p = document.createElement("p")
p.textContent="Paragraf"
div.appendChild(p)

//zad3
const but3 = document.createElement("button")
but3.textContent="Schowaj Paragraf"
but3.addEventListener("click", ()=>{
    p.style.visibility="hidden"
    but3.style.visibility="hidden"
})
div.appendChild(but3)

//zad2
const but1 = document.createElement("button")
const but2 = document.createElement("button")

but1.textContent="Zielony"
but2.textContent="Czerwony"

but1.addEventListener("click",()=>{
    div.style.backgroundColor="green"
})
but2.addEventListener("click",()=>{
    div.style.backgroundColor="red"
})
body.appendChild(but1);
body.appendChild(but2)
//zad4
const input = document.createElement("input")
const but4 = document.createElement("button")
const ul = document.createElement("ul")
but4.textContent="ADD"
but4.addEventListener("click", ()=>{
    let inputEL=document.querySelector("input").value
    let li = document.createElement("li")
    li.innerHTML = inputEL
    console.log(li);
    ul.appendChild(li)
})
body.appendChild(input)
body.appendChild(but4)
body.appendChild(ul)

//zad5
const input2 = document.createElement("input")
const but5 = document.createElement("button")
const a = document.createElement("a")
const a2= document.createElement("a")
body.append(but5)
body.append(input2)
body.append(a)

but5.textContent = "Przejdź"
but5.addEventListener("click", ()=>{

    a.href = `https://${input2.value}.com/` 
    //a.setAtribute("href",`https://${input2.value}/`)
     
     
    a.innerHTML="link"
    a.target="_blank"
    console.log(a);
})