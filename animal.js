function renderAnimal() {
  const animal = JSON.parse(localStorage.getItem("currentAnimal"));
  document.getElementById(
    "image"
  ).innerHTML = `<img src="${animal.image}" alt="${animal.name}"/>`;
  document.getElementById("name").textContent = animal.name;
  document.getElementById("weight").textContent = `Weight: ${animal.weight}`;
  document.getElementById("height").textContent = `Height: ${animal.height}`;
  document.getElementById("color").textContent = `Color: ${animal.color}`;
  document.getElementById("habitat").textContent = `Habitat: ${animal.habitat}`;
  document.getElementById("isPredator").textContent = animal.isPredator
    ? "Yes"
    : "No";
}

function renderRelatedAnimals() {
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const animals = JSON.parse(localStorage.getItem("animals")).filter(
    (animal) =>
      animal.habitat === currentAnimal.habitat &&
      animal.name !== currentAnimal.name
  );

  const relatedAnimalsDiv = document.getElementById("related-animals");
  relatedAnimalsDiv.innerHTML = ""; // Clear previous content

  animals.forEach((animal) => {
    const animalCard = `<div><img src="${animal.image}" alt="${animal.name}"/><h3>${animal.name}</h3></div>`;
    relatedAnimalsDiv.innerHTML += animalCard;
  });
}

function feedAnimal() {
  let guestCoins = parseInt(localStorage.getItem("guestCoins"), 10);
  if (guestCoins >= 2) {
    guestCoins -= 2;
    localStorage.setItem("guestCoins", guestCoins.toString());
    alert("Animal fed!");
  } else {
    const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
    if (currentAnimal.isPredator) {
      visitorGotEaten();
    } else {
      animalEscaped();
    }
  }
}

function visitorGotEaten() {
  alert("The visitor has been eaten!");
  // Implement deletion logic for the visitor from the guest database
}

function animalEscaped() {
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  let animals = JSON.parse(localStorage.getItem("animals"));
  animals = animals.filter((animal) => animal.name !== currentAnimal.name);
  localStorage.setItem("animals", JSON.stringify(animals));
  alert("The animal has escaped!");
  // Redirect or update the page to reflect the change
}
document.addEventListener("DOMContentLoaded", () => {
  renderAnimal();
  renderRelatedAnimals();
});
