const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3/";
const BASE_IMG = "https://image.tmdb.org/t/p/w500";

let search = "movie/top_rated";
let media;

const divMedia = document.querySelector(".media");

async function getMedia(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    media = data.results;
    console.log(media);
    displayMedia();
  } catch (error) {
    console.log(error);
  }
}

const displayMedia = () => {
  const mediaNode = media.map((m, i) => {
    return createMediaElement(m);
  });
  divMedia.append(...mediaNode);
};

const createMediaElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  h3.innerText = value.title;
  const h4 = document.createElement("h4");
  h4.innerText = value.vote_average.toFixed(1);
  h4.classList.add("note");
  div.append(img, h3, h4);
  return div;
};

getMedia(`${BASE_URL}${search}?api_key=${API_KEY}&language=fr-FR&page=1`);
