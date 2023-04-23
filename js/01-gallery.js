import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

const imgList = document.querySelector(".gallery");
const imgMarkUp = createImg(galleryItems);

imgList.insertAdjacentHTML("beforeend", imgMarkUp);

function createImg(imgItems) {
  return imgItems
    .map((img) => {
      return `
    <li>
     <a class = "gallery__link">
      <img class = "gallery__image" src = ${img.preview} alt = ${img.description}/>
     </a>
    </li>`;
    })
    .join("");
}
