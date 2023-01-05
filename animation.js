function revealContent() { // function for scroll animation js

    var revealContents = document.getElementsByClassName("reveal"); // call elements that has reveal variables

    for (var i = 0; i < revealContents.length; i++) { // for loop

        var height = window.innerHeight; // calls the variable to get window inner height
        var contentTop = revealContents[i].getBoundingClientRect().top; // top value is being called

        if (contentTop < height) { // if statement that checks if contenttop is less that height
            
            revealContents[i].classList.add("active"); // assign the "active" class to the revealed contents
        }
        else { // if the if does not work

            revealContents[i].classList.remove("active"); // remove the "active" class to the unrevealed contents
        }
    }
}



window.addEventListener('scroll', revealContent); // call the reveal content function when user scrolls