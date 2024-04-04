const now = new Date();

function displayDay(index) {
  let day = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];

  for (let i = 0; i < day.length; i++) {
    if (i === index) {
      console.log(`Nous sommes ${day[i]}`);
    }
  }
}

displayDay(now.getDay());

console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMonth());
console.log(now.getFullYear());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString("fr-FR"));
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("fr-CA"));

let h2 = document.querySelector("h2");
let p = document.querySelector("p");

h2.innerText = now.toLocaleString("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  //   weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
});

// setInterval(() => {
//   p.innerText = new Date().toLocaleString("fr-FR");
// }, 1000);
