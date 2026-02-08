const popularbooks = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
  },
  {
    id: 3,
    title: "The Fault in Our Stars",
    author: "John Green",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436142804i/25856606.jpg"
  },
  {
    id: 4,
    title: "Jurassic Park",
    author: "Michael Crichton",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1529604411i/40604658.jpg"
  },
  {
    id: 5,
    title: "The Godfather",
    author: "Mario Puzo",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1394988109i/22034.jpg"

  },
  {
    id: 6,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512.jpg"
  },
  {
    id: 7,
    title: "Before We Were Strangers",
    author: "Renée Carlino",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1438012963i/23309634.jpg"      
  },
  {
    id: 8,
    title: "Catch-22",
    author: "Joseph Heller",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1463157317i/168668.jpg"
  },
  {
    id: 9,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1478641029i/32929156.jpg"
  },
  {
    id: 10,
    title: "Big Little Lies",
    author: "Liane Moriarty",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559835163i/33516773.jpg"
  },
  {
    id: 11,
    title: "The Martian",
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg"
  }
];

const slider = document.getElementById("bookSlider");
 
// Render cards
popularbooks.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";
 
  card.innerHTML = `<img src="${book.image}" alt="${book.title}">
<div class="book-info">
<h3>${book.title}</h3>
<p>${book.author}</p>
</div>`;
 
  slider.appendChild(card);
});
 
// Slider controls
const slideAmount = 280;
 
document.getElementById("nextBtn").addEventListener("click", () => {
  slider.scrollBy({ left: slideAmount, behavior: "smooth" });
});
 
document.getElementById("prevBtn").addEventListener("click", () => {
  slider.scrollBy({ left: -slideAmount, behavior: "smooth" });
});


const authors = [
  {
    name: "J.R.R. Tolkien",
    bio: "English writer, poet, philologist, and academic, best known for his high-fantasy works The Hobbit and The Lord of the Rings."
  },
  {
    name: "Jane Austen",
    bio: "English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century."
  },
  {
    name: "George Orwell",
    bio: "English novelist, essayist, journalist and critic, known for his lucid prose, social criticism, opposition to totalitarianism, and outspoken support of democratic socialism."
  },
  {
    name: "Agatha Christie",
    bio: "English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple."
  },
  {
    name: "Emily Brontë",
    bio: "English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English literature."
  },
  {
    name: "Andy Weir",
    bio: "American novelist known for his debut novel The Martian, which was adapted into a successful film."
  },
  {
    name: "Suzanne Collins",
    bio: "American television writer and author, best known for The Hunger Games trilogy."
  },
  {
    name: "Harper Lee",
    bio: "American novelist widely known for To Kill a Mockingbird, published in 1960."
  },
  {
    name: "Frank Herbert",
    bio: "American science-fiction author best known for the novel Dune and its five sequels."
  },
  {
    name: "Colleen Hoover",
    bio: "American author known for her contemporary romance novels, including Slammed and It Ends with Us."
  },
  {
    name: "F. Scott Fitzgerald",
    bio: "American novelist and short story writer, best known for his depictions of the Jazz Age, most notably in The Great Gatsby."
  },
  {
    name: "J.D. Salinger",
    bio: "American writer best known for his 1951 novel The Catcher in the Rye, dealing with teenage isolation and alienation."
  },
  {
    name: "Dan Brown",
    bio: "American author of thriller novels, most famously the Robert Langdon stories including The Da Vinci Code and Angels & Demons."
  },
  {
    name: "Gillian Flynn",
    bio: "American author and screenwriter known for her dark, psychological thriller novels, including Gone Girl and Sharp Objects."
  },
  {
    name: "Khaled Hosseini",
    bio: "Afghan-American novelist and physician, known for his best-selling novels The Kite Runner and A Thousand Splendid Suns."
  },
  {
    name: "Paulo Coelho",
    bio: "Brazilian lyricist and novelist, best known for his international bestseller The Alchemist."
  },
  {
    name: "Michelle Obama",
    bio: "American attorney and author who served as the First Lady of the United States from 2009 to 2017, known for her memoir Becoming."
  },
  {
    name: "George R.R. Martin",
    bio: "American novelist and screenwriter, best known for his epic fantasy series A Song of Ice and Fire, which was adapted into Game of Thrones."
  },
  {
    name: "John Green",
    bio: "American author and YouTube content creator, known for young adult novels like The Fault in Our Stars and Looking for Alaska."
  },
  {
    name: "Yann Martel",
    bio: "Canadian author best known for the Man Booker Prize-winning novel Life of Pi."
  },
  {
    name: "Markus Zusak",
    bio: "Australian writer known for his young adult novels, particularly the international bestseller The Book Thief."
  },
  {
    name: "Aldous Huxley",
    bio: "English writer and philosopher, widely acknowledged as one of the foremost intellectuals of his time, famous for Brave New World."
  },
  {
    name: "Louisa May Alcott",
    bio: "American novelist and poet best known as the author of the novel Little Women and its sequels."
  },
  {
    name: "Diana Gabaldon",
    bio: "American author, known for the Outlander series of novels which merge historical fiction, romance, mystery, adventure and science fiction."
  },
  {
    name: "Stephen King",
    bio: "American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels, often referred to as the 'King of Horror'."
  },
  {
    name: "Margaret Atwood",
    bio: "Canadian poet, novelist, literary critic, essayist, and environmental activist, best known for The Handmaid's Tale."
  },
  {
    name: "Arthur Conan Doyle",
    bio: "British writer and physician who created the character Sherlock Holmes in 1887."
  },
  {
    name: "Mary Shelley",
    bio: "English novelist who wrote the Gothic novel Frankenstein; or, The Modern Prometheus, which is considered an early example of science fiction."
  }
];

// get today's date number
const today = new Date();
const dayNumber = today.getDate();

//pick author based on date
const authorIndex = dayNumber % authors.length;
const author = authors[authorIndex];

//display author
const authorCard = document.getElementById("authorcard");

//create html content step by step
let authorHTML = "";

//author name
authorHTML += "<h3>" + author.name + "</h3>";
authorHTML += "<br>";

//author bio
authorHTML += "<p>" + author.bio + "</p>";

//insert into the page
authorCard.innerHTML = authorHTML;


//list of quotes
const heroQuotes = [
  "A reader lives a thousand lives before he dies. — George R.R. Martin",
  "So many books, so little time. — Frank Zappa",
  "Until I feared I would lose it, I never loved to read. — Harper Lee",
  "Books are a uniquely portable magic. — Stephen King",
  "A book must be the axe for the frozen sea within us. — Franz Kafka",
  "There is no friend as loyal as a book. — Ernest Hemingway",
  "I have always imagined that Paradise will be a kind of library. — Jorge Luis Borges",
  "We read to know we are not alone. — C.S. Lewis",
  "A room without books is like a body without a soul. — Marcus Tullius Cicero",
  "That’s the thing about books. They let you travel without moving your feet. — Jhumpa Lahiri",
  "Good friends, good books, and a sleepy conscience: this is the ideal life. — Mark Twain",
  "Books are a uniquely portable magic. — Stephen King",
  "Reading is essential for those who seek to rise above the ordinary. — Jim Rohn",
  "The more that you read, the more things you will know. — Dr. Seuss",
  "No entertainment is so cheap as reading, nor any pleasure so lasting. — Lady Mary Wortley Montagu",
  "Sleep is good, he said, and books are better. — George R.R. Martin"
];

//get the quote element
const quoteElement = document.getElementById("heroquote");

//start from the first quote
let quoteIndex = 0;

setInterval(function () {
  quoteElement.style.opacity = 0;

  setTimeout(function () {
    quoteIndex++;
    if (quoteIndex >= heroQuotes.length) 
    {
      quoteIndex = 0;
    }

    quoteElement.textContent = '"' + heroQuotes[quoteIndex] + '"';
    quoteElement.style.opacity = 1;
  }, 500);

}, 4000);


//newsletter - reusable function
initNewsletterForm();