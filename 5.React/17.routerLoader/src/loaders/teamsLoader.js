export async function teamsLoader() {
  try {
    const response = await fetch("http://localhost:5000/api/teams");
    if (response.ok) {
      return response.json();
      // const teams = await response.json();
      // return new Promise((res) => {
      //   setTimeout(() => {
      //     res(teams);
      //   }, 3000);
      // });
    }
  } catch (error) {
    console.log(error);
  }
}
