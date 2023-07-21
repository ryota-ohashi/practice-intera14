import decideFilter from './decideFilter'
import changeFilter from './changeFilter'

export default function mosaic() {

  const mosaic = document.querySelector(".js-mosaic");
  const mosaicPer = 5;

  for (let i = 0; i < 100 / mosaicPer; i++) {
    for (let i = 0; i < 100 / mosaicPer; i++) {
      const elSpan = document.createElement("span");
      const className = decideFilter();
      if (className) elSpan.classList.add(className);
      elSpan.style.width = mosaicPer + "%";
      elSpan.style.height = mosaicPer + "%";
      mosaic?.appendChild(elSpan);
    }
  }
  mosaic?.querySelectorAll("span").forEach(el => {
    el.addEventListener("mouseover", (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if(target) changeFilter(target);
    });
  });

}