//Get an element by the name, add an eventlistener (in this case on a click)
document.querySelector('.hamburger-menu').addEventListener('click', (event) => {
    //Change the class on the element when clicked
    event.target.classList.toggle('active');
    //Toggle the thingy manginy for mobile !!
    document.querySelector('.mobile-menu').classList.toggle('active');
});

//Navbar to apear after scrolling down
window.onscroll = function() {
    //If the screen is bigger than 1000px do this
    if (window.innerWidth > 1000) {
        //If scrolled down more than 150px from the top of the document
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            //Change the colours to the default ones
            document.getElementById("nav-id").style.background = "#001229";
            document.getElementById("nav-id").style.borderBottomColor = "#5eaae9"
        }
        else {
            //Remove the colours when navbar is at the top
            document.getElementById("nav-id").style.background = "";
            document.getElementById("nav-id").style.borderBottomColor = ""
        }  
    }
};
