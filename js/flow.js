
const musicSelect = document.getElementById('musicselect');
const backgroundMusic = document.getElementById('backgroundmusic');
const playBtn = document.getElementById('playmusic');
const pauseBtn = document.getElementById('pausemusic');
const stopBtn = document.getElementById('stopmusic');
const volumeSlider = document.getElementById('volumeslider');

//disable pause and stop buttons at start
pauseBtn.disabled = true;
stopBtn.disabled = true;

//load selected music from dropdown
musicSelect.addEventListener('change', function() {
    const selectedTrack = musicSelect.value;

    if (selectedTrack)
    {
        backgroundMusic.src = selectedTrack;
        playBtn.disabled = false;
    }
    else
    {
        backgroundMusic.src = '';
        playBtn.disabled = true;
    }
    stopMusic();
});

//play music
playBtn.addEventListener('click', function () {
    if (backgroundMusic.src)
    {
        backgroundMusic.play();
        playBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
    }
    else
    {
        alert('Please select a music track first!');
    }
});

//pause music
pauseBtn.addEventListener('click', function() {
    backgroundMusic.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
});

//stop music
function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}

stopBtn.addEventListener('click', stopMusic);

//volume control - initialize slider on page load
const initialVolume = Number(volumeSlider.value);
backgroundMusic.volume = initialVolume / 100;
volumeSlider.style.background = 'linear-gradient(to right, #AD8350 ' + initialVolume + '%, #C9CBCF ' + initialVolume + '%)';

volumeSlider.addEventListener('input', function (event) {
    const volume = Number(event.target.value);
    backgroundMusic.volume = volume / 100;
    volumeSlider.style.background = 'linear-gradient(to right, #AD8350 ' + volume + '%, #C9CBCF ' + volume + '%)';
});

//newsletter - reusable function
initNewsletterForm();

//load completed books from storage
function loadCompletedBooks() 
{
    const completedBooksList = document.getElementById("completedbooks");
    const totalBooksText = document.getElementById("totalbooks");
    const totalPagesText = document.getElementById("totalpages");

    if (!completedBooksList || !totalBooksText || !totalPagesText) {
        return; // Elements not ready yet
    }

    //get books from local storage
    let completedBooks = JSON.parse(localStorage.getItem("readifyCompletedBooks")) || [];
    
    console.log("Loading completed books:", completedBooks);
    console.log("Number of books:", completedBooks.length);

    completedBooksList.innerHTML = "";

    if (completedBooks.length === 0)
    {
        completedBooksList.innerHTML = '<li class="empty-message">No completed books yet. Start reading!</li>';
        totalBooksText.textContent = 0;
        totalPagesText.textContent = 0;
    }
    else
    {
        let totalPages = 0;

        completedBooks.forEach((book, index) => {
            totalPages += Number(book.pages);

            const li = document.createElement("li");
            li.innerHTML = `
                <span>${book.title} (${book.pages} pages) - completed on ${book.date}</span>
                <button class="delete-book-btn" onclick="deleteBook(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            `;
            completedBooksList.appendChild(li);
        });

        totalBooksText.textContent = completedBooks.length;
        totalPagesText.textContent = totalPages;
    }
}

//function to delete a book
function deleteBook(index) {
    //ask for confirmation
    if (confirm("Are you sure you want to delete this book?")) {
        //get books from localStorage
        let completedBooks = JSON.parse(localStorage.getItem("readifyCompletedBooks")) || [];
        
        //remove the book at the given index
        completedBooks.splice(index, 1);
        
        //save back to localStorage
        localStorage.setItem("readifyCompletedBooks", JSON.stringify(completedBooks));
        
        //reload the list
        loadCompletedBooks();
    }
}

//ensure DOM is ready before loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCompletedBooks);
} else {
    loadCompletedBooks();
}

//reload books when page becomes visible 
document.addEventListener('visibilitychange', function() {
    if (!document.hidden)
    {
        loadCompletedBooks();
    }
});

//also reload when page gains focus 
window.addEventListener('focus', function() {
    loadCompletedBooks();
});

//reload when page is shown 
window.addEventListener('pageshow', function(event) {
    loadCompletedBooks();
});

//listen for storage changes 
window.addEventListener('storage', function(event) {
    if (event.key === 'readifyCompletedBooks') {
        loadCompletedBooks();
    }
});

