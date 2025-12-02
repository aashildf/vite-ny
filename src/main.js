import "./style.css";
import { v4 as uuidv4 } from "uuid";
window.addEventListener("DOMContentLoaded", () => {
  const pages = [
    {
      id: uuidv4(),
      title: "Kapittel 1",
      text: "Det var en gang i Bergen...",
      image: "/vite-ny/girl_and_dog.png",
    },

    {
      id: uuidv4(),
      title: "Kapittel 2",
      text: "Eller forresten... det regner jo alltid i Bergen!",
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

    // høyre og venstre side i boken
    const left = document.createElement("div");
    left.className = "page";
    left.innerHTML = `<h1>${page.title}</h1><p>${page.text}</p>`;

    const right = document.createElement("div");
    right.className = "page";
    right.innerHTML = `<img src="${page.image}" alt="">`;

    app.appendChild(left);
    app.appendChild(right);

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
