// books class
class Book {
    constructor(
      id,
      image,
      title,
      author,
      category,
      release_date,
      rating,
      description
    ) {
      this.id = id;
      this.image = image;
      this.title = title;
      this.author = author;
      this.category = category;
      this.release_date = release_date;
      this.rating = rating;
      this.description = description;
    }
  }
  
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((json) => {
      books = json.map(function (element) {
        book = new Book(
          element.id,
          element.image,
          element.title,
          element.author,
          element.category,
          element.release_date,
          element.rating,
          element.description
        );
        // return book;
        if (element.author == "Helen Hoang") {
          const bookFromAuthor = document.createElement("li");
          bookFromAuthor.innerHTML = `
        
        <div>
            <img src="${element.image}" class="card-img-top" alt="...">
          <h3 class="card-title">Title : ${element.title}</h3>
          <div class="card-content">
            <p>Author : ${element.author}</p>
          </div>
        </div>
        
          `;
          // Add a class to the newly created element
          bookFromAuthor.classList.add("card");
          document
            .getElementById("card-author-books")
            .appendChild(bookFromAuthor);
  }
  if (element.category =="Romance") {
      
  
          const SuggestionsBokk = document.createElement("li");
          SuggestionsBokk.innerHTML = `
        
        <div>
            <img src="${element.image}" class="card-img-top" alt="...">
          <h3 class="card-title">Title : ${element.title}</h3>
          <div class="card-content">
            <p>Author : ${element.author}</p>
          </div>
        </div>
        
          `;
  
          SuggestionsBokk.classList.add("card");
          document
            .getElementById("SuggestionsBooks")
            .appendChild(SuggestionsBokk);
          }
      });
      // add the author name 
      // not completed yet
      document.getElementById("booksBy").textContent(`Books By ${element.author}`)
    });