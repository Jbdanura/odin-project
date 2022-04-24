import { buildHome } from "./home";
import { buildMenu } from "./menu";
import { buildContact } from "./contact";
import { buildHeader} from "./header";

let content = document.querySelector("#content")
content.appendChild(buildHeader());
content.appendChild(buildHome())

let button = document.querySelector(".btn-menu")
button.addEventListener("click", function(){
    content.removeChild(document.querySelector(".container"));
    content.appendChild(buildMenu());
});

document.querySelector(".home").addEventListener("click",function(){
    content.removeChild(document.querySelector(".container"));
    content.appendChild(buildHome());
    let button = document.querySelector(".btn-menu")
    button.addEventListener("click", function(){
        content.removeChild(document.querySelector(".container"));
        content.appendChild(buildMenu());
    });
})
document.querySelector(".menu").addEventListener("click", function(){
    content.removeChild(document.querySelector(".container"));
    content.appendChild(buildMenu());
})

document.querySelector(".contact").addEventListener("click",function(){
    content.removeChild(document.querySelector(".container"));
    content.appendChild(buildContact());
})