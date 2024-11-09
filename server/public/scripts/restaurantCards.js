/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
    const { restart } = require("nodemon");
  */
document.addEventListener("DOMContentLoaded", function() {
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
