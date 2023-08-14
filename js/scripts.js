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

    console.log("Current array: " + userDataArray);
    console.log("2nd thing " + userDataArray[1]);
    console.log("1st thing " + userDataArray[0]);
    console.log("3rd thing " + userDataArray[2]);

    const newArray = [];
    newArray.push(userDataArray[1], userDataArray[0], userDataArray[2]);
    console.log(newArray);

    const ulElement = document.createElement("ul");
    const liElementOne = document.createElement("li");
    const liElementTwo = document.createElement("li");
    const liElementThree = document.createElement("li");

    userForm.after(ulElement);
    ulElement.prepend(liElementOne);
    liElementOne.after(liElementTwo);
    ulElement.append(liElementThree);

    liElementOne.append(newArray[0]);
    liElementTwo.append(newArray[1]);
    liElementThree.append(newArray[2]);
    console.log(newArray);

}