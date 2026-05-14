function getMainTemplate(index) {
    
    return `
            <div class="book-card">

                <div class="book-header">
                    ${books[index].name}
                </div>

                <div class="book-image">
                    <img src="./assets/img/book.svg" alt="${books[index].name}">
                </div>

                <div class="book-top-info">
                    <div class="price">
                        ${books[index].price.toFixed(2)} EUR
                </div>

                <div class="book-details">
                    <div><b>Author</b> : ${books[index].author}</div>
                    <div><b>Erscheinungsjahr</b> : ${books[index].publishedYear}</div>
                    <div><b>Genre</b> : ${books[index].genre}</div>
                </div>

                <div class="comments-section">
                    <h3>Kommentare:</h3>

                </div>












            </div>
        `;
}