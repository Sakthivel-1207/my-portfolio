var button = document.getElementById("Add-Popup-Button")
var txt = document.querySelector(".popup-box")
var popupbox = document.querySelector(".Popup-overlay")

button.addEventListener("click",function() {
    popupbox.style.display="block"
    txt.style.display="block"
})

var deletebutton = document.querySelector(".Delete")
var book = document.querySelector(".container")
deletebutton.addEventListener("click", function(){
    book.remove()
})
var Cancelbutton = document.getElementById("Close")
Cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupbox.style.display="none"
    txt.style.display="none"

})
var container = document.querySelector(".container")
var addbook = document.getElementById("Addbook")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("Book-description")
addbook.addEventListener("click", function(event){
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>  
    <p>${bookdescription.value}</p>
    <h5>${bookauthor.value}</h5>
    <button onclick="deletebookevent">Delete</button>`
    container.append(div)
    
})
function deletebook(){

    deletebook.addEventListener("click",function(){
        container.remove()
        
    })
}