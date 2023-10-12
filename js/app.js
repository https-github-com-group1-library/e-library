// books class
class Book{
    constructor(id, title, author, category, rating, description){
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.rating = rating;
        this.description = description;
      }
}

// add the top rated section into home page
function addTopRated(){
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(json => {
            books = json.map(function(element){
                book = new Book(element.id, element.title, element.author, element.category, element.rating, element.description);
                return book;
            });

            books.sort()
            let topRated = books.sort(
                (b1, b2) => (b1.rating < b2.rating) ? 1 : (b1.rating > b2.rating) ? -1 : 0);

            let cards = '<ul class="cards">';
            for(i=0; i<10; i++){
                cards += `
                <li class="card" onclick="printHello(${i})">
                    <div class = "text-center">
                        <img src="assest/book1.jpg" class="card-img-top mb-3" alt="Book Cover">
                        <div class = "content-container">
                            <h3 class="card-title">Title: ${books[i].title}</h3>
                            <div class="card-content">
                                <p>Author: ${books[i].author}</p>
                            </div>
                        </div>
                    </div>
                </li>
                `;
            }
            cards += '</ul>';
            document.getElementById('top-rated').innerHTML = cards;
        })
        .catch(error => console.error('Error:', error));
}

// function for book details when clicked in home page
function printHello(id){
    // get tag by the passed id
    let listItems = document.getElementsByTagName('li');
    // set style to change the width
    listItems[id].setAttribute('style','hieght: fit-content; min-width: 57%;');
    listItems[id].setAttribute('id','clicked');
    listItems.forEach(element => {
        // if(element.){}
    });
    // add the new content to its document
    listItems[id].innerHTML = `
        <div class = "d-flex align-items-center justify-content-center" >
            <img src="assest/book1.jpg" class="card-img-top mb-3" alt="Book Cover" style="max-height: 317px; max-width: 208px;">
            <div class = "content-container">
                <h3 class="card-title">Title: ${books[i].title}</h3>
                <div class="card-content">
                    <p>Author: ${books[i].author}</p>
                    <p>Category: ${books[i].category}</p>
                    <p>Description: ${books[i].description}</p>
                </div>
            </div>
        </div>
    `;
}

let books = [];
addTopRated();