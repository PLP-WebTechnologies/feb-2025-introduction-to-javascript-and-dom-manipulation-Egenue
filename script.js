function updateTitle() {
    document.getElementById("page-title").textContent = "Awesome Book Collection";
  }
  
  function styleDescription() {
    const desc = document.getElementById("description");
    desc.style.backgroundColor = "#f0e68c";
    desc.style.fontWeight = "bold";
    desc.style.padding = "10px";
    desc.style.border = "1px solid #ccc";
  }
  
  function addBook() {
    const bookList = document.getElementById("book-list");
    const newBook = document.createElement("li");
    newBook.textContent = "New Book Title";
    bookList.appendChild(newBook);
  }
  
  function removeBook() {
    const bookList = document.getElementById("book-list");
    if (bookList.lastElementChild) {
      bookList.removeChild(bookList.lastElementChild);
    }
  }  