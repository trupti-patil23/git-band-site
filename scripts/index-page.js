import { BandSiteAPI } from "./band-site-api.js";
import { BANDSITE_API_KEY } from "./utils.js";

const ulElement = document.querySelector(".comment");
const form = document.getElementById("comment-form");
const bandSiteApi = new BandSiteAPI(BANDSITE_API_KEY);
let commentsArray = [];

/**
 * Added to get comments from BandSiteAPI by creating 
 * BandSiteAPI instance with an api-key stored in global variable
 */
async function getCommentsFromAPI() {
    commentsArray = await bandSiteApi.getComments();
    //Sort CommentsArray inorder from newest to oldest
    commentsArray.sort((a, b) => (b.timestamp - a.timestamp));
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
    const commentNameDateRow = document.createElement("div");
    commentNameDateRow.classList.add("comment__row");
    subContainer.appendChild(commentNameDateRow);

    //created div element :<div class="comment__item-comment">
    const commentRow = document.createElement("div");
    commentRow.classList.add("comment__item-comment");
    commentRow.innerText = comment.comment;
    subContainer.appendChild(commentRow);

    //created div element: <div class="comment__item-name">
    const itemName = document.createElement("div");
    itemName.classList.add("comment__item-name");
    itemName.innerText = comment.name;
    commentNameDateRow.appendChild(itemName);

    //created div element: <div class="comment__item-date">
    const itemDate = document.createElement("div");
    itemDate.classList.add("comment__item-date");
    itemDate.innerText = new Date(comment.timestamp).toLocaleDateString();
    commentNameDateRow.appendChild(itemDate);

    //created div element : <div class="comment__like-delete">
    const commentLikeDeleteRow = document.createElement("div");
    commentLikeDeleteRow.classList.add("comment__like-delete");
    subContainer.appendChild(commentLikeDeleteRow);

    //created div element : <img class="comment__like">
    const likeElement = document.createElement("img");
    likeElement.classList.add("comment__like")
    likeElement.setAttribute("src", "../assets/icons/SVG/icon-like.svg");
    likeElement.setAttribute("alt", "Like");
    likeElement.setAttribute("id", comment.id);
    likeElement.addEventListener("click", (event) => likeComment(event));
    commentLikeDeleteRow.appendChild(likeElement);

    //Created Span element:<span class="comment__like-span">
    const spanLikeElement = document.createElement("span");
    spanLikeElement.classList.add("comment__like-span");
    spanLikeElement.textContent = comment.likes;
    spanLikeElement.setAttribute("id", comment.id);
    commentLikeDeleteRow.appendChild(spanLikeElement);

    //created div element : <img class="comment__delete">
    const deleteElement = document.createElement("img");
    deleteElement.classList.add("comment__delete");
    deleteElement.setAttribute("src", "../assets/icons/SVG/icon-delete.svg");
    deleteElement.setAttribute("alt", "Delete");
    deleteElement.setAttribute("id", comment.id);
    deleteElement.addEventListener("click", (event) => deleteComment(event));
    commentLikeDeleteRow.appendChild(deleteElement);
}

async function likeComment(event) {
    let response = await bandSiteApi.likeComment(event.target.id);
    event.target.nextElementSibling.textContent = response.likes;
}

async function deleteComment(event) {
    let response = await bandSiteApi.deleteComment(event.target.id);
    getCommentsFromAPI();
}

/** ------------------------------------------------------------------------------------
 * Added EventListener on "comment-form", Below function get called , 
 * when you click on Comments button
 *--------------------------------------------------------------------------------------*/
form.addEventListener("submit", async function (event) {

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
        comment: comment
    };

    await bandSiteApi.postComment(newComment);
    getCommentsFromAPI();

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