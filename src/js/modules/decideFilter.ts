
const decideFilter = () => {
  const num = Math.random() * 8;
  if (0 <= num && num <= 1) return "filter-blur"
  if (1 < num && num <= 2) return "filter-brightness"
  if (2 < num && num <= 3) return "filter-contrast"
  if (3 < num && num <= 4) return "filter-grayscale"
  if (4 < num && num <= 5) return "filter-hue-rotate"
  if (5 < num && num <= 6) return "filter-invert"
  if (6 < num && num <= 7) return "filter-sepia"
  if (7 < num && num <= 8) return "filter-saturate"
  return;
}

export default decideFilter;