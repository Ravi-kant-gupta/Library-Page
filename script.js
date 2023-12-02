let bookElement = document.getElementById("book")
let authorElement = document.getElementById("author")
let yearElement = document.getElementById("year")
let submitDataElement = document.getElementById("submitData")
let bookListElement = document.getElementById("bookList")

let listofbook=[]

function createBookList(item){
    let liElement = document.createElement("li")
    liElement.classList.add("book-list")
    liElement.id=item.id

    let spanElement1 = document.createElement("span")
    spanElement1.textContent=item.book
    liElement.appendChild(spanElement1)

    let spanElement2 = document.createElement("span")
    spanElement2.textContent=`by ${item.author}, Year: ${item.year}`
    liElement.appendChild(spanElement2)

    let deleteButton= document.createElement("button")
    deleteButton.classList.add("btn")
    deleteButton.classList.add("btn-danger")
    deleteButton.textContent="Remove"

    deleteButton.addEventListener("click",()=>{
        liElement.remove()
    })

    liElement.appendChild(deleteButton)
    bookListElement.appendChild(liElement)

}

submitDataElement.addEventListener("click",(e)=>{
    e.preventDefault()
    if(bookElement.value==="" || authorElement.value===""){
        alert("Please enter valid book details.")
    }else{
        let data = {"id":listofbook.lenght,
        "book":bookElement.value,
        "author":authorElement.value,
        "year":yearElement.value}
        listofbook.push(data)

        createBookList(data)
        bookElement.value=""
        authorElement.value=""
        yearElement.value=""
    }
})