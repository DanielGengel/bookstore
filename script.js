let books = JSON.parse(localStorage.getItem("books")) || defaultBooks;
const container = document.getElementById("book-container");

function renderBooks() {
    container.innerHTML = "";

    for (let index = 0; index < books.length; index++) {
        let book = books[index];

        container.innerHTML += `
            <div class="book-card">
 ${book.name}<br>
      ${book.author}<br>  
       ${book.liked}<br>
        ${book.likes}<br>
         ${book.price}<br>
          ${book.publishedYear}<br>
           ${book.genre}<br>



      



        `;
    }
}
