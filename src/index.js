import header from "./header";
import main from "./mainn";
import menu from "./menu";
import contact from "./contact";

const content = document.getElementById('content');

function render(option) {
    content.innerHTML = ``;
    content.appendChild(header);
    if (option == 'Main') content.appendChild(main);
    else if (option == 'Menu') content.appendChild(menu);
    else if (option == 'Contact') content.appendChild(contact);
    else {
        content.appendChild(main);
        header.firstChild.classList.add('selected');
    }
}

header.addEventListener('click', e => {
    render(e.target.textContent);
    e.target.classList.add('selected');
});

render('Main');