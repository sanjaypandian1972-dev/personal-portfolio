var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';

const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {

    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        console.log("Success!", response);
    })
    .catch(error => {
        console.error("Error!", error.message);
    });
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("/contact", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    });

    const data = await response.json();

    alert(data.message);

    contactForm.reset();
});
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");

    let scrollPosition = window.scrollY;

    header.style.backgroundPosition = "center " + (scrollPosition * 0.5) + "px";
});
