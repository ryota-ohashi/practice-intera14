
export default function mosaic() {

  const mosaic = document.querySelector(".js-mosaic");
  const mosaicPer = 5;

  for (let i = 0; i < 100 / mosaicPer; i++) {
    for (let i = 0; i < 100 / mosaicPer; i++) {
      const elSpan = document.createElement("span");
      elSpan.style.width = mosaicPer + "%";
      elSpan.style.height = mosaicPer + "%";
      mosaic?.appendChild(elSpan);
    }
  }

}