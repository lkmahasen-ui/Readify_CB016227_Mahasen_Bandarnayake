const bookTitle = document.getElementById("booktitle");
const totalPagesInput = document.getElementById("totalpages");
const pagesReadInput = document.getElementById("pagesread");
const speedInput = document.getElementById("speed");

const calculateButton = document.getElementById("calculatebutton");
const resetButton = document.getElementById("resetbutton");

const progressFill = document.getElementById("progressfill");
const progressPercentage = document.getElementById("progresspercentage");

const pagesRemainingText = document.getElementById("pagesremaining");
const daysToCompleteText = document.getElementById("daystocomplete");
const completionDateText = document.getElementById("completiondate");
const resultText = document.getElementById("resulttext");

// calculate progress
calculateButton.addEventListener("click", function() {

    let totalPages = Number(totalPagesInput.value);
    let pagesRead = Number(pagesReadInput.value);
    let speed = Number(speedInput.value);

    //validation
    if (totalPages <= 0 || pagesRead < 0 || speed <= 0 )
    {
        resultText.textContent = "Please enter valid number.";
        return;
    }

    if (pagesRead > totalPages)
    {
        resultText.textContent = "Pages read cannot be more than total pages.";
        return;
    }

    //progress percentage
    let percentage = (pagesRead / totalPages) * 100;
    let roundedPercentage = Math.round(percentage);

    //check if reading progress reached 100% and book title is not empty
    if (roundedPercentage === 100 && bookTitle.value.trim() !== "") 
    {
        //create an object for the completed book
        const completedBook = {
            title: bookTitle.value.trim(),
            pages: totalPages,
            date: new Date().toLocaleDateString() //completion date
        };

        //create an array to hold completed books
        let storedBooks = localStorage.getItem("readifyCompletedBooks");
        let completedBooks;

        if (storedBooks !== null)
        {
            completedBooks = JSON.parse(storedBooks);
        }
        else
        {
            completedBooks = [];
        }

        //check if this book already exists to prevent duplication
        let alreadyExists = false;

        for (let i = 0; i < completedBooks.length; i++)
        {
            if (completedBooks[i].title === completedBook.title)
            {
                alreadyExists = true;
                break;
            }
        }

        //if book is not already saved, add it
        if (!alreadyExists)
        {
            completedBooks.push(completedBook);

            //save updated list back to local storage
            localStorage.setItem (
                "readifyCompletedBooks",
                JSON.stringify(completedBooks)
            );
            
            console.log("Book saved to localStorage:", completedBook);
            console.log("All completed books:", completedBooks);
            alert("Congratulations! " + completedBook.title + " has been added to your completed books!");
        }
        else
        {
            alert(completedBook.title + " is already in your completed books list!");
        }

    }

    progressFill.style.width = roundedPercentage + "%";
    progressPercentage.textContent = roundedPercentage + "%";

    //pages remaining
    let remainingPages = totalPages - pagesRead;
    pagesRemainingText.textContent = remainingPages;

    //days to complete
    let daysNeeded = Math.ceil(remainingPages / speed);
    daysToCompleteText.textContent = daysNeeded;

    //completion date
    let today = new Date();
    today.setDate(today.getDate() + daysNeeded);

    let completionDate = today.toDateString();
    completionDateText.textContent = completionDate;

    if (roundedPercentage === 100)
    {
        resultText.textContent = "Congratulations! You've finished this book!";
    }
    else
    {
        resultText.textContent = "Keep going! You're making great progress.";
    }

});

//reset
resetButton.addEventListener("click", function() {
    bookTitle.value = "";
    totalPagesInput.value = "";
    pagesReadInput.value = "";
    speedInput.value = "";

    progressFill.style.width = "0%";
    progressPercentage.textContent = "0%";

    pagesRemainingText.textContent = "-";
    daysToCompleteText.textContent = "-";
    completionDateText.textContent = "-";
    resultText.textContent = "";
});

//increase decrease buttons
let stepperButtons = document.getElementsByClassName("stepper-btn");

for (let i = 0; i < stepperButtons.length; i++) {
    stepperButtons[i].addEventListener("click", function() {

        let inputId = this.getAttribute("data-input");
        let inputField = document.getElementById(inputId);

        let currentValue = Number(inputField.value);

        if (isNaN(currentValue))
        {
            currentValue = 0;
        }

        if (this.classList.contains("stepper-up"))
        {
            inputField.value = currentValue + 1;
        }

        if (this.classList.contains("stepper-down"))
        {
            if (currentValue > 0)
            {
                inputField.value = currentValue - 1;
            }
        }
    });
}


//newsletter - reusable function
initNewsletterForm();