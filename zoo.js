// Example initialization script to populate localStorage with mock data
document.addEventListener("DOMContentLoaded", () => {
  const animals = [
    {
      name: "Lion",
      isPredator: true,
      habitat: "land",
      weight: 190,
      height: 120,
      color: "yellow",
    },
    {
      name: "Shark",
      isPredator: true,
      habitat: "sea",
      weight: 500,
      height: 300,
      color: "grey",
    },
    // Add more animal objects...
  ];

  // Only set the initial data if it doesn't exist yet
  if (!localStorage.getItem("animals")) {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  renderAvailableAnimals(); // Initial render
});

function renderAvailableAnimals() {
  const animals = JSON.parse(localStorage.getItem("animals")) || [];
  const filters = JSON.parse(localStorage.getItem("filters")) || {};
  const animalCards = document.getElementById("animal-cards");
  animalCards.innerHTML = ""; // Clear existing cards

  const filteredAnimals = animals.filter((animal) => {
    // Apply filters here, for simplicity, showing all animals
    return true; // Remove this line when actual filter logic is implemented
  });

  filteredAnimals.forEach((animal) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${animal.name}</h3>
      <p>Weight: ${animal.weight} kg</p>
      <p>Height: ${animal.height} cm</p>
      <p>Color: ${animal.color}</p>
      <button onclick="visitAnimal('${animal.name}')">Visit</button>
    `;
    card.className = "animal-card";
    animalCards.appendChild(card);
  });
}

function visitAnimal(animalName) {
  const animals = JSON.parse(localStorage.getItem("animals")) || [];
  const selectedAnimal = animals.find((animal) => animal.name === animalName);
  if (selectedAnimal) {
    localStorage.setItem("selectedAnimal", JSON.stringify(selectedAnimal));
    window.location.href = "animal-detail.html"; // Ensure you have this page
  } else {
    alert("Animal not found");
  }
}
function setFilter(filterKey, filterValue) {
  const currentFilters = JSON.parse(localStorage.getItem("filters")) || {};
  currentFilters[filterKey] = filterValue;
  localStorage.setItem("filters", JSON.stringify(currentFilters));
  renderAvailableAnimals(); // Re-render animals with new filters
}
/*
 * ממשו את הלוגיקה של השמת פילטר
 * הפילטרים הקיימים הם
 * isPredator: true | false
 * habitat: "land" | "sea"
 * weight: value > user selected weight
 * height: value > user selected height
 * color: dropdown of all available colors
 */
// ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
// רנדרו רק את החיות שעומדות בתנאים של הפילטרים
