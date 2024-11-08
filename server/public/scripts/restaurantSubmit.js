const handleSubmit = async (event) => {
    // Prevent form from submitting default
    event.preventDefault();

    // Collect data from form
    const formData = new FormData(event.target);
    const newRestaurantData = {
        name: formData.get("restaurant-name"),
        phone: formData.get("phone-number"),
        address: formData.get("address"),
        photo: formData.get("photoURL"),
    };
    console.log("Submitting new restaurant data:", newRestaurantData);
    try {
        // await fetch request to the server
        // send POST request to /create endpoint on server
        const response = await fetch('/create', {
            method: 'POST', // POST request used to send data to server
            headers: {
                'Content-Type': 'application/json', // so server knows to take request body as JSON
            },
            body: JSON.stringify(newRestaurantData), // convert newRestaurantData to JSON string to include into request body
        });

        if (response.ok) {
            // redirect user to restaurants page after success
            window.location.href = '/restaurants';
        } else {
            console.error("Error submitting form:", response.statusText);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

// listening to submit button being clicked
document.addEventListener("DOMContentLoaded", () => {
    // select form restaurant-form
    const form = document.getElementById('restaurant-form');

    if(form) {
        console.log("Form found, adding submit event listener.")
        form.addEventListener('submit', handleSubmit);
    } else {
        console.error("Form not found");
    }
});