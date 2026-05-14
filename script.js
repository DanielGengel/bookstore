let books = JSON.parse(localStorage.getItem("books")) || defaultBooks;
const container = document.getElementById("book-container");

function renderBooks() {
    container.innerHTML = "";
    let bookHTML = "";
    for (let index = 0; index < books.length; index++) {
        bookHTML = getMainTemplate(index);
        if (books[index].comments.length === 0) {
            bookHTML += getNoCommentsTemplate();
        } else {
            for (let index2 = 0; index2 < books[index].comments.length; index2++) {
                bookHTML += getCommentsTemplate(index, index2);
            }
        }
        container.innerHTML += bookHTML;
    }
}
