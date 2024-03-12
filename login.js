function displayGuests() {
  const guests = JSON.parse(localStorage.getItem("guests")) || [];
  const guestContainer = document.getElementById("guestContainer");
  guestContainer.innerHTML = ""; // Clear existing guests

  guests.forEach((guest) => {
    const guestCard = document.createElement("div");
    guestCard.className = "card";
    guestCard.innerHTML = `
      <img src="${guest.image}" alt="Guest Image">
      <h3>${guest.name}</h3>
      <p>Coins: ${guest.coins}</p>
      <button onclick="loginAsVisitor('${guest.name}')">Select</button>
    `;
    guestContainer.appendChild(guestCard);
  });
}

function loginAsVisitor(visitorName) {
  localStorage.setItem("currentVisitor", visitorName);
  alert(`${visitorName} is now the current visitor.`);
  window.location.href = "zoo.html"; // Redirect to main zoo page or wherever appropriate
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if there's already a selected guest
  const currentVisitor = localStorage.getItem("currentVisitor");
  if (currentVisitor) {
    if (
      confirm(
        `${currentVisitor} is currently selected. Do you want to switch visitors?`
      )
    ) {
      localStorage.removeItem("currentVisitor"); // Optional: Clear the current visitor if switching
      // Refresh the page or reset UI elements as needed
    }
  }

  displayGuests();
  document
    .getElementById("searchGuest")
    .addEventListener("input", filterGuests);
});

function filterGuests() {
  const searchValue = document
    .getElementById("searchGuest")
    .value.toLowerCase();
  const guests = JSON.parse(localStorage.getItem("guests")) || [];
  const filteredGuests = guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchValue)
  );

  // Re-display guests based on the filter without altering the original guests array in localStorage
  displayFilteredGuests(filteredGuests);
}

function displayFilteredGuests(filteredGuests) {
  const guestContainer = document.getElementById("guestContainer");
  guestContainer.innerHTML = ""; // Clear existing guests

  filteredGuests.forEach((guest) => {
    const guestCard = document.createElement("div");
    guestCard.className = "card";
    guestCard.innerHTML = `
      <img src="${guest.image}" alt="Guest Image">
      <h3>${guest.name}</h3>
      <p>Coins: ${guest.coins}</p>
      <button onclick="loginAsVisitor('${guest.name}')">Select</button>
    `;
    guestContainer.appendChild(guestCard);
  });
}
