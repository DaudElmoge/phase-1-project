document.addEventListener("DOMContentLoaded", () => {
  //fetching the data from the json file
  fetch("car.json")
    .then((response) => response.json()) //converting the response to json
    .then((data) => {
      //displaying the cars
      displayCars(data.cars); //calling the displayCars function
    });
});

function displayCars(cars) {
  //displaying the cars
  const container = document.getElementById("cars-container"); //getting the cars container
  container.innerHTML = ""; //setting the inner html to empty

  cars.forEach((car) => {
    //iterating through the cars
    const carCard = document.createElement("div"); //creating a div element
    carCard.classList.add("car-card"); //adding a class to the div element

    carCard.innerHTML = `
            <h2>${car.make} ${car.model} (${car.year})</h2>
            <img src="${car.image}" alt="${car.model}">
            <button onclick="toggleDetails('${car.id}')">Show Details</button>
            <div class="details" id="details-${car.id}" style="display: none;">
                <p><strong>Engine:</strong> ${car.engine}</p>
                <p>${car.description}</p>
                <ul>
                  ${(Array.isArray(car.specs) ? car.specs : [])
                    .map((spec) => `<li>${spec}</li>`)
                    .join("")}
                </ul>
            </div>
        `; //setting the inner html of the div element

    container.appendChild(carCard); //appending the div element to the container
  });
}

function toggleDetails(id) {
  //toggling the details
  const details = document.getElementById(`details-${id}`); //getting the details
  details.style.display = details.style.display === "none" ? "block" : "none"; //toggling the display of the details
}

//footer
document.addEventListener("DOMContentLoaded", () => {
  //adding the footer
  const footer = document.createElement("footer"); //creating a footer element
  footer.className = "footer"; //adding a class to the footer element
  footer.innerHTML = `
        <p>Contact:<a href="mailto:daudwahab1320@gmail.com">daudwahab1320@gmail.com</a></p>
    `; //setting the inner html of the footer
    

  const feedbackBox = document.createElement("div");
  feedbackBox.className = "feedback-box";
  feedbackBox.innerHTML = `
        <h3>Feedback</h3>
        <input type="text" placeholder="Your Name" id="feedback-name">
        <textarea placeholder="Your Feedback" id="feedback-message"></textarea>
        <button id="submit-feedback">Submit</button>
    `;
  feedbackBox.style.backgroundColor = "#333"; //setting the background color of the feedback box
  feedbackBox.style.color = "white";
  document.body.appendChild(feedbackBox); //appending the feedback box to the body
  document.body.appendChild(footer); //appending the footer to the body

  document.getElementById("submit-feedback").addEventListener("click", () => {
    //adding an event listener to the submit feedback button
    const name = document.getElementById("feedback-name").value; //getting the value of the name input
    const message = document.getElementById("feedback-message").value; //getting the value of the message input
    if (name && message) {
      //checking if the name and message are not empty
      alert(`Thank you for your feedback, ${name}!`); //displaying an alert
      document.getElementById("feedback-name").value = ""; //setting the value of the name input to empty
      document.getElementById("feedback-message").value = ""; //setting the value of the message input to empty
    } else {
      //if the name and message are empty
      alert("Please fill out all fields before submitting."); //displaying an alert
    }
  });
});
