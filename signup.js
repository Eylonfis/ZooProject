document
  .getElementById("create-visitor-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Extract form data
    const name = document.getElementById("visitor-name").value.trim();
    const age = parseInt(document.getElementById("visitor-age").value, 10);
    const image =
      document.getElementById("visitor-image").value.trim() ||
      "default-image.png"; // Provide a default image if none is specified
    const coins = parseInt(document.getElementById("visitor-coins").value, 10);

    // Basic validation
    if (!name || isNaN(age) || age <= 0 || isNaN(coins) || coins < 0) {
      alert("Please fill in the form correctly.");
      return;
    }

    // Retrieve existing visitors from localStorage, or initialize an empty array if none exist
    const visitors = JSON.parse(localStorage.getItem("visitors")) || [];

    // Check if visitor already exists
    if (visitors.some((visitor) => visitor.name === name)) {
      alert("A visitor with this name already exists.");
      return;
    }

    // Create new visitor object and add to the visitors array
    const newVisitor = { name, age, image, coins };
    visitors.push(newVisitor);

    // Save the updated visitors array to localStorage
    localStorage.setItem("visitors", JSON.stringify(visitors));

    // Redirect to the login page or main page
    window.location.href = "zoo.html";
  });
