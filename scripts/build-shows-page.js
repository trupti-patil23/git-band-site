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
    const uiElement = document.querySelector(".shows__list");

    for (let i = 0; i < showDetailsArray.length; i++) {
        //Created <li> element : <li class="shows__item">
        const liElement = document.createElement("li");
        liElement.classList.add("shows__item");
        uiElement.appendChild(liElement);

        //Created <div> element -----------------DATE---------------------------------

        const divChild1 = document.createElement("div");
        liElement.appendChild(divChild1);

        //Created <span> element : <span class="shows__label">DATE</span>
        const dateLabel = document.createElement("div");
        dateLabel.innerText = "DATE";
        dateLabel.classList.add("shows__label");
        divChild1.appendChild(dateLabel);

        //Created <div> element :<div class="shows__value">
        const dateValue = document.createElement("div");
        dateValue.classList.add("shows__value");
        dateValue.innerText = showDetailsArray[i].date;
        divChild1.appendChild(dateValue);

        //--------------------------------------------------------------------------
        //Created <div> element -----------------VENUE------------------------------

        const divChild2 = document.createElement("div");
        liElement.appendChild(divChild2);

        //Created <span> element : <span class="shows__label">VENUE</span>
        const venueLabel = document.createElement("div");
        venueLabel.innerText = "VENUE";
        venueLabel.classList.add("shows__label");
        divChild2.appendChild(venueLabel);

        //Created <div> element :<div class="shows__value">
        const venueValue = document.createElement("div");
        venueValue.classList.add("shows__value");
        venueValue.innerText = showDetailsArray[i].venue;
        divChild2.appendChild(venueValue);

        //---------------------------------------------------------------------------
        //Created <div> element -----------------LOCATION----------------------------

        const divChild3 = document.createElement("div");
        liElement.appendChild(divChild3);

        //Created <span> element : <span class="shows__label">LOCATION</span>
        const locationLabel = document.createElement("div");
        locationLabel.innerText = "LOCATION";
        locationLabel.classList.add("shows__label");
        divChild3.appendChild(locationLabel);

        //Created <div> element :<div class="shows__value">
        const locationValue = document.createElement("div");
        locationValue.classList.add("shows__value");
        locationValue.innerText = showDetailsArray[i].location;
        divChild3.appendChild(locationValue);

        //---------------------------------------------------------------------------

        //Created <button> element:<button class="shows__button">BUY TICKETS</button>
        const buttonChild4 = document.createElement("button");
        buttonChild4.innerText = "BUY TICKETS";
        buttonChild4.classList.add("shows__button");
        liElement.appendChild(buttonChild4);

        //Created <div> element:<div class="shows__divider"></divdiv>
        const divChild5 = document.createElement("div");
        divChild5.classList.add("shows__divider");
        liElement.appendChild(divChild5);
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




