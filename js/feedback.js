//get form and success message
const feedbackForm = document.getElementById("feedbackform");
const successMessage = document.getElementById("successMessage");

//when form is submitted
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); //stop page refresh

    //get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    //validate fields are not empty
    if (name === "" || email === "" || message === "") {

    // Show warning message
    alert("Please fill in all fields");

    // Stop further execution
    return;
}

    //create feedback object 
    const feedbackData = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    //get existing feedback from local storage
    let storedFeedback = localStorage.getItem("readifyFeedback");

    //create an array to store feedback
    let allFeedback;

    //check if feedback exists in local storage
    if (storedFeedback !== null) {
        //convert JSON string back into JavaScript array
        allFeedback = JSON.parse(storedFeedback);
    } else {
        //if no feedback stored, create empty array
        allFeedback = [];
    }

    //add new feedback
    allFeedback.push(feedbackData);

    //save back to local storage
    localStorage.setItem("readifyFeedback", JSON.stringify(allFeedback));

    //show success message
    successMessage.classList.add("show");

    //hide success message after 3 seconds
    setTimeout(function() {successMessage.classList.remove("show");}, 3000);

    //reset form
    feedbackForm.reset();
});


//get all faq buttons
const faqButtons = document.querySelectorAll(".faqbutton");

faqButtons.forEach(button => {button.addEventListener("click", function () {

    //toggle class on button
    this.classList.toggle("active");

    //get panel next to the button
    const panel = this.nextElementSibling;

    //toggle panel open and close
    panel.classList.toggle("active");
});

});


//newsletter - reusable function
initNewsletterForm();
