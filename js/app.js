// onclick function for search button 
const bookArchive = () => {
    const books = document.getElementById('books-name').value;
    const url = `https://openlibrary.org/search.json?q=${books}`;
    // fetching url 
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data));   
}
// function for using data and displaying it to ui 
const displayBooks = books => {
    const booklist = books.docs;
    // displaying search count 
    const countCont = document.getElementById('search-count');
    countCont.textContent = '';
    countCont.innerHTML = `
        <p>Search Found: ${books.numFound}</p>
    `
    // displayng books information 
    const booksCard = document.getElementById('books-card');
    booksCard.textContent = '';
    booklist.length = 20;
    booklist.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top img-fluid p-2" >
         <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">Author Name: ${element.author_name[0]}</p>
        <p class="card-text">First Publish Year: ${element.first_publish_year}</p>
        <p class="card-text">Publisher: ${element.publisher[0]}</p>
         </div>
        </div>
        `
        booksCard.appendChild(div)
    });  
}

