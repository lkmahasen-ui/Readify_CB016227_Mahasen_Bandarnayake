//get reference to DOM elements
const genreSelect = document.getElementById("genreselect");
const lengthSelect = document.getElementById("lengthselect");
const pickButton = document.getElementById("pickbutton");
const  recommendationSection = document.getElementById("recommendation");

//array to store book data
let booksData = [];

//Load JSON data from books.json file
fetch("books.json").then(function(response) {
    return response.json(); //convert response to JSON
})
.then(function(data) {
    booksData = data;

    //get unique genres from the data
    let genres = [];
    for (let i = 0; i < data.length; i++) {
        let bookGenres = data[i].genre;
        //handle both array and string formats
        if (Array.isArray(bookGenres)) {
            for (let k = 0; k < bookGenres.length; k++) {
                if(genres.indexOf(bookGenres[k]) === -1) {
                    genres.push(bookGenres[k]);
                }
            }
        } else if (typeof bookGenres === 'string') {
            if(genres.indexOf(bookGenres) === -1) {
                genres.push(bookGenres);
            }
        }
    }

    //sort genres alphabetically
    genres.sort();

    //populate genre dropdown
    for (let j = 0; j < genres.length; j++) {
        const option = document.createElement("option");
        option.value = genres[j];
        option.textContent = genres[j];
        genreSelect.appendChild(option);
    }
}).catch(function(error) {
    console.error("Error loading JSON:", error);
});

//function to categorize book length
function getLengthCategory(pages) {
    if (pages < 200)
    {
        return "short";
    }
    else if (pages >= 200 && pages <= 400)
    {
        return "medium";
    }
    else
    {
        return "long";
    }
}

//function to display a book recommendation
function showRecommendation(book) {

    //hide section initially for fade in effect
    recommendationSection.style.opacity = 0;
    recommendationSection.style.display = "block";

    setTimeout(function() {
    // Build HTML for the recommendation
    let html = '';
    html += '<div class="recommendation-card">';
    html += '<img src="' + book.image + '" alt="' + book.title + '" class="recommendation-cover">';
    html += '<div class="recommendation-details">';
    html += '<h3 class="recommendation-title">' + book.title + '</h3>';
    html += '<p class="recommendation-author">by ' + book.author + '</p>';
    html += '<div class="recommendation-meta">';
    html += '<span class="meta-badge">' + book.genre + '</span>';
    html += '<span class="meta-badge">' + book.pages + ' pages</span>';
    html += '</div>';
    html += '<p class="recommendation-synopsis">' + book.description + '</p>';
    html += '<div class="recommendation-actions">';
    html += '<button id="savetolistbutton" class="save-to-list-btn">';
    html += '<i class="fas fa-bookmark"></i> Save to Reading List';
    html += '</button>';
    html += '<button id="pickagainbutton" class="pick-again-btn">';
    html += '<i class="fas fa-shuffle"></i> Pick Again';
    html += '</button>';
    html += '</div>';
    html += '</div></div>';

    recommendationSection.innerHTML = html;
    recommendationSection.style.opacity = 1;

    // Add event listener to save button
    const saveBtn = document.getElementById('savetolistbutton');
    saveBtn.addEventListener('click', function() {
        saveToReadingList(book);
    });

    // Add event listener to pick again button
    const pickAgainBtn = document.getElementById('pickagainbutton');
    pickAgainBtn.addEventListener('click', function() {
        // Add animation class
        recommendationSection.classList.add('fade-out');
        
        setTimeout(function() {
            recommendationSection.classList.remove('fade-out');
            pickBook();
        }, 300);
    });

  }, 200);
}

//function to pick a random book 
function pickBook() {
    const selectedGenre = genreSelect.value;
    const selectedLength = lengthSelect.value;

    //start with all books
    let filteredBooks = booksData;

    //filter by genre if selected
    if (selectedGenre) {
        let tempBooks = [];
        for (let i = 0; i < filteredBooks.length; i++)
        {
            let bookGenres = filteredBooks[i].genre;
            //check if book has the selected genre
            if (Array.isArray(bookGenres)) {
                if (bookGenres.indexOf(selectedGenre) !== -1) {
                    tempBooks.push(filteredBooks[i]);
                }
            } else if (bookGenres === selectedGenre) {
                tempBooks.push(filteredBooks[i]);
            }
        }
        filteredBooks = tempBooks;
    }

    //filter by length if selected
    if (selectedLength) {
        let tempBooks = [];
        for (let i = 0; i < filteredBooks.length; i++)
        {
            if (getLengthCategory(filteredBooks[i].pages) === selectedLength) {
                tempBooks.push(filteredBooks[i]);
            }
        }
        filteredBooks = tempBooks;
    }

    //if no books found, show alert
    if (filteredBooks.length === 0) {
        alert("No books found for these preferences.");
        return;
    }

    //pick a random book
    const randomIndex = Math.floor(Math.random() * filteredBooks.length);
    const book = filteredBooks[randomIndex];

    //show recommendations
    showRecommendation(book);
}

//function to reset the recommendation
function resetRecommendation() {
    recommendationSection.style.display = "none";
    genreSelect.value = "";
    lengthSelect.value = "";
}

//add event listener to pick a button
pickButton.addEventListener("click", pickBook);

//add event listener to reset button
const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetRecommendation);


//reading list
function loadReadingList() {
    const savedList = localStorage.getItem('readifyReadingList');

    let readingList;
    if (savedList !== null)
    {
        readingList = JSON.parse(savedList);
    }
    else
    {
        readingList = [];
    }

    //get the container to display books
    const container = document.getElementById('readinglist');

    //if list is empty, show message
    if (readingList.length === 0)
    {
        container.innerHTML = '<p class="empty-message">Your reading list is empty. Save recommendations to see them here!</p>';
        return;
    }

    container.innerHTML = '';

    for (let i=0; i < readingList.length; i++) {
        const book = readingList[i];

        //create a div for this book
        const bookDiv = document.createElement('div');
        bookDiv.className = 'reading-list-item';

        //create html content for the book
        let genreHTML = '';
        if(Array.isArray(book.genre))
        {
            for(let j=0; j < book.genre.length; j++)
            {
                genreHTML += '<span class="genre-tag">' + book.genre[j] + '</span>';
            }
        }
        else
        {
            genreHTML = '<span class="genre-tag">' + book.genre + '</span>';
        }

        bookDiv.innerHTML = `
            <button class="remove-btn" onclick="removeFromReadingList(${book.id})" title="Remove from list"><i class="fas fa-times"></i></button>
            <img src="${book.image}" alt="${book.title}">
            <h4>${book.title}</h4>
            <p>by ${book.author}</p>
            <div class="genre-tags">${genreHTML}</div>
        `;

        //add to container
        container.appendChild(bookDiv);
    }
    
}
function saveToReadingList(book) {
    const savedList = localStorage.getItem('readifyReadingList');

    let readingList;
    if (savedList !== null)
    {
        readingList = JSON.parse(savedList);
    }
    else
    {
        readingList = [];
    }

    //check if book already exists in list
    let alreadyExists = false;
    for (let i = 0; i < readingList.length; i++)
    {
        if (readingList[i].id === book.id)
        {
            alreadyExists = true;
            break;
        }
    }

    if (alreadyExists)
    {
        alert('This book is already in your reading list!');
        return;
    }

    readingList.push(book);
    localStorage.setItem('readifyReadingList', JSON.stringify(readingList));

    alert('Added to your reading list!');
    loadReadingList();
}

function removeFromReadingList(bookId) {
    const savedList = localStorage.getItem('readifyReadingList');

    if (savedList === null)
    {
        return;
    }

    let readingList = JSON.parse(savedList);

    //filter out the book with matching ID
    let newList = [];
    for (let i = 0; i < readingList.length; i++) {
        if (readingList[i].id !== bookId)
        {
            newList.push(readingList[i]);
        }
    }

    localStorage.setItem('readifyReadingList', JSON.stringify(newList));

    alert('Removed from reading list');
    
    // Reload the reading list display
    loadReadingList();
}

loadReadingList();

//newsletter - reusable function
initNewsletterForm();