function buildMenu(){
    const all = document.createElement("div")
    all.classList.add("container")

    const foods = document.createElement("div")
    foods.classList.add("foods")

    const food1 = document.createElement("div")
    food1.classList.add("food")
    const image1 = document.createElement("img")
    image1.src = "chicken.jpeg";
    food1.appendChild(image1);
    const title1 = document.createElement("h1")
    title1.innerHTML = "Cursed chicken"
    food1.appendChild(title1)
    foods.appendChild(food1)

    const food2 = document.createElement("div")
    food2.classList.add("food")
    const image2 = document.createElement("img")
    image2.src = "fish.jpg"
    food2.appendChild(image2)
    const title2 = document.createElement("h1")
    title2.innerHTML = "Cursed fish"
    food2.appendChild(title2)
    foods.appendChild(food2)

    const food3 = document.createElement("div")
    food3.classList.add("food")
    const image3 = document.createElement("img")
    image3.src = "meatball.jpg"
    food3.appendChild(image3)
    const title3 = document.createElement("h1")
    title3.innerHTML = "Cursed meatball"
    food3.appendChild(title3)
    foods.appendChild(food3)

    all.appendChild(foods);
    return all
}
export{buildMenu}