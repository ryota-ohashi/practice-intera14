import decideFilter from './decideFilter'

const changeFilter = (el:HTMLElement) => {
  const className = decideFilter();
  el.removeAttribute("class");
  if (className) el.classList.add(className);
}

export default changeFilter;