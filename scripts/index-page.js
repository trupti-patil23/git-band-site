/**-----------------------------------------------------------------------------------------
 * Declare default Array storing default 3 comments,After every refresh 3 comments will be visible
 -------------------------------------------------------------------------------------------*/
let defaultCommentsArray = [
    {
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art.This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person.What a show! They were just perfection.If there was one day of my life I could relive, this would be it.What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const ulElement = document.querySelector(".comment");

/**
 * This function shows default comments from default array.
 */
function displayDefaultCommentsArray() {
    ulElement.textContent = ""; 
    for (let i = 0; i < defaultCommentsArray.length; i++) {
        //created li element :<li class="comment__item">
        const liElement = document.createElement("li");
        liElement.classList.add("comment__item");
        ulElement.appendChild(liElement);

        //created div element: <div class="comment__divider">
        const liChild1 = document.createElement("div");
        liChild1.classList.add("comment__divider");
        liElement.appendChild(liChild1);

        //created div element: <div class="comment__main-container">
        const liChild2 = document.createElement("div");
        liChild2.classList.add("comment__main-container");
        liElement.appendChild(liChild2);

        //created div element :<div class="comment__item-image">
        const itemImage = document.createElement("div");
        itemImage.classList.add("comment__item-image");
        liChild2.appendChild(itemImage);

        //created div element :  <div class="comment__sub-container">
        const subContainer = document.createElement("div");
        subContainer.classList.add("comment__sub-container");
        liChild2.appendChild(subContainer);

        //created div element : <div class="comment__row">
        const commentRow = document.createElement("div");
        commentRow.classList.add("comment__row");
        subContainer.appendChild(commentRow);

        //created div element :<div class="comment__item-comment">
        const itemComment = document.createElement("div");
        itemComment.classList.add("comment__item-comment");
        itemComment.innerText = defaultCommentsArray[i].comment;
        subContainer.appendChild(itemComment);

        //created div element: <div class="comment__item-name">
        const itemName = document.createElement("div");
        itemName.classList.add("comment__item-name");
        itemName.innerText = defaultCommentsArray[i].name;
        commentRow.appendChild(itemName);

        //created div element: <div class="comment__item-date">
        const itemDate = document.createElement("div");
        itemDate.classList.add("comment__item-date");
        itemDate.innerText = defaultCommentsArray[i].date;
        commentRow.appendChild(itemDate);
    }
}

/** ------------------------------------------------------------------------------------
 * Added EventListener on "comment-form"
 *--------------------------------------------------------------------------------------*/
document.getElementById("comment-form").addEventListener("submit", function (event) {

    event.preventDefault(); //prevent form from submitting 

    let name = "";
    let comment = "";
    let returnFlag = false;

    /* Validation for empty values for name and comment, when you click on Submit Button.*/
    let nameTextBox = document.querySelector(".form__name");
    let commentTextArea = document.querySelector(".form__comment");

    name = nameTextBox.value;
    comment = commentTextArea.value;

    if (name === "" || (name != null && name.trim() === "")) {
        nameTextBox.classList.add("form__name--error");
        returnFlag = true;
    } else {
        nameTextBox.classList.remove("form__name--error");
    }

    if (comment === "" || (comment != null && comment.trim() === "")) {
        commentTextArea.classList.add("form__comment--error");
        returnFlag = true;
    } else {
        commentTextArea.classList.remove("form__comment--error");
    }

    //if either name or comment or both feilds are empty, return will go back to HTML
    if (returnFlag === true) {
        return;
    }

    //Created new defaultCommentsArray object using the form input values
    let currentDate = new Date();
    let localizedDateString = currentDate.toLocaleDateString();

    const newComment = {
        name: name,
        comment: comment,
        date: localizedDateString
    };

    // Added new object to the front of the defaultCommentsArray
    defaultCommentsArray.unshift(newComment);

    displayDefaultCommentsArray();

    // Resetting the form
    document.getElementById("comment-form").reset();
});

document.getElementById("comment-form").addEventListener("input", function (event) {
    let target = event.target;
    if (target.matches(".form__name")) {
        target.classList.remove("form__name--error");
    }

    if (target.matches(".form__comment")) {
        target.classList.remove("form__comment--error");
    }
});

//Calling function to display 3 default comments after every refreh
displayDefaultCommentsArray();




