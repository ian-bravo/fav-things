window.addEventListener("load", formLoader);

function formLoader () {
    let userForm = document.getElementById("user-form");
    userForm.addEventListener("submit", dataProcessor);
}

function dataProcessor (event) {
    event.preventDefault();

    // Collect user input from form
    const userEntryOne = document.getElementById("favThingOne").value;

    // Store in an array.
    const userDataArray = [];
    userDataArray.push(userEntryOne);

    console.log("Current array: " + userDataArray);
}