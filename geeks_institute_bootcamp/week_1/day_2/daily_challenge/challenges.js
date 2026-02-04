// ====== Daily Challenge 1 ======

// ----------- Planets -------------
let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

let colors = [
  "brown",
  "gray",
  "blue",
  "red",
  "orange",
  "gold",
  "lightblue",
  "darkblue",
];

let moons = [0, 0, 1, 2, 4, 8, 7, 4];

const section = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {
  const planetDiv = document.createElement("div");
  planetDiv.setAttribute("class", "planet");
  //   planetDiv.textContent = planets[i];
  planetDiv.style.backgroundColor = colors[i];
  section.appendChild(planetDiv);

  for (let j = 0; j < moons[i]; j++) {
    const moonDiv = document.createElement("div");
    moonDiv.setAttribute("class", "moon");
    moonDiv.style.backgroundColor = "white";
    moonDiv.style.top = 45 + "px";
    moonDiv.style.left = j * 30 + "px";
    planetDiv.appendChild(moonDiv);
  }
}

// ====== Daily Challenge 2 ======

// ----------- Words in the stars -------------
