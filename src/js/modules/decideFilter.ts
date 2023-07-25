const decideFilter = () => {
  const filters = [
    "filter-blur",
    "filter-brightness",
    "filter-contrast",
    "filter-grayscale",
    "filter-hue-rotate",
    "filter-invert",
    "filter-sepia",
    "filter-saturate"
  ];

  const num = Math.floor(Math.min((Math.random() * filters.length + 1), filters.length));
  return filters[num];
}

export default decideFilter;