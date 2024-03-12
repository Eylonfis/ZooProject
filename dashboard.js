function showVisitedAnimals() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const visitedAnimals = currentVisitor.visitedAnimals || [];
  const container = document.getElementById("visited-animals");
  visitedAnimals.forEach((animalName) => {
    const animalElement = document.createElement("p");
    animalElement.textContent = animalName;
    container.appendChild(animalElement);
  });
}

function showFeededAnimals() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const feededAnimals = currentVisitor.feededAnimals || [];
  const container = document.getElementById("feeded-animals");
  feededAnimals.forEach((animalName) => {
    const animalElement = document.createElement("p");
    animalElement.textContent = animalName;
    container.appendChild(animalElement);
  });
}

function showFavoriteAnimal() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const visits = currentVisitor.animalVisits || {}; // Assuming {animalName: visitCount}
  const favoriteAnimal = Object.keys(visits).reduce(
    (a, b) => (visits[a] > visits[b] ? a : b),
    null
  );
  const container = document.getElementById("favorite-animal");
  if (favoriteAnimal) {
    container.textContent += ` ${favoriteAnimal} (Visited ${visits[favoriteAnimal]} times)`;
  } else {
    container.textContent += " No favorite animal recorded.";
  }
}

// Execute functions to display data on dashboard load
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  if (!nav) {
    console.error("Navigation bar not found.");
    return;
  }
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  // Add click event listener to the reset button
  resetButton.addEventListener("click", function () {
    localStorage.clear(); // Clear localStorage
    window.location.reload(); // Reload the application
  });
  showVisitedAnimals();
  showFeededAnimals();
  showFavoriteAnimal();
});
