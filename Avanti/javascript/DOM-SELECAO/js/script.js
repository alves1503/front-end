//Seleção por ID

const content = document.getElementById("content");

console.log("content",content)

content.innerHTML = `<p>Paragrafo de texto</p>`
content.style.backgroundColor = "red"
content.style.fontSize = "50px"


//Seleção por classe


const classText = document.getElementsByClassName("text")
console.log("classText",classText)


for(text of classText) {
    text.style.color = "blue"
}



//Seleção por tags


const titles = document.getElementsByTagName("h2")
console.log("titles",titles)

for(title of titles) {
    title.style.color = "red"
}   


//Query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = "Um novo paragrafo"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend","<p> Outro paragrafo criado dinamicamente </p>")


//query selectorAll

const links = document.querySelectorAll("#links a")

console.log("links",links)


for(link of links) {
    link.classList.add("feature-links")
    console.log(link.getAtribute("href"))
    link.target = "_blank"
    link.title = link.getAtribute("href").slice(0,-5)
}

//Navegação pelo Dom

const lista = document.querySelectorAll("#links ul")

lista.parentNode.style.backgroundColor = "blue"

console.groupCollapsed("Qual elemento",lista.parentNode)

lista.children

for(list of lista.children){
    list.style.fontSize = "50px"
}   