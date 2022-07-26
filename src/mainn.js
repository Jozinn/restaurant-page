const main = document.createElement('div');
main.classList.add('main');

const leftCol = document.createElement('div');
leftCol.classList.add('left-col');
leftCol.innerHTML = `<h1>Kebab</h1>
    <p class="gray">Some description of kebab, lorem ipsum dolor sit amet, blah, blah, blah...</p>
    <p class="white">
        <i class="arrow left"></i>
        <span class="bold">1<span class="gray"> / 3</span></span>
        <i class="arrow right"></i>
    </p>`;

const rightCol = document.createElement('div');
rightCol.classList.add('right-col');
rightCol.innerHTML = `<img src="./kebab.jpg" alt="kebab photo">`;

main.appendChild(leftCol);
main.appendChild(rightCol);

export default main;