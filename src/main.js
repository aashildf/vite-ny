import "./style.css";
import { v4 as uuidv4 } from "uuid";
window.addEventListener("DOMContentLoaded", () => {
  const pages = [
    {
      id: uuidv4(),
      title: "Kapittel 1",
      text: "Det var en gang...",
      image: "/vite-ny/girl_and_dog.png",
    },

    {
      id: uuidv4(),
      title: "Kapittel 2",
      text: "Så skjedde det noe...",
      image: "/vite-ny/umbrella.png",
    },
  ];
  console.log("Alle sidene har unike IDer:", pages);

  let currentPage = 0;
  function renderPage(index) {
    const page = pages[index];
    const app = document.querySelector("#app");

    // tøm kontainer
    app.innerHTML = "";

    // lage elementene
    const h1 = document.createElement("h1");
    h1.id = uuidv4();

    h1.className = "title";
    h1.textContent = page.title;

    const p = document.createElement("p");
    p.id = uuidv4();
    p.className = "story";
    p.textContent = page.text;

    const img = document.createElement("img");
    img.id = uuidv4();
    img.className = "illustration";
    img.src = page.image;

    app.appendChild(h1);
    app.appendChild(p);
    app.appendChild(img);
  }

  // vis første side
  renderPage(currentPage);

  // bla frem og tilbake

  document.getElementById("next").addEventListener("click", () => {
    console.log("clicked next");
    if (currentPage < pages.length - 1) {
      currentPage++;

      renderPage(currentPage);
    }
  });

  document.querySelector("#prev").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
    }
  });
});
