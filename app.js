class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


const submitButton = document.getElementById("submit-button");
class UI {

    addBookToList (book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        
        for (let item of Object.keys(book)){
            const td = document.createElement("td");
            td.innerHTML = book[item];
            row.appendChild(td);
           
            
        }
        const td = document.createElement("a");
        td.innerHTML = `<a class = "delete">X</a>`;
        row.appendChild(td);
        list.appendChild(row);
        console.log(list);
        
    }
    
    clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

    setMessage(message,className){
        const div = document.createElement("div");
        if (counter <= 1){
        div.className = `alert ${className}`;
        div.innerHTML = message;
        const form = document.getElementById("book-form");
        form.appendChild(div);
        setTimeout(function () {
            document.querySelector('.alert').remove();
            counter = 0;
          }, 2000);
        }
        else {
            return;
        }
        
    }

        deleteBook(target) {
            target.parentElement.parentElement.remove()
        }

}
let counter = 0;    
submitButton.addEventListener("click", (e)=>{
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const book = new Book(title, author, isbn);
    const ui = new UI();
    
    if(title == '' || author == '' || isbn == ''){
       counter++
       ui.setMessage("Fields can not be empty", "error");
    }
    else{
        ui.addBookToList(book); 
        ui.setMessage("Book successfully added", "success");
        ui.clearFields();
    }
    e.preventDefault()
})



document.getElementById('book-list').addEventListener('click', (e)=>{
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.setMessage("Book Removed", "success");
})

