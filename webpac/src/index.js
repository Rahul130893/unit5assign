import {sum} from "./calc"
import "./index.css"

import todologo from "./todoimg.jpg"

console.log(sum(2,7))

const root= document.getElementById("root");

const h1= document.createElement("h1")

const image= document.createElement("img")
image.src=todologo

h1.innerText= "list1"
h1.setAttribute("class","redtext")
//h1.classList.add("redtext")
root.append(image, h1)
