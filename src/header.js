const header = document.createElement('div');
const links = [];

for(let i=0; i<3; i++) {
    links[i] = document.createElement('a');
    links[i].classList.add('link');
}

links[0].textContent = 'Home';
links[1].textContent = 'Menu';
links[2].textContent = 'Contact';

for(let i = 0; i < 3; i++) {
    header.appendChild(links[i]);
}

header.classList.add(header);

export default header;