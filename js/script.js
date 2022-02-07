const titleCont=document.getElementById("title")

const authorCont=document.getElementById("author")


const isbnCont=document.getElementById("isbn")

const mySubmit=document.getElementById("input")

const bookList=document.getElementById("book-list")










function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;


};

Book.prototype.addBook=function(book){
    // console.log(book)
    const tableRow=document.createElement("tr");

    tableRow.innerHTML=`<td>${book.title}</td><td>${book.author}</td> <td>${book.isbn}</td>
    <td><i class="fas fa-trash-alt"></i></td><td><i class="far fa-edit"></i></td>`

    bookList.appendChild(tableRow);


    
    titleCont.value=""

    isbnCont.value=""

    authorCont.value=""



const btnDelete=document.querySelector(".fa-trash-alt");

// const book=new Book(titleCont.value,authorCont.value,isbnCont.value)



book.deleteBook(btnDelete, )

    // console.log(btnDelete)

    
}



Book.prototype.deleteBook=function(button, book){
button.addEventListener("click", (e)=>{

    book = e.target.parentElement.parentElement;
    book.remove();


})
}


/*
function onDelete(deleteButton){
    deleteButton.addEventListener("click",(e)=>{
        const tr = e.target.parentElement.parentElement;
        tr.remove()
    }
    )
    */
    

    
//}

// static clearFields(){
//     document.querySelector("title").value="";

//     document.querySelector("author").value="";

//     document.querySelector("isbn").value="";

// }

mySubmit.addEventListener("click",
(event)=>{event.preventDefault()
const book=new Book(titleCont.value,authorCont.value,isbnCont.value)
book.addBook(book);






// UIEvent.clearFields();

})

cocument.querySelector("book-list").addEventListener("click",(e)=>{
btnDelete.deleteBook(e.target)
});
// const book=new Book("title","auther","isbn");

// function Interface(){

// }
// Interface.prototype.addBook=function(book){
//     // <tbody id="book-list"></tbody>
//     // 
//     const mybooklist=document.getElementById("book-list")

// const tableRow=document.createElement("tr");

// tableRow.innerHTML=`<td>Dolls</td><td>Rose</td> <td>33</td>`



// mybooklist.appendChild(tableRow);

   
// }
// const myDetails=new Interface()
// myDetails.addBook()