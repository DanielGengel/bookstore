let books = JSON.parse(localStorage.getItem("books")) || defaultBooks;
const container = document.getElementById("book-container");

function renderBooks() {
    container.innerHTML = "";
    let html = "";

    for (let index = 0; index < books.length; index++) {
        const bookHTML = getMainTemplate(index);
        //bookHTML += getCommentTemplate(i);

container.innerHTML += bookHTML;
    }
    

    //     for (let index = 0; index < books.length; index++) {
    //         let book = books[index];
    //         html = "";
    //         html += `
    //             <div class="book-card">

    //                 <div class="book-header">
    //                     ${book.name}
    //                 </div>

    //                 <div class="book-image">
    //                     <img src="./assets/img/book.svg" alt="${book.name}">
    //                 </div>

    //                 <div class="book-top-info">
    //                     <div class="price">
    //                         ${book.price.toFixed(2)} EUR
    //                 </div>

    //                 <div class="book-details">
    //                     <div><b>Author</b> : ${book.author}</div>
    //                     <div><b>Erscheinungsjahr</b> : ${book.publishedYear}</div>
    //                     <div><b>Genre</b> : ${book.genre}</div>
    //                 </div>

    //                 <div class="comments-section">
    //                     <h3>Kommentare:</h3>

    //                 </div>

    //             </div>

    //       ${book.author}<br>
    //        ${book.liked}<br>
    //         ${book.likes}<br>
    //          ${book.price}<br>
    //           ${book.publishedYear}<br>
    //            ${book.genre}<br>

    //            <h3>Kommentare:</h3>

    // `;

    //         // Kommentare rendern
    //         for (let i = 0; i < book.comments.length; i++) {
    //             let comment = book.comments[i];

    //             html += `
    //                 <p>
    //                     <b>${comment.name}</b>:
    //                     ${comment.comment}
    //                 </p>
    //             `;
    //         }

    //         html += `</div>`;

    //         container.innerHTML += html;
    //     }
}
