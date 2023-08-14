window.addEventListener("load", formLoader);


function formLoader () {
    userForm = document.getElementById("user-form");
    userForm.addEventListener("submit", dataProcessor);
}

function dataProcessor (event) {
    event.preventDefault();

    // Collect user input from form
    const userEntryOne = document.getElementById("favThingOne").value;
    const userEntryTwo = document.getElementById("favThingTwo").value;
    const userEntryThree = document.getElementById("favThingThree").value;
    
    // Store in an array.
    const userDataArray = [];
    userDataArray.push(userEntryOne);
    userDataArray.push(userEntryTwo);
    userDataArray.push(userEntryThree);

    // Uppercase entire array, and store in a new array.
    const userDataArrayUpperCased = [];

    userDataArray.forEach(function(element) {
        userDataArrayUpperCased.push(element.toUpperCase());
    });

    // Sort new array, and store in yet, another array.
    const userDataArrayUpperCasedAndSorted = userDataArrayUpperCased.sort();

    const ulElement = document.createElement("ul");
    let userForm = document.querySelector("#user-form");
    userForm.after(ulElement);

    userDataArrayUpperCasedAndSorted.forEach(function(listItem){
        const liElement = document.createElement("li");
        ulElement.append(liElement);
        liElement.append(listItem);
    });

    userForm.remove();
}