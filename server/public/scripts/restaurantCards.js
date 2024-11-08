/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
    const { restart } = require("nodemon");
  */
document.addEventListener("DOMContentLoaded", function() {
    // load all restaurants
    //loadRestaurants();
    // select container
    const container = document.querySelector(".restaurant-grid");
    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            const card = event.target.closest(".restaurant");
            const restaurantId = card.getAttribute("data-id");
            deleteItem(restaurantId, card);
        }
    })
});

function deleteItem(restaurantId) {
    // fetch restaurant to delete by id
    fetch (`/api/restaurants/${restaurantId}`, {method: 'DELETE'})
        .then(() => {
            // reload page when button clicked
            window.location.reload();
        })
        // catch error
        .catch(error => {
             console.error('Error deleting items', error)
        });
}

// // function to render a single restaurant card
// function renderRestaurantCard(restaurant) {
//     // select container where restaurant cards will display
//     const container = document.querySelector(".restaurant-grid");

//     // create new element to represent restaurant card
//     const card = document.createElement("div");
//     card.classList.add("restaurant");
//     card.setAttribute("data-id", restaurant.id);

//     // inner HTML of the card with details
//     card.innerHTML = `
//         <img src ="${restaurant.photo}" alt="${restaurant.name}">
//             <h4>${restaurant.name}</h4>
//             <p>${restaurant.address}</p>
//             <p>${restaurant.phone}</p>
//             <button class="delete" data-id="${restaurant.id}">X</button>
//             `;
//     container.appendChild(card);
// }

// function loadRestaurants() {
//     fetch('/api/restaurants')
//         .then(response => response.json())
//         .then(restaurants => {
//             // console.log("Loaded restaurants:", restaurants); // Check received data
//             document.querySelector(".restaurant-grid").innerHTML = ""; // Clear existing cards
//             restaurants.forEach(renderRestaurantCard)
//         })
//         .catch(error => console.error("Error loading restaurants:", error));
// }
// document.addEventListener("DOMContentLoaded", loadRestaurants);
