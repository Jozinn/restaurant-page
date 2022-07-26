const dish = document.createElement('div');
dish.classList.add('dish');
dish.innerHTML = `<img src="./kebab.jpg " alrt="kebab photo">
    <div class="desc">
        <p class="dish-name">Kebab</p>
        <p>15.00 PLN</p>
    </div>
    <div class="new-badge">new</div>`;

/* const img = document.createElement('img');
img.src = './kebab.jpg';
img.alt = 'kebab photo';

const desc = document.createElement('div');
desc.classList.add('desc');
desc.innerHTML = `<p class="dish-name">Kebab</p>
    <p>15.00 PLN</p>`;

const newBadge = document.createElement('div');
newBadge.classList.add('new-badge');
newBadge.textContent = "new";

dish.appendChild(img);
dish.appendChild(desc);
dish.appendChild(newBadge); */

export default dish;