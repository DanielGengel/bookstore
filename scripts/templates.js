function getMainTemplate(index) {
    return `
        <section class="book-card">
            <header class="book-header">
                ${books[index].name}
            </header>

            <picture class="book-image">
                <img src="./assets/img/book.svg" alt="${books[index].name}">
            </picture>

            <div class="book-top-info">
                <div class="price">
                    ${books[index].price.toFixed(2)} EUR
            </div>

            <div class="likes">
                    <span>${books[index].likes}</span>
                    <span class="heart ${books[index].liked ? "liked" : ""}">
                        
                        <button class="btnLikeUnlike ${books[index].liked ? "liked" : ""}" data-index="${index}">
                            <img id="book-liked-${index}" ${books[index].liked ? "liked" : ""}" src="./assets/img/white-heart-icon.svg" alt="Heart icon">
                        </button>
                    </span>
                </div>
            </div>

            <div class="details-section">
                <table class="book-details-table">
                    <tr>
                        <td class="table-left">
                            <b>Author:</b>
                        </td>
                        <td class="table-right">${books[index].author}</td>
                    </tr>
                    <tr>
                        <td class="table-left">
                            <b>Erscheinungsjahr:</b>
                        </td>
                        <td class="table-right">${books[index].publishedYear}</td>
                    </tr>
                    <tr>
                        <td class="table-left">
                            <b>Genre:</b>
                        </td>
                        <td class="table-right">${books[index].genre}</td>
                    </tr>
                </table>
            </div>
            <div class="comments-section">
            <h3>Kommentare:</h3>
        `;
}

function getNoCommentsTemplate() {
    return `Noch keine Kommetare vorhanden.`;
}

function getCommentsTemplate(index, index2) {
    return `
        <table class="comments-table">
            <tr>
                <td class="comment-user">
                    ${books[index].comments[index2].name}:
                </td>

                <td class="comment-text">
                   ${books[index].comments[index2].comment}
                </td>
            </tr>
        </table>
    `;
}

function getCommentInputTemplate(index) {
    // end-div for previous div
    // At the end end-section for book-card
    return ` </div>
        <div class="comment-input">
            <input id="comment-input-${index}" type="text" placeholder="Schreibe deinen Kommentar...">
            <button class="btnAddComment" data-index="${index}">➤</button>
        </div>
    </section>
    `;
}
