const user = {
    lastName: "Doe",
    firstName: "Jane",
    email: "jane.doe@gmail.com",
    age: 34,
    married: false,
  };

  const users = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      "Acces-Control-Allow-Origin": "*",
    },
  });

  users.then(async (response) => {
    try {
      const body = await response.json();
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  });