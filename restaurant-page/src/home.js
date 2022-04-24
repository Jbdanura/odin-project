const buildHome = () => {
    const all = document.createElement("div")
    all.classList.add("container")


    const body = document.createElement("div")
    body.classList.add("body")

    const logo = document.createElement("h1")
    logo.innerHTML = "Lordran Estus"
    logo.classList.add("logo")

    const description = document.createElement("p")
    description.innerHTML = "Welcome to Lordran, here you will find the best dark food from poor tormented souls"
    description.classList.add("description")

    const button = document.createElement("button")
    button.innerHTML = "See menu"
    button.classList.add("btn-menu")

    body.appendChild(logo)
    body.appendChild(description)
    body.appendChild(button)

    all.appendChild(body);

    return all;
}

export{buildHome};