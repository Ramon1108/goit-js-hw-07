import { galleryItems } from "./gallery-items.js";

const imgList = document.querySelector(".gallery");
const imgMarkUp = createImg(galleryItems);

imgList.insertAdjacentHTML("beforeend", imgMarkUp);

function createImg(imgItems) {
  return imgItems
    .map((img) => {
      return `
    <li class="gallery__item">
     <a class="gallery__link" href=${img.original}>
      <img
       class="gallery__image"       
       src = ${img.preview} 
       data-source=${img.original} 
       alt = ${img.description}/>
     </a>
    </li>`;
    })
    .join("");
}

const images = document.querySelector(".gallery");

images.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);
  instance.show();

  const closeLightbox = (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeLightbox);
    }
  };
  document.addEventListener("keydown", closeLightbox);
});
