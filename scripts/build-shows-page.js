import { BandSiteAPI } from "../scripts/band-site-api.js";
import { BANDSITE_API_KEY, formatDate } from "../scripts/utils.js";

const bandSiteApi = new BandSiteAPI(BANDSITE_API_KEY);


let showDetailsArray = [];

/**
 * Added method to call getShows() method from BandSiteAPI
 */
async function getShowDetailsFromAPI() {
    showDetailsArray = await bandSiteApi.getShows();
    displayShowDetailsArray();
    setBgcolorAsPerState();
}

/**
 * Added below function, for populating show details(date,venue,location) dynamically from array 
 * and displayed on HTML page
 */
function displayShowDetailsArray() {
    const ulElement = document.querySelector(".shows__list");

    //Created <li>:for headers (DATE, VENUE, LOCATION) for tablet and desktop view
    const liHeaderElement = document.createElement("li");
    liHeaderElement.classList.add("shows__heading-item");
    ulElement.appendChild(liHeaderElement);

    const headerDateElement = document.createElement("div");
    headerDateElement.innerText = "DATE";
    headerDateElement.classList.add("shows__heading-label");
    liHeaderElement.appendChild(headerDateElement);

    const headerVenueElement = document.createElement("div");
    headerVenueElement.innerText = "VENUE";
    headerVenueElement.classList.add("shows__heading-label");
    liHeaderElement.appendChild(headerVenueElement);

    const headerLocElement = document.createElement("div");
    headerLocElement.innerText = "LOCATION";
    headerLocElement.classList.add("shows__heading-label");
    liHeaderElement.appendChild(headerLocElement);

    for (let i = 0; i < showDetailsArray.length; i++) {

        //Created <li> element : <li class="shows__item">
        const liElement = document.createElement("li");
        liElement.classList.add("shows__item");
        ulElement.appendChild(liElement);

        //Created <div> element -----------------DATE---------------------------------

        const liFirstChild = document.createElement("div");
        liFirstChild.classList.add("shows__item-child");
        liElement.appendChild(liFirstChild);

        //Created <div> element : <div class="shows__label">DATE</div>
        const dateLabel = document.createElement("div");
        dateLabel.innerText = "DATE";
        dateLabel.classList.add("shows__label");
        liFirstChild.appendChild(dateLabel);

        //Created <div> element :<div class="shows__value">
        const dateValue = document.createElement("div");
        dateValue.classList.add("shows__date-value");
        dateValue.innerText = formatDate(showDetailsArray[i].date);
        liFirstChild.appendChild(dateValue);

        //--------------------------------------------------------------------------
        //Created <div> element -----------------VENUE------------------------------

        const liSecondChild = document.createElement("div");
        liSecondChild.classList.add("shows__item-child");
        liElement.appendChild(liSecondChild);

        //Created <div> element : <div class="shows__label">VENUE</div>
        const venueLabel = document.createElement("div");
        venueLabel.innerText = "VENUE";
        venueLabel.classList.add("shows__label");
        liSecondChild.appendChild(venueLabel);

        //Created <div> element :<div class="shows__value">
        const venueValue = document.createElement("div");
        venueValue.classList.add("shows__value");
        venueValue.innerText = showDetailsArray[i].place;
        liSecondChild.appendChild(venueValue);

        //---------------------------------------------------------------------------
        //Created <div> element -----------------LOCATION----------------------------

        const liThirdChild = document.createElement("div");
        liThirdChild.classList.add("shows__item-child");
        liElement.appendChild(liThirdChild);

        //Created <div> element : <div class="shows__label">LOCATION</div>
        const locationLabel = document.createElement("div");
        locationLabel.innerText = "LOCATION";
        locationLabel.classList.add("shows__label");
        liThirdChild.appendChild(locationLabel);

        //Created <div> element :<div class="shows__value">
        const locationValue = document.createElement("div");
        locationValue.classList.add("shows__value");
        locationValue.innerText = showDetailsArray[i].location;
        liThirdChild.appendChild(locationValue);

        //---------------------------------------------------------------------------

        //Created <button> element:<button class="shows__button">BUY TICKETS</button>
        const liFourthChild = document.createElement("button");
        liFourthChild.innerText = "BUY TICKETS";
        liFourthChild.classList.add("shows__button");
        liElement.appendChild(liFourthChild);

        //Created <div> element:<div class="shows__divider"></div>
        const liFifthChild = document.createElement("div");
        liFifthChild.classList.add("shows__divider");
        liElement.appendChild(liFifthChild);
    }
}

/**
 * Added below function to set background color as per states, 
 * hover state(color:Alabaster) and Selected state(color:Mercury)
 * Item will stay selected until other showitem is clicked.
 * 
 */
function setBgcolorAsPerState() {
    const rows = document.getElementsByClassName("shows__item");
    let priorSelected = null;
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function()  {            
            let selectedItem =rows[i];          
            if(priorSelected!=null) {
                priorSelected.classList.remove("shows__item--selected");
            }
            selectedItem.classList.add("shows__item--selected");
            priorSelected = selectedItem;            
        });
    }
}

getShowDetailsFromAPI();

