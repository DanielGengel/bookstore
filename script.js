let books = JSON.parse(localStorage.getItem("books")) || defaultBooks;
const container = document.getElementById("book-container");

function renderBooks() {
    container.innerHTML = "";

    
    for (let index = 0; index < books.length; index++) {
        let book = books[index];
let html = "";
        html += `
            <div class="book-card">
 ${book.name}<br>
      ${book.author}<br>  
       ${book.liked}<br>
        ${book.likes}<br>
         ${book.price}<br>
          ${book.publishedYear}<br>
           ${book.genre}<br>


           <h3>Kommentare:</h3>

`;


// Kommentare rendern
        for (let i = 0; i < book.comments.length; i++) {

            let comment = book.comments[i];

            html += `
                <p>
                    <b>${comment.name}</b>: 
                    ${comment.comment}
                </p>
            `;
        }

        html += `</div>`;

        container.innerHTML += html;
}

}



