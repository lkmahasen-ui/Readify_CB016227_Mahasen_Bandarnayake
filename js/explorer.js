const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: ["Fiction", "History"],
    rating: 4.3,
    description: "A lawyer in the Depression-era South defends a black man against an undeserved rape charge, and his children against prejudice.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
    sequels: ["Go Set a Watchman"]
  },
  {
    id: 2,
    title: "1984", 
    author: "George Orwell",
    genre: ["Fiction", "Science Fiction"],
    rating: 4.2,
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism and mass surveillance.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy", "Fiction"],
    rating: 4.3,
    description: "A reluctant hobbit sets out on a magical adventure to recover a stolen treasure from a dragon.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    sequels: ["The Lord of the Rings"]
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy", "Fiction"],
    rating: 4.6,
    description: "An epic fantasy novel about the quest to destroy a powerful ring.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    prequels: ["The Hobbit", "The Silmarillion"]
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: ["Fiction"],
    rating: 3.9,
    description: "A tragic story of Jay Gatsby's self-made fortune and his pursuit of the American Dream and his obsession with Daisy Buchanan.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg"
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: ["Romance", "Fiction"],
    rating: 4.3,
    description: "A classic comedy of manners that critiques the British landed gentry at the end of the 18th century.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg"
  },
  {
    id: 7,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: ["Biography", "History", "Non-Fiction"],
    rating: 4.2,
    description: "The writings from the Dutch language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696989545i/127441416.jpg"
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: ["Fiction"],
    rating: 3.8,
    description: "A story about teenage angst and alienation in which the main character, Holden Caulfield, wanders New York City.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"

  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: ["Non-Fiction", "History"],
    rating: 4.5,
    description: "An exploration of the history of the human species, from the emergence of Homo sapiens in Africa to the present.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
    sequels: ["Homo Deus: A Brief History of Tomorrow"]
  },
  {
    id: 10,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: ["Mystery", "Fiction"],
    rating: 3.8,
    description: "A symbologist and a cryptologist solve a murder in the Louvre and uncover a religious mystery protected by a secret society.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1597798677i/55019161.jpg",
    prequels: ["Angels & Demons"],
    sequels: ["The Lost Symbol", "Inferno"]
  },
  {
    id: 11,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: ["Mystery", "Fiction"],
    rating: 4.1,
    description: "A thriller that unearths the secrets at the heart of a modern marriage when the wife disappears on their fifth anniversary.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"
  },
  {
    id: 12,
    title: "Dune",
    author: "Frank Herbert",
    genre: ["Science Fiction", "Fantasy"],
    rating: 4.4,
    description: "Set in the distant future amidst a feudal interstellar society, it tells the story of young Paul Atreides on the desert planet Arrakis.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    sequels: ["Dune Messiah","Children of Dune", "God Emperor of Dune", "Heretics of Dune", "Chapterhouse: Dune"]
  },
  {
    id: 13,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: ["Science Fiction", "Fantasy"],
    rating: 4.2,
    description: "In a dystopian future, a young girl volunteers to take her sister's place in a televised fight to the death.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
    prequels: ["The Ballad of Songbirds and Snakes"],
    sequels: ["Catching Fire", "Mockingjay"]

  },
  {
    id: 14,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: ["Fiction", "History"],
    rating: 4.4,
    description: "The story of a friendship between a wealthy boy and the son of his father's servant in Afghanistan.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1541428344i/17165596.jpg"
  },
  {
    id: 15,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: ["Fiction", "Fantasy"],
    rating: 4.0,
    description: "An Andalusian shepherd boy travels to the pyramids of Egypt in search of a treasure.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
  },
  {
    id: 16,
    title: "Becoming",
    author: "Michelle Obama",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.6,
    description: "The memoir of the former First Lady of the United States, describing her roots and her time in the White House.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg"
  },
  {
    id: 17,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.5,
    description: "The exclusive biography of the creative entrepreneur whose passion for perfection revolutionized six industries.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg"
  },
  {
    id: 18,
    title: "Educated",
    author: "Tara Westover",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.4,
    description: "A memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg"
  },
  {
    id: 19,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: ["Mystery", "Fiction"],
    rating: 4.0,
    description: "A journalist and a hacker investigate the disappearance of a wealthy industrialist's niece 40 years earlier.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1684638853i/2429135.jpg",
    sequels: ["The Girl Who Played with Fire", "The Girl Who Kicked the Hornet's Nest"]
  },
  {
    id: 20,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: ["Fantasy", "Fiction"],
    rating: 4.5,
    description: "Noble families fight for control of the mythical land of Westeros.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562726234i/13496.jpg",
    sequels: ["A Clash of Kings", "A Storm of Swords"]
  },
  {
    id: 21,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: ["Romance", "Fiction"],
    rating: 4.3,
    description: "Two teenagers who meet at a cancer support group fall in love and travel to Amsterdam.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436142804i/25856606.jpg"
  },
  {
    id: 22,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: ["Non-Fiction"],
    rating: 4.1,
    description: "A psychologist explains the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, deliberative).",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg"
  },
  {
    id: 23,
    title: "Life of Pi",
    author: "Yann Martel",
    genre: ["Fiction", "Fantasy"],
    rating: 4.1,
    description: "A young man survives a disaster at sea and is hurtled into an epic journey of adventure and discovery with a Bengal tiger.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg"
  },
  {
    id: 24,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: ["Mystery", "Fiction"],
    rating: 4.1,
    description: "A woman shoots her husband five times in the face and then never speaks another word.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
  },
  {
    id: 25,
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.6,
    description: "A lone astronaut must save the earth from disaster, but he has no memory of who he is or his mission.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg"
  },
  {
    id: 26,
    title: "Born a Crime",
    author: "Trevor Noah",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.3,
    description: "Stories of a South African childhood by the comedian, detailing his life growing up under apartheid.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1473867911i/29780253.jpg"
  
  },
  {
    id: 27,
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: ["Fiction", "History"],
    rating: 4.5,
    description: "Set in Nazi Germany, a girl steals books and shares them with her neighbors and the Jewish man hiding in her basement.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg"
  },
  {
    id: 28,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.2,
    description: "A futuristic society where citizens are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to uphold an authoritarian order.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg"
  },
  {
    id: 29,
    title: "Little Women",
    author: "Louisa May Alcott",
    genre: ["Fiction", "History"],
    rating: 4.0,
    description: "The story of the four March sisters—Meg, Jo, Beth, and Amy—and their passage from childhood to womanhood.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
    sequels: ["Little Men", "Jo's Boys"]
  },
  {
    id: 30,
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: ["Mystery", "Fiction"],
    rating: 4.2,
    description: "Ten strangers are lured to an isolated island mansion off the Devon coast and die one by one.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg"
  },
  {
    id: 31,
    title: "Outlander",
    author: "Diana Gabaldon",
    genre: ["Romance", "Fantasy","History"],
    rating: 4.4,
    description: "A combat nurse from 1945 is swept back in time to 1743 Scotland, where she falls for a young warrior.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659086907i/10964.jpg",
    sequels: ["Dragonfly in Amber"]
  },
  {
    id: 32,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    genre: ["Non-Fiction", "History"],
    rating: 4.1,
    description: "An investigation into the environmental factors that allowed some civilizations to dominate others.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842.jpg"
  },
  {
    id: 33,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: ["Fantasy", "Fiction"],
    rating: 4.4,
    description: "The tale of Kvothe, a magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg",
    sequels: ["The Wise Man's Fear"]
  },
  {
    id: 34,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: ["Fantasy", "Fiction"," Romance"],
    rating: 4.1,
    description: "Two young magicians are pawns in an age-old rivalry between two older magicians, competing in a magical circus.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1387124618i/9361589.jpg"
  },
  {
    id: 35,
    title: "Into the Wild",
    author: "Jon Krakauer",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.2,
    description: "The tale of Kvothe, a magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650755924i/60869516.jpg"
  },
  {
    id: 36,
    title: "The Shining",
    author: "Stephen King",
    genre: ["Horror", "Fiction"," Mystery"],
    rating: 4.1,
    description: "A family moves into an isolated hotel for the winter where a sinister presence influences the father into violence.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg",
    sequels: ["Doctor Sleep"]
  },
  {
    id: 37,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.0,
    description: "Set in a near-future New England, in a totalitarian theocracy that has overthrown the United States government.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg",
    sequels: ["The Testaments"]
  },
  {
    id: 38,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: ["Fiction", "Mystery"],
    rating: 4.5,
    description: "A story of a girl who raises herself in the marshes of North Carolina and becomes a suspect in a murder.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg"
  },
  {
    id: 39,
    title: "Quiet: The Power of Introverts",
    author: "Susan Cain",
    genre: ["Non-Fiction"],
    rating: 4.0,
    description: "An examination of how modern society undervalues introverts and the biological differences between introverts and extroverts.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg"
  },
  {
    id: 40,
    title: "Atomic Habits",
    author: "James Clear",
    genre: ["Non-Fiction"],
    rating: 4.3,
    description: "A practical framework for improving every day by building good habits and breaking bad ones.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg"
  },
  {
    id: 41,
    title: "Sherlock Holmes: The Complete Novels",
    author: "Arthur Conan Doyle",
    genre: ["Mystery", "Fiction"],
    rating: 4.5,
    description: "The classic detective stories featuring the brilliant Sherlock Holmes and his companion Dr. Watson.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349652573i/4937197.jpg"
  },
  {
    id: 42,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: ["Romance", "Fiction"],
    rating: 4.1,
    description: "A novel about the experiences of a young governess who falls in love with her brooding employer.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg"
  },
  {
    id: 43,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: ["Non-Fiction"],
    rating: 4.1,
    description: "A book on cosmology that explains complex concepts like the Big Bang and black holes to the general public.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg"

  },
  {
    id: 44,
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.1,
    description: "A young boy is recruited into a military training program to lead Earth's defense against an alien race.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1408303130i/375802.jpg",
    sequels: ["Speaker for the Dead", "Xenocide"],
    prequels: ["Earth Unaware"]
  },
  {
    id: 45,
    title: "I, Robot",
    author: "Isaac Asimov",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.3,
    description: "A collection of interconnected stories that explore the three laws of robotics and the relationship between humans and artificial intelligence.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1609035271i/41804.jpg",
    sequels: ["The Caves of Steel", "The Naked Sun"]
  },
  {
    id: 46,
    title: "Circe",
    author: "Madeline Miller",
    genre: ["Fantasy", "Fiction"],
    rating: 4.3,
    description: "A reimagining of the Greek myth of Circe, the daughter of Helios, who is banished to an island where she hones her witchcraft.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg"
  },
  {
    id: 47,
    title: "Ready Player One",
    author: "Ernest Cline",
    genre: ["Science Fiction", "Fiction"],
    rating: 3.7,
    description: "In a dystopian 2045, people seek escape in a virtual reality universe called the OASIS, searching for a hidden fortune.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1500930947i/9969571.jpg",
    sequels: ["Ready Player Two"]
  },
  {
    id: 48,
    title: "The Martian",
    author: "Andy Weir",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.3,
    description: "An astronaut becomes stranded on Mars and must use his scientific ingenuity to survive.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg"
  },
  {
    id: 49,
    title: "Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.2,
    description: "The story of a poor tobacco farmer whose cells—taken without her knowledge—became one of the most important tools in medicine.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327878144i/6493208.jpg"
  },
  {
    id: 50,
    title: "Big Little Lies",
    author: "Liane Moriarty",
    genre: ["Mystery", "Fiction"],
    rating: 4.2,
    description: "A story of three women arrived at a crossroads, leading to a murder at a trivia night.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559835163i/33516773.jpg"
  },
  {
    id: 51,
    title: "Persuasion",
    author: "Jane Austen",
    genre: ["Romance", "Fiction"],
    rating: 4.0,
    description: "Anne Elliot gets a second chance at love with Captain Wentworth, whom she was persuaded to reject years earlier.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1385172413i/2156.jpg"
  },
  {
    id: 52,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.1,
    description: "A future American society where books are outlawed and 'firemen' burn any that are found.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg"
  },
  {
    id: 53,
    title: "Unbroken",
    author: "Laura Hillenbrand",
    genre: ["Biography", "History", "Non-Fiction"],
    rating: 4.5,
    description: "The true story of Louis Zamperini, an Olympic runner who survived a plane crash and a Japanese prisoner-of-war camp.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327861115i/8664353.jpg"
  },
  {
    id: 54,
    title: "The Help",
    author: "Kathryn Stockett",
    genre: ["Fiction", "History"],
    rating: 4.4,
    description: "African American maids working in white households in Jackson, Mississippi, during the early 1960s tell their stories.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg"
  },
  {
    id: 55,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: ["Non-Fiction", "Biography"],
    rating: 4.3,
    description: "A psychiatrist's memoir of life in Nazi death camps and its lessons for spiritual survival.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg"
  },
  {
    id: 56,
    title: "Dark Matter",
    author: "Blake Crouch",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.2,
    description: "A physics professor is kidnapped and wakes up in a world where his life is completely different.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1472119680i/27833670.jpg"
  },
  {
    id: 57,
    title: "Lord of the Flies",
    author: "William Golding",
    genre: ["Fiction"],
    rating: 3.7,
    description: "A group of British boys stranded on an uninhabited island descend into savagery.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327869409i/7624.jpg"
  },
  {
    id: 58,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    genre: ["Romance", "Science Fiction", "Fiction"],
    rating: 3.9,
    description: "A love story about a man with a genetic disorder that causes him to time travel unpredictably, and his wife.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733519901i/18619684.jpg"
  },
  {
    id: 59,
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: ["Romance","Fiction"],
    rating: 4.3,
    description: "A quirky young woman becomes a caregiver for a wealthy young banker left paralyzed from an accident.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1665087720i/17347634.jpg",
    sequels: ["After You", "Still Me"]

  },
  {
    id: 60,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    genre: ["Fiction","Romance"],
    rating: 4.8,
    description: "A tale of the intense and almost demonic love between Catherine Earnshaw and Heathcliff.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1478641029i/32929156.jpg"
  },
  {
    id: 61,
    title: "Catch-22",
    author: "Joseph Heller",
    genre: ["Fiction","History"],
    rating: 4.5,
    description: "A satirical novel set during World War II about a bombardier who tries to escape the insanity of the war.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1463157317i/168668.jpg",
    sequels: ["Closing Time"]
  },
  {
    id: 62,
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    genre: ["Biography", "History", "Non-Fiction"],
    rating: 4.1,
    description: "The biography that inspired the hit musical, detailing the life of the founding father.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436131915i/16130.jpg"
  },
  {
    id: 63,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: ["Science Fiction", "Fiction", "Horror"],
    rating: 4.1,
    description: "A young scientist creates a sapient creature in an unorthodox scientific experiment, but is horrified by the monster he has created.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1631088473i/35031085.jpg"
  },
  {
    id: 64,
    title: "The Godfather",
    author: "Mario Puzo",
    genre: ["Fiction", "Mystery"],
    rating: 4.3,
    description: "The saga of the Corleone crime family and their struggle to maintain power in post-war America.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1394988109i/22034.jpg",
    sequels: ["The Sicilian"]

  },
  {
    id: 65,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.0,
    description: "An anti-war novel about the firebombing of Dresden and a man who becomes 'unstuck in time.'",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1440319389i/4981.jpg"
  },
  {
    id: 66,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    genre: ["History","Biography", "Non-Fiction"],
    rating: 4.2,
    description: "A political biography of Abraham Lincoln and his cabinet during the American Civil War.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676201263i/2199.jpg"
  },
  {
    id: 67,
    title: "Sharp Objects",
    author: "Gillian Flynn",
    genre: ["Mystery","Fiction"],
    rating: 4.0,
    description: "A reporter returns to her hometown to cover a series of murders and confronts her own psychological demons.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891.jpg"
  },
  {
    id: 68,
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    genre: ["Fiction","Mystery"],
    rating: 4.4,
    description: "A widow forms an unlikely friendship with a giant Pacific octopus living at the local aquarium.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg"
  },
  {
    id: 69,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    genre: ["Fantasy","Romance"],
    rating: 4.5,
    description: "A retelling of the Iliad from the perspective of Patroclus, focusing on his relationship with Achilles.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg"
  },
  {
    id: 70,
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    genre: ["Fiction"],
    rating: 4.4,
    description: "In a world where ash falls from the sky, a street urchin discovers she has the power to overthrow an immortal tyrant.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg"
  },
  {
    id: 71,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    genre: ["Fantasy","Fiction"],
    rating: 4.4,
    description: "In a world where ash falls from the sky, a street urchin discovers she has the power to overthrow an immortal tyrant.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
    sequels: ["The Well of Ascension", "The Hero of Ages"]
  },
  {
    id: 72,
    title: "Foundation",
    author: "Isaac Asimov",
    genre: ["Science Fiction","Fiction"],
    rating: 4.1,
    description: "A mathematician predicts the fall of a galactic empire and creates a plan to reduce the ensuing dark ages.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1417900846i/29579.jpg",
    prequels: ["Prelude to Foundation"],
    sequels: ["Foundation and Empire", "Second Foundation"]
  },
  {
    id: 73,
    title: "Midnight in the Garden of Good and Evil",
    author: "John Berendt",
    genre: ["Non-Fiction","Mystery"],
    rating: 4.0,
    description: "A true-crime story involving a murder in the upper crust of Savannah, Georgia society.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1427166915i/386187.jpg"
  },
  {
    id: 74,
    title: "Normal People",
    author: "Sally Rooney",
    genre: ["Fiction","Romance"],
    rating: 4.0,
    description: "The complex friendship and romance between two teenagers in Ireland as they move from high school to college.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg"
  },
  {
    id: 75,
    title: "Shoe Dog",
    author: "Phil Knight",
    genre: ["Biography","Non-Fiction"],
    rating: 4.3,
    description: "The memoir of the creator of Nike, detailing the company's early days as a start-up and its evolution.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1457284880i/27220736.jpg"
  },
  {
    id: 76,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: ["Fiction","Fantasy","Mystery"],
    rating: 4.2,
    description: "A young man sells his soul for eternal youth, while a portrait of him ages and records every sin.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1454087681i/489732.jpg"
  },
  {
    id: 77,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: ["Fiction","Science Fiction"],
    rating: 4.0,
    description: "A father and son journey across a burned, post-apocalyptic America.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg"
  },
  {
    id: 78,
    title: "Bad Blood",
    author: "John Carreyrou",
    genre: ["Non-Fiction","Biography", "Mystery"],
    rating: 4.3,
    description: "The true story of the rise and collapse of Theranos, the multibillion-dollar biotech startup that was a massive fraud.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1523311515i/37976541.jpg"
  },
  {
    id: 79,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    genre: ["Fiction","Fantasy"],
    rating: 4.1,
    description: "The multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg"
  },
  {
    id: 80,
    title: "Why We Sleep",
    author: "Matthew Walker",
    genre: ["Non-Fiction","Science Fiction"],
    rating: 4.5,
    description: "A neuroscientist explores the vital importance of sleep for physical and mental health.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1556604137i/34466963.jpg"
  },
  {
    id: 81,
    title: "The Secret History",
    author: "Donna Tartt",
    genre: ["Mystery","Fiction"],
    rating: 4.2,
    description: "A group of classics students at an elite college slowly descend into evil and murder.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1751820530i/29044.jpg"
  },
  {
    id: 82,
    title: "Beloved",
    author: "Toni Morrison",
    genre: ["Fiction","History"],
    rating: 4.3,
    description: "A former slave is haunted by the trauma of her past and the ghost of her dead baby.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722944318i/6149.jpg"
  },
  {
    id: 83,
    title: "Jurassic Park",
    author: "Michael Crichton",
    genre: ["Science Fiction","Fiction"],
    rating: 4.2,
    description: "A billionaire creates a theme park of cloned dinosaurs that goes terribly wrong.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1529604411i/40604658.jpg",
    sequels: ["The Lost World"]
  },
  {
    id: 84,
    title: "Angela's Ashes",
    author: "Frank McCourt",
    genre: ["Biography","Non-Fiction","History"],
    rating: 4.3,
    description: "A memoir of a childhood spent in poverty in Brooklyn and Limerick, Ireland.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1348317139i/252577.jpg",
    sequels: ["'Tis", "Teacher Man"]
  },
  {
    id: 85,
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    genre: ["Fiction","History"],
    rating: 4.4,
    description: "A chemist in the 1960s becomes the reluctant star of a beloved TV cooking show.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1759925297i/242528917.jpg"
  },
  {
    id: 86,
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    genre: ["Fiction","History"],
    rating: 4.5,
    description: "An epic story about the construction of a cathedral in 12th-century England.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1576956100i/5043.jpg",
    prequels: ["The Evening and the Morning"],
    sequels: ["World Without End", "A Column of Fire"]
  },
  {
    id: 87,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: ["Romance","Fiction"],
    rating: 4.5,
    description: "A woman falls in love but faces painful truths about her relationship and her past.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512.jpg",
    sequels: ["It Starts with Us"]
  },
  {
    id: 88,
    title: "Before We Were Yours",
    author: "Lisa Wingate",
    genre: ["Fiction","History"],
    rating: 4.4,
    description: "A novel based on the true story of the Tennessee Children's Home Society orphanage scandal.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1498910914i/32148570.jpg"
  },
  {
    id: 89,
    title: "Cosmos",
    author: "Carl Sagan",
    genre: ["Non-Fiction","Science Fiction"],
    ratting: 4.5,
    description: "Explores the 15 billion years of cosmic evolution and the development of science and civilization.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg",
    sequels: ["Pale Blue Dot"]
  },
  {
    id: 90,
    title: "Hithchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: ["Science Fiction","Fiction"],
    rating: 4.2,
    description: "An earthling is plucked off the planet by his alien friend seconds before Earth is demolished to make way for a bypass.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328756439i/33344.jpg",
    sequels: ["The Restaurant at the End of the Universe"]
  },
  {
    id: 91,
    title: "In Cold Blood",
    author: "Truman Capote",
    genre: ["Non-Fiction","Mystery"],
    rating: 4.2,
    description: "A non-fiction novel detailing the 1959 murders of the Clutter family in Kansas.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1424931136i/168642.jpg"
  },
  {
    id: 92,
    title: "Outliers",
    author: "Malcolm Gladwell",
    genre: ["Non-Fiction"],
    rating: 4.1,
    description: "An examination of the factors that contribute to high levels of success.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1344266315i/3228917.jpg"
  },
  {
    id: 93,
    title: "Of Mice and Men",
    author: "John Steinbeck",
    genre: ["Fiction","History"],
    rating: 4.1,
    description: "Two displaced migrant ranch workers move from place to place in California in search of job opportunities.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1511302904i/890.jpg"
  },
  {
    id: 94,
    title: "Verity",
    author: "Colleen Hoover",
    genre: ["Mystery","Fiction","Romance"],
    rating: 4.1,
    description: "A struggling writer is hired to finish a book series and uncovers a horrifying autobiography of the author.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1634158558i/59344312.jpg"
  },
  {
    id: 95,
    title: "The Devil in the White City",
    author: "Erik Larson",
    genre: ["Non-Fiction","History","Mystery"],
    rating: 4.3,
    description: "The true story of the 1893 World's Fair in Chicago and the serial killer who used it to lure victims.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1583433024i/397483.jpg"
  },
  {
    id: 96,
    title: "Eleanor Oliphant Is Completely Fine",
    author: "Gail Honeyman",
    genre: ["Fiction","Romance"],
    rating: 4.4,
    description: "A socially awkward woman with a traumatic past learns to open her heart to others.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1557858891i/35900387.jpg"
  },
  {
    id: 97,
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    genre: ["Non-Fiction"],
    rating: 4.0,
    description: "A general science book that explains some of the most complex areas of science in a simple way.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1433086293i/21.jpg"

  },
  {
    id: 98,
    title: "Wild",
    author: "Cheryl Strayed",
    genre: ["Biography","Non-Fiction"],
    rating: 4.1,
    description: "A woman hikes the Pacific Crest Trail alone to recover from a personal catastrophe.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1453189881i/12262741.jpg"
  },
  {
    id: 99,
    title: "Snow Crash",
    author: "Neal Stephenson",
    genre: ["Science Fiction","Fiction"],
    rating: 4.0,
    description: "A cyberpunk novel about a pizza deliverer who is a warrior prince in the metaverse.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1656932283i/61240297.jpg"
  },
  {
    id: 100,
    title: "Dracula",
    author: "Bram Stoker",
    genre: ["Horror","Fiction","Mystery"],
    rating: 4.1,
    description: "The introduction of the vampire Count Dracula and the group of men and women who try to stop him.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg"
  },
  {
    id: 101,
    title: "The Giver",
    author: "Lois Lowry",
    genre: ["Science Fiction", "Fiction"],
    rating: 4.1,
    pages: 208,
    description: "In a seemingly perfect community without war, pain, or suffering, a young boy is chosen to learn from an elderly man about the true pain and pleasure of the real world.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg",
    sequels: ["Gathering Blue", "Messenger", "Son"]
  },
  {
    id: 102,
    title: "The Color Purple",
    author: "Alice Walker",
    genre: ["Fiction", "History"],
    rating: 4.2,
    pages: 295,
    description: "A powerful cultural touchstone of modern American literature, depicting the lives of African American women in early twentieth-century rural Georgia.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1703084419i/52892857.jpg",
    sequels: ["The Temple of My Familiar"]
  },
  {
    id: 103,
    title: "Good Omens",
    author: "Neil Gaiman & Terry Pratchett",
    genre: ["Fantasy", "Fiction",],
    rating: 4.3,
    pages: 412,
    description: "A demon and an angel, who have become rather fond of their comfortable lives on Earth, team up to stop the approaching Armageddon.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1615552073i/12067.jpg"
  },
  {
    id: 104,
    title: "The Bell Jar",
    author: "Sylvia Plath",
    genre: ["Fiction"],
    rating: 4.0,
    pages: 244,
    description: "A semi-autobiographical novel about a young woman's descent into mental illness during a summer internship in New York City.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554582218i/6514.jpg"
  },
  {
    id: 105,
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: ["Fiction", "History"],
    rating: 4.2,
    pages: 1463,
    description: "Jean Valjean, an escaped convict, attempts to recreate his life in the midst of the violent political struggles of 19th-century France.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1525303092i/24280.jpg"
  },
  {
    id: 106,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: ["Fiction"],
    rating: 3.8,
    pages: 128,
    description: "The story of an old Cuban fisherman, down on his luck, and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg"
  },
  {
    id: 107,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: ["Fiction"],
    rating: 4.2,
    pages: 671,
    description: "A poor ex-student in St. Petersburg formulates a plan to kill an unscrupulous pawnbroker for her cash.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg"
  },
  {
    id: 108,
    title: "The Odyssey",
    author: "Homer",
    genre: ["Fiction", "Fantasy",],
    rating: 3.8,
    pages: 541,
    description: "The epic tale of Odysseus and his ten-year journey home after the Trojan War.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1390173285i/1381.jpg",
    prequels: ["The Iliad"]
  },
  {
    id: 109,
    title: "Where'd You Go, Bernadette",
    author: "Maria Semple",
    genre: ["Fiction", "Mystery"],
    rating: 3.9,
    pages: 330,
    description: "A loving mom becomes compelled to reconnect with her creative passions after years of sacrificing herself for her family.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1338822317i/13526165.jpg"
  },
  {
    id: 110,
    title: "The Outsiders",
    author: "S.E. Hinton",
    genre: ["Fiction", "Classic"],
    rating: 4.1,
    pages: 192,
    description: "The rivalry between two gangs, the poor Greasers and the rich Socs, through the eyes of Ponyboy Curtis.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1442129426i/231804.jpg"
  },
  {
    id: 111,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    genre: ["Fiction", "History"],
    rating: 4.4,
    pages: 384,
    description: "A breathtaking story set against the volatile events of Afghanistan's last thirty years, from the Soviet invasion to the reign of the Taliban.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655336738i/128029.jpg"
  },
  {
    id: 112,
    title: "The Lovely Bones",
    author: "Alice Sebold",
    genre: ["Fiction", "Mystery", "Fantasy"],
    rating: 3.8,
    pages: 328,
    description: "A teenage girl who has been murdered watches from her personal Heaven as her family and friends struggle to move on.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1457810586i/12232938.jpg"
  },
  {
    id: 113,
    title: "Life After Life",
    author: "Kate Atkinson",
    genre: ["Fiction", "History", "Fantasy"],
    rating: 4.0,
    pages: 529,
    description: "Ursula Todd dies one night in 1910, only to be born and die again and again, living through the turbulent events of the 20th century.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1358173808i/15790842.jpg",
    sequels: ["A God in Ruins"]
  },
  {
    id: 114,
    title: "The Glass Castle",
    author: "Jeannette Walls",
    genre: ["Biography", "Non-Fiction"],
    rating: 4.3,
    pages: 288,
    description: "A remarkable memoir of resilience and redemption, and a revelatory look into a family at once deeply dysfunctional and uniquely vibrant.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1523542886i/7445.jpg",
    prequels: ["Half Broke Horses"]
  },
  {
    id: 115,
    title: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    genre: ["Fiction", "History"],
    rating: 4.2,
    pages: 496,
    description: "The story of young, sensitive, and idealistic Francie Nolan and her bittersweet formative years in the slums of Williamsburg.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327883484i/14891.jpg"
  },
  {
    id: 116,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    genre: ["Fantasy", "Fiction"],
    rating: 4.3,
    pages: 767,
    description: "Four siblings are sent away from London during the war and stumble into the magical world of Narnia through a wardrobe.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1449868701i/11127.jpg",
    prequels: ["The Magician's Nephew"],
    sequels: ["The Horse and His Boy (Interquel: Takes place during the reign of the Pevensie children in The Lion, the Witch and the Wardrobe)","Prince Caspian", "The Voyage of the Dawn Treader","The Silver Chair","The Last Battle"]
  },
  {
    id: 117,
    title: "The Stranger",
    author: "Albert Camus",
    genre: ["Fiction"],
    rating: 4.0,
    pages: 123,
    description: "An ordinary man is unwittingly drawn into a senseless murder on an Algerian beach.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704267i/49552.jpg"
  },
  {
    id: 118,
    title: "Siddhartha",
    author: "Hermann Hesse",
    genre: ["Fiction", "History"],
    rating: 4.0,
    pages: 152,
    description: "The story of a young man who leaves his family for a contemplative life, then, restless, discards it for one of the flesh.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629378189i/52036.jpg"
  },
  {
    id: 119,
    title: "The Joy Luck Club",
    author: "Amy Tan",
    genre: ["Fiction", "History"],
    rating: 3.9,
    pages: 288,
    description: "Four Chinese women, drawn together by the shadow of their past, begin meeting in San Francisco to play mah jong and tell stories.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1304978653i/7763.jpg"
  },
  {
    id: 120,
    title: "Water for Elephants",
    author: "Sara Gruen",
    genre: ["Fiction", "Romance", "History"],
    rating: 4.1,
    pages: 350,
    description: "A veterinary student, orphaned and penniless in the Great Depression, jumps a moving train that happens to be a circus.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641.jpg"
  }
];

// number of books per page
const booksPerPage = 12;

// current page of pagination
let currentPage = 1;

// list of books after filtering/searching; start with all books
let filteredBooks = books.slice();

// DOM elements
const bookGrid = document.getElementById('bookgrid');
const searchInput = document.getElementById('searchinput');
const genreFilter = document.getElementById('genrefilter');
const sortFilter = document.getElementById('sortfilter');
const resultsCount = document.getElementById('resultscount');
const pagination = document.getElementById('pagination');
const emptyState = document.querySelector('.empty-state');
const clearFiltersEmpty = document.getElementById('clearfiltersempty');

// modal elements
const modal = document.getElementById('modal');
const modalCover = document.getElementById('modalcover');
const modalTitle = document.getElementById('modaltitle');
const modalAuthor = document.getElementById('modalauthor');
const modalSynopsis = document.getElementById('modalsynopsis');
const closeModal = document.getElementById('closemodal');

// function to display books for a given page
function renderBooks(page) {
    if (page === undefined) {
        page = 1;
    }

    // calculate which books to show on this page
    let startIndex = (page - 1) * booksPerPage;
    let endIndex = startIndex + booksPerPage;

    let booksForPage = filteredBooks.slice(startIndex, endIndex);

    // clear previous books
    bookGrid.innerHTML = '';

    // if no books found
    if (booksForPage.length === 0) {
        emptyState.style.display = 'flex';
        resultsCount.textContent = 'No books found';
        pagination.innerHTML = '';
        return;
    } else {
        emptyState.style.display = 'none';
    }

    // create book cards
    for (let i = 0; i < booksForPage.length; i++) {
        let book = booksForPage[i];

        let card = document.createElement('div');
        card.className = 'book-card';

        // create book content
        let bookHtml = '';
        bookHtml += '<img src="' + book.image + '" alt="' + book.title + ' cover">';
        bookHtml += '<h3>' + book.title + '</h3>';
        bookHtml += '<p class="author">' + book.author + '</p>';
        bookHtml += '<p class="rating"><i class="fa fa-star"></i> ' + book.rating + '</p>';

        card.innerHTML = bookHtml;

        // open modal when card is clicked
        (function(b) {
            card.addEventListener('click', function() {
                openModal(b);
            });
        })(book);

        bookGrid.appendChild(card);
    }

    // update results count
    let showingStart = startIndex + 1;
    let showingEnd = endIndex;
    if (showingEnd > filteredBooks.length) {
        showingEnd = filteredBooks.length;
    }
    resultsCount.textContent = 'Showing ' + showingStart + '-' + showingEnd + ' of ' + filteredBooks.length + ' books';

    // render pagination buttons
    renderPagination();
}

// function to display pagination buttons
function renderPagination() {
    let totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;

        if (i === currentPage) {
            btn.className = 'active';
        } else {
            btn.className = '';
        }

        (function(pageNumber) {
            btn.addEventListener('click', function() {
                currentPage = pageNumber;
                renderBooks(currentPage);
            });
        })(i);

        pagination.appendChild(btn);
    }
}

// function to filter books based on search and genre
function filterBooks() {
    let searchTerm = searchInput.value.toLowerCase();
    let genre = genreFilter.value;

    filteredBooks = books.filter(function(book) {
        let titleMatch = book.title.toLowerCase().indexOf(searchTerm) !== -1;
        let authorMatch = book.author.toLowerCase().indexOf(searchTerm) !== -1;
        let matchesSearch = titleMatch || authorMatch;

        let matchesGenre = true;
        if (genre !== '') {
            if (book.genre) {
                let lowerGenres = [];
                for (let i = 0; i < book.genre.length; i++) {
                    lowerGenres.push(book.genre[i].toLowerCase());
                }
                matchesGenre = lowerGenres.indexOf(genre.toLowerCase()) !== -1;
            } else {
                matchesGenre = false;
            }
        }

        return matchesSearch && matchesGenre;
    });

    sortBooks();
    currentPage = 1;
    renderBooks();
}

// function to sort books based on selected option
function sortBooks() {
    let sortValue = sortFilter.value;

    filteredBooks.sort(function(a, b) {
        if (sortValue === 'title-asc') {
            return a.title.localeCompare(b.title);
        } else if (sortValue === 'title-desc') {
            return b.title.localeCompare(a.title);
        } else if (sortValue === 'author-asc') {
            return a.author.localeCompare(b.author);
        } else if (sortValue === 'author-desc') {
            return b.author.localeCompare(a.author);
        } else if (sortValue === 'rating-high') {
            return b.rating - a.rating;
        } else if (sortValue === 'rating-low') {
            return a.rating - b.rating;
        } else {
            return 0;
        }
    });
}

// function to open modal with book details
function openModal(book) {
    modalCover.src = book.image;
    modalTitle.textContent = book.title;
    modalAuthor.textContent = book.author;
    modalSynopsis.textContent = book.description;

    const modalGenres = document.getElementById("modalgenres");
    
    //create empty string to store html
    let genreHTML = "";

    //loop through each genre in the book
    for (let i=0; i < book.genre.length; i++)
    {
      //add a span for each genre
      genreHTML += '<span class="genre-tag">' + book.genre[i] + '</span> ';
    }
    //insert the html into the page
    modalGenres.innerHTML = genreHTML;;

    //handles sequels annd prequels
    const modalSeries = document.getElementById('modalseries');
    const prequelsContainer = document.getElementById('modalprequels');
    const sequelsContainer = document.getElementById('modalsequels');
    const prequelsList = document.getElementById('prequelslist');
    const sequelsList = document.getElementById('sequelslist');

    //reset display
    modalSeries.style.display = 'none';
    prequelsContainer.style.display = 'none';
    sequelsContainer.style.display = 'none';
    prequelsList.innerHTML = '';
    sequelsList.innerHTML = '';

    //show prequels if they exist
    if (book.prequels && book.prequels.length > 0)
    {
      modalSeries.style.display = 'block';
      prequelsContainer.style.display = 'block';
      book.prequels.forEach(function(prequel) {
        const li = document.createElement('li');
        li.textContent = prequel;
        prequelsList.appendChild(li);
      });
    }

    //show sequels if they exist
    if (book.sequels && book.sequels.length > 0)
    {
      modalSeries.style.display = 'block';
      sequelsContainer.style.display = 'block';
      book.sequels.forEach(function(sequel) {
        const li = document.createElement('li');
        li.textContent = sequel;
        sequelsList.appendChild(li);
      });
    }


    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
}

// function to close modal
function closeModalFunc() {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
}

// event listeners
searchInput.addEventListener('input', filterBooks);
genreFilter.addEventListener('change', filterBooks);
sortFilter.addEventListener('change', function() {sortBooks();renderBooks(currentPage);
});

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModalFunc();
    }
});
clearFiltersEmpty.addEventListener('click', function() {
    searchInput.value = '';
    genreFilter.value = '';
    sortFilter.value = 'relevance';
    filteredBooks = books.slice();
    currentPage = 1;
    renderBooks();
});

// initial render
renderBooks();


//newsletter - reusable function
initNewsletterForm();