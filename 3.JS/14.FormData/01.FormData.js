const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);

  for (let item of formData) {
    console.log(item);
  }
  fetch("http://monServeur", {
    method: "POST",
    body: formData,
  });
});


