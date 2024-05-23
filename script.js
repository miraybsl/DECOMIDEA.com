window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("go-top").style.display = "block";
    } else {
        document.getElementById("go-top").style.display = "none";
    }
}


document.getElementById("go-top").addEventListener("click", function () {

    if ('scrollBehavior' in document.documentElement.style) {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {

        window.scrollTo(0, 0);
    }
});

document.getElementById("form").addEventListener("submit", checkForm);

function checkForm(e) {
    e.preventDefault();
    let form = e.target;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const message = form["message"].value;
    if (firstName.length < 2 || firstName.length > 50) {
        displayErrorMessage(firstName, "prénom")
    } else if (lastName.length < 2 || lastName.length > 50) {
        displayErrorMessage(lastName, "nom")
    } else if (email.length < 3 || email.length > 70 || !validateEmail(email)) {
        displayErrorMessage(email, "e-mail")
    } else if (message.length < 20 || email.length > 500) {
        displayErrorMessage(message, "message")
    } else {
        document.getElementById("success-message").style.display = "block";
    }
}

function displayErrorMessage(field, name) {
    alert(field + " n'est par un " + name + " valide");
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};