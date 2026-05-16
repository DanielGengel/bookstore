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