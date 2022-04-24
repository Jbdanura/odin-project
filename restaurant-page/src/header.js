const buildHeader = () => {
    const header = document.createElement("div")
    const home = document.createElement("a")
    home.innerHTML = "Home"
    home.classList.add("home")
    home.href = "#";
    const menu = document.createElement("a")
    menu.innerHTML = "Menu"
    menu.classList.add("menu")
    menu.href = "#"
    const contact = document.createElement("a")
    contact.innerHTML = "Contact"
    contact.classList.add("contact")
    contact.href = "#"
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    header.classList.add("header")

    return header;
}

export{buildHeader}