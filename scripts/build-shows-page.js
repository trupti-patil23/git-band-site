/**----------------------------------------------------------------------------------------
 * Declare default Array storing show details:Date ,venue, location
 -------------------------------------------------------------------------------------------*/
let showDetailsArray = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    }];

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
        dateValue.innerText = showDetailsArray[i].date;
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
        venueValue.innerText = showDetailsArray[i].venue;
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
    const rows = document.querySelectorAll(".shows__item");
    rows.forEach(row => {
        row.addEventListener("click", function (event) {
            rows.forEach(everyRow => {
                if (everyRow.classList.contains("shows__item--selected")) {
                    everyRow.classList.remove("shows__item--selected");
                    return;
                }
            });
            row.classList.add("shows__item--selected");
        });

        row.addEventListener("mouseover", function (event) {
            row.classList.add("shows__item--hover");
        });
        row.addEventListener("mouseout", function (event) {
            row.classList.remove("shows__item--hover");
        });
    });
}

displayShowDetailsArray();

setBgcolorAsPerState();




