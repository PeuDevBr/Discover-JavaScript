/***
 *  # Buscando e contando dados em Array #
 * 
 *  Baseado no Array de Livros por Categoria abaixo, faça os seguinte desafios:
 * 
 *    # Conte o número de categorias e o número de livros em cada categoria
 *    # Contar o número de autores
 *    # Mostrar livros do autor Augusto Cury
 *    # Transformar a função acima em uma função que irá receber o nome do autor
 *      e devolver os livros desse autor.
 */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai ricom pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubistituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const numberOfCategories = booksByCategory.length;

console.log(`Número de categorias: ${numberOfCategories}`);
console.log(`----------------------------------`);

const numberOFBooks = () => {
  /*
  let quantityOfBooks = 0

  for(let i = 0; i < booksByCategory.length; i++) {
    quantityOfBooks = quantityOfBooks + booksByCategory[i].books.length  
  }*/

  for (let categories of booksByCategory) {
    console.log(`Categoria: ${categories.category}`);
    console.log(`Número de livros: ${categories.books.length}`);
    console.log(`----------------------------------`);
  }
};

numberOFBooks();

const numberOfAuthor = () => {
  let authors = [];

  /*for(let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if(!author.includes(booksByCategory[i].books[j].author)){
        author.push(booksByCategory[i].books[j].author)
      }

    }  
  }*/

  for (category of booksByCategory) {
    for (let book of category.books) {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    }
  }
  return console.log(`Número de autores: ${authors.length}`);
};

numberOfAuthor();
console.log(`----------------------------------`);

const booksOfCury = () => {

  /*
  let showBooksOfCury = []

  for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (booksByCategory[i].books[j].author === "Augusto Cury")
        showBooksOfCury =
          showBooksOfCury +
          `
      ${booksByCategory[i].books[j].title} `;
    }
  }*/
  console.log("Livros de Augusto Cury:")

  for (category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == "Augusto Cury") {
        console.log(book.title)
      }
    }
  }

};

booksOfCury();
console.log(`----------------------------------`);

const booksOfAuthor = (author) => {

  /*
  let showBooksOfCury = [];

  for (let i = 0; i < booksByCategory.length; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (booksByCategory[i].books[j].author === author)
        showBooksOfCury.push(booksByCategory[i].books[j].title);
    }
  }*/

  console.log(`Livros de ${author}:`)

  for (category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        console.log(book.title)
      }
    }
  }
};
booksOfAuthor("Stephen R. Covey");
console.log(`----------------------------------`);