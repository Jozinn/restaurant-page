import dish from "./dish";

const menu = document.createElement('div');
menu.classList.add('menu');
menu.appendChild(dish);
menu.appendChild(dish);
menu.appendChild(dish);

export default menu;