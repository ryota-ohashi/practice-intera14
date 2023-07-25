import decideFilter from './decideFilter'
import changeFilter from './changeFilter'

export default function mosaic() {

  const mosaic = document.querySelector(".js-mosaic");
  const mosaicPer = 5;

  for (let i = 0; i < 100 / mosaicPer; i++) {
    for (let i = 0; i < 100 / mosaicPer; i++) {
      const elSpan = document.createElement("span");
      elSpan.classList.add(decideFilter());
      elSpan.style.width = mosaicPer + "%";
      elSpan.style.height = mosaicPer + "%";
      mosaic?.appendChild(elSpan);
    }
  }

  mosaic?.querySelectorAll("span").forEach(el => {
    el.addEventListener("mouseover", () => changeFilter(el));
  });

  const update = () => {

    const num = Math.floor(Math.min((Math.random() * (100 / mosaicPer) ** 2 + 1), (100 / mosaicPer) ** 2));
    const target = mosaic?.querySelector("span:nth-child(" + num + ")") as HTMLElement;
    changeFilter(target);

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);

}