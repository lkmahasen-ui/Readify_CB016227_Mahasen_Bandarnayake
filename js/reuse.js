//mobile menu toggle

function initMobileMenu() {

    const menuButton = document.getElementById("menubutton");
    const navMenu = document.getElementById("navmenu");

    if (menuButton === null || navMenu === null) 
    {
        return;
    }

    menuButton.addEventListener("click", function() {

        navMenu.classList.toggle("show");
        menuButton.classList.toggle("active");
    });
}


//newsletter form

function initNewsletterForm() {

    const newsletterForm = document.getElementById("newsform");
    const newsletterEmail = document.getElementById("newsletteremail");

    if (newsletterForm === null || newsletterEmail === null)
    {
        return;
    }

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = newsletterEmail.value.trim();

        if (email === "") 
        {
            alert("Please enter your email");
            return;
        }

        let storedSubscribers = localStorage.getItem("readifySubscribers");

        let subscriberList;

        if (storedSubscribers !== null)
        {
            subscriberList = JSON.parse(storedSubscribers);
        }
        else
        {
            subscriberList = [];
        }

        let alreadySubscribed = false;

        for (let i = 0; i < subscriberList.length; i++)
        {
            if (subscriberList[i] === email)
            {
                alreadySubscribed = true;
                break;
            }
        }

        if (alreadySubscribed === true) 
        {
            alert("This email is already subscribed !!!");
            return;
        }

        subscriberList.push(email);

        localStorage.setItem("readifySubscribers",JSON.stringify(subscriberList));

        alert("Thank you for subscribing.");

        newsletterForm.reset();

    });    
    
}
