// Smooth Scrolling to each element

document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Email 

document.querySelector('section#contact button').addEventListener('click', sendEmail);

function sendEmail() {
    const link = "mailto:skyy_@live.com"
                + "?cc=" + encodeURIComponent(document.getElementById('contactEmail').value)
                + "&subject=" + encodeURIComponent("Hi Chris, my name is " + document.getElementById('contactName').value)
                + "&body=" + encodeURIComponent(document.querySelector('section#contact form textarea').value)
                ;
    window.location.href = link;
}
