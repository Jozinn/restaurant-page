import header from "./header";
import main from "./mainn";
import menu from "./menu";
import contact from "./contact";

const content = document.getElementById('content');
const nav = document.getElementsByTagName('a');

function render(option) {
    content.innerHTML = ``;
    content.appendChild(header);
    if (option == 'Main') content.appendChild(main);
    else if (option == 'Menu') content.appendChild(menu);
    else if (option == 'Contact') content.appendChild(contact);
    else content.appendChild(main);
}

render();
header.firstChild.classList.add('selected');

header.addEventListener('click', e => {
    if (e.target.tagName == 'A') {
        render(e.target.textContent);
        console.log(e.target);
        for(let i = 0; i < nav.length; i++) {
            nav[i].classList.remove('selected');
        }
        e.target.classList.add('selected');
    }
});

console.log(nav);