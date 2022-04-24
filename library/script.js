class book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let library = []





const bookContainer = document.querySelector(".book-container");
const form = document.querySelector("form");

form.addEventListener("submit", event => {

    event.preventDefault();
    var ftitle = form.elements["ftitle"].value
    var fauthor = form.elements["fauthor"].value
    var fpages = form.elements["fpages"].value
    var fread = form.elements["fread"].value
    var newBook = new book(ftitle,fauthor,fpages,fread)
    library.push(newBook)
    
    refresh()
})
function refresh(){
    var child = bookContainer.lastElementChild;
    while(child){
        bookContainer.removeChild(child)
        child = bookContainer.lastElementChild;
    }
    for(let i = library.length-1; i >= 0; i--){
            console.log("e")
            let title = library[i].title;
            let author = library[i].author;
            let pages = library[i].pages;
            let read = library[i].read;
            let readS;
            if (read){
                readS = "Read";
            } else {
                readS = "Not read";
            }

            let div = document.createElement("div");
            div.classList.add("book");
            let pTitle = document.createElement("p");
            pTitle.innerHTML = title;
            pTitle.classList.add("book-name");
            let pAuthor = document.createElement("p");
            pAuthor.innerHTML = author;
            pAuthor.classList.add("book-author");
            let pPages = document.createElement("p");
            pPages.innerHTML = pages.toString();
            pPages.classList.add("book-pages");
            let pRead = document.createElement("p");
            pRead.innerHTML = readS
            pRead.classList.add("book-read");
            let button = document.createElement("button");
            button.innerHTML = "Read/not read";
            button.classList.add("book-button");
            button.addEventListener("click",event=>{
                library[i].read = !library[i].read;
                if (library[i].read) {
                    event.target.parentNode.childNodes[3].innerHTML = "Read"
                } else {
                    event.target.parentNode.childNodes[3].innerHTML = "Not read"
                }
            })
            let del = document.createElement("button")
            del.classList.add("del")
            del.innerHTML = "Delete"
            var deleted = false
            del.addEventListener("click", event=>{
                library.splice(i,1)
                div.parentNode.removeChild(div);
                console.log(library)
                return;
            })
            
            div.appendChild(pTitle);
            div.appendChild(pAuthor);
            div.appendChild(pPages);
            div.appendChild(pRead);
            div.appendChild(button)
            div.appendChild(del)
            bookContainer.appendChild(div);
        }


}
