import { BandSiteAPI } from "./band-site-api.js";
import { BANDSITE_API_KEY } from "./utils.js";

const ulElement = document.querySelector(".comment");
const form = document.getElementById("comment-form");
let commentsArray = [];

/**
 * Added to get comments from BandSiteAPI by creating 
 * BandSiteAPI instance with an api-key stored in global variable
 */
async function getCommentsFromAPI() {
    const bandSiteApi = new BandSiteAPI(BANDSITE_API_KEY);
    commentsArray = await bandSiteApi.getComments();
    displayCommentsArray(commentsArray);
}

/**
 * This function shows default comments from default array.
 */
function displayCommentsArray(commentsArray) {
    ulElement.textContent = "";
    for (let i = 0; i < commentsArray.length; i++) {
        displayCommentDOM(commentsArray[i]);
    }
}


function displayCommentDOM(comment) {
    //created li element :<li class="comment__item">
    const liElement = document.createElement("li");
    liElement.classList.add("comment__item");
    ulElement.appendChild(liElement);

    //created div element: <div class="comment__divider">
    const liDividerChild = document.createElement("div");
    liDividerChild.classList.add("comment__divider");
    liElement.appendChild(liDividerChild);

    //created div element: <div class="comment__main-container">
    const liContainerChild = document.createElement("div");
    liContainerChild.classList.add("comment__main-container");
    liElement.appendChild(liContainerChild);

    //created div element :<div class="comment__item-image">
    const itemImage = document.createElement("div");
    itemImage.classList.add("comment__item-image");
    liContainerChild.appendChild(itemImage);

    //created div element :  <div class="comment__sub-container">
    const subContainer = document.createElement("div");
    subContainer.classList.add("comment__sub-container");
    liContainerChild.appendChild(subContainer);

    //created div element : <div class="comment__row">
    const commentRow = document.createElement("div");
    commentRow.classList.add("comment__row");
    subContainer.appendChild(commentRow);

    //created div element :<div class="comment__item-comment">
    const itemComment = document.createElement("div");
    itemComment.classList.add("comment__item-comment");
    itemComment.innerText = comment.comment;
    subContainer.appendChild(itemComment);

    //created div element: <div class="comment__item-name">
    const itemName = document.createElement("div");
    itemName.classList.add("comment__item-name");
    itemName.innerText = comment.name;
    commentRow.appendChild(itemName);

    //created div element: <div class="comment__item-date">
    const itemDate = document.createElement("div");
    itemDate.classList.add("comment__item-date");
    itemDate.innerText = new Date(comment.timestamp).toLocaleDateString();
    commentRow.appendChild(itemDate);
}

/** ------------------------------------------------------------------------------------
 * Added EventListener on "comment-form", Below function get called , 
 * when you click on Comments button
 *--------------------------------------------------------------------------------------*/
form.addEventListener("submit", function (event) {

    event.preventDefault(); //prevent form from submitting 
    let returnFlag = false;

    /**
     * Added validation Name and Comment input elements,
     * when you click on Submit Button, if any element or both are empty, 
     * then prevent form from submitting.
     * */
    let nameTextBox = event.target.name;
    let commentTextArea = event.target.comment;
    let name = nameTextBox.value;
    let comment = commentTextArea.value;

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

    //if either name or comment or both elements are empty, return will go back to HTML
    if (returnFlag === true) {
        return;
    }

    /*Create new comment object (when you click on Comment button) and to the 
    front of the commentsArray */
    let newComment = {
        name: name,
        comment: comment,
        timestamp: Date.now()
    };
    commentsArray.unshift(newComment);
    displayCommentsArray(commentsArray);

    // Resetting the form
    form.reset();
});

form.addEventListener("input", function (event) {
    let target = event.target;
    if (target.matches(".form__name")) {
        target.classList.remove("form__name--error");
    }

    if (target.matches(".form__comment")) {
        target.classList.remove("form__comment--error");
    }
});

getCommentsFromAPI();