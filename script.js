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

    // add enter keydown to textfield, klick events to buttons after html render...
    for (let index = 0; index < books.length; index++) {
        addEventToTextfield(`comment-input-${index}`, addComment, index);
        addEventToButton(".btnAddComment", addComment, index);
        addEventToButton(".btnLikeUnlike", addLikeOrUnlike, index);
    }
}

function addEventToTextfield(elementID, functionToRun, index) {
    const input = document.getElementById(elementID);
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            functionToRun(index);
        }
    });
}

function addEventToButton(buttonClass, functionToRun, index) {
    const buttons = document.querySelectorAll(buttonClass);
        buttons[index].addEventListener("click", function (event) {
            event.stopPropagation();
            // const index = buttons[buttonIndex].dataset.index;
            functionToRun(index);
        });
}



