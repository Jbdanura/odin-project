function buildContact(){
    const all = document.createElement("div")
    all.classList.add("container")

    const help = document.createElement("p")
    help.classList.add("help")
    help.innerHTML = "There's no one who can help you, world's tough, call your mommy maybe?"

    all.appendChild(help)

    return all
}

export{buildContact}