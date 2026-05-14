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
        bookHTML += getCommentInputTemplate(index);
        container.innerHTML += bookHTML;
    }

    addEventsToButtons(".btnAddComment", addComment);
    addEventsToButtons(".btnLikeUnlike", addLikeOrUnlike);
}

function addEventsToButtons(buttonClass, functionToRun) {
    const buttons = document.querySelectorAll(buttonClass);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            event.stopPropagation();
            const index = buttons[i].dataset.index;
            functionToRun(index);
        });
    }
}

function addComment(index) {
    const input = document.getElementById(`comment-input-${index}`);
    const newComment = input.value.trim();

    if (newComment === "") return;

    books[index].comments.splice(0, 0, {
        name: "Nico sagt",
        comment: newComment,
    });

    updateLocalStorage();
    renderBooks();
}

function addLikeOrUnlike(index) {

    const input = document.getElementById(`book-liked-${index}`);
    if (books[index].liked) {
        books[index].liked = false;
        books[index].likes -= 1;
    } else {
        books[index].liked = true;
        books[index].likes += 1;
    }

    updateLocalStorage();
    renderBooks();
}

function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

