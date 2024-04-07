// selectors
const mainList = document.querySelector(".mainList");

//create a div
const div = document.createElement("div");
//append div to the main div
mainList.appendChild(div);

const portifolioItems = [
  {
    title: "SNABB FOOD",
    description: "We work to serve people with the best service",
    image: "/foodora logo.jpeg",
  },
  {
    title: "Item 1",
    description: "This is the way we package the food before delivery",
    image: "/foodora image.webp",
  },
  {
    title: "Item 2",
    description: "With bykes it takes few minutes to reach our clients",
    image: "/foodora byke.jpeg",
  },
];

// rendering my javascript to html

function renderPortifolioItem(item) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("portifolioItems");

  // Render title
  const title = document.createElement("h2");
  title.classList.add("titles");
  title.textContent = item.title;

  // Render description
  const description = document.createElement("h3");
  description.textContent = item.description;

  // Render image
  const image = document.createElement("img");
  image.classList.add("small-img");
  image.src = item.image;
  image.alt = item.title;

  //  append renders to the main div
  itemDiv.appendChild(image);
  itemDiv.appendChild(description);
  itemDiv.appendChild(title);
  mainList.appendChild(itemDiv);
}

portifolioItems.forEach(renderPortifolioItem);
