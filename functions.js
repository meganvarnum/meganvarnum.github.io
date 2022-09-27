
//
// Code for scrolling nav bar 
//

function myHeaderClick(goto, elem) {
    document.getElementById(goto).scrollIntoView({behavior: "smooth"});
    // window.scrollBy(0, -(elem.offsetHeight)-2)
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function reveal()
{
    var reveals = document.getElementsByClassName("reveal");
    for(let i = 0; i < reveals.length; i++)
    {
        let element = reveals[i];

        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible)
        {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    }
}