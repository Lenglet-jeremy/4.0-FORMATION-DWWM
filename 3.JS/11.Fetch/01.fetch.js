const users = fetch("https://jsonplaceholder.typicode.com/users");
const ul = document.querySelector("ul");

users.then(async (response) => {
  try {
    const allUser = await response.json();
    console.log(allUser);
    displayUser(allUser);
  } catch (error) {
    console.log(error);
  }
});

function displayUser(tableauRecupere) {
  tableauRecupere.map((user) => {
    const li = document.createElement("li");
    li.innerText = user.name + " | " + user.email;
    ul.append(li);
  });
}
