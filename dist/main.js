(()=>{"use strict";const e=document.createElement("div"),n=[];for(let e=0;e<3;e++)n[e]=document.createElement("a");n[0].textContent="Home",n[1].textContent="Menu",n[2].textContent="Contact";for(let t=0;t<3;t++)e.appendChild(n[t]);e.classList.add(e);const t=e,a=document.createElement("div");a.classList.add("main");const d=document.createElement("div");d.classList.add("left-col"),d.innerHTML='<h1>Kebab</h1>\n    <p class="gray">Some description of kebab, lorem ipsum dolor sit amet, blah, blah, blah...</p>\n    <p class="white">\n        <i class="arrow left"></i>\n        <span class="bold">1<span class="gray"> / 3</span></span>\n        <i class="arrow right"></i>\n    </p>';const s=document.createElement("div");s.classList.add("right-col"),s.innerHTML='<img src="./kebab.jpg" alt="kebab photo">',a.appendChild(d),a.appendChild(s);const i=a,c=document.createElement("div");c.classList.add("dish"),c.innerHTML='<img src="./kebab.jpg " alrt="kebab photo">\n    <div class="desc">\n        <p class="dish-name">Kebab</p>\n        <p>15.00 PLN</p>\n    </div>\n    <div class="new-badge">new</div>';const l=c,o=document.createElement("div");o.classList.add("menu"),o.appendChild(l),o.appendChild(l),o.appendChild(l);const p=o,r=document.createElement("div");r.classList.add("contact"),r.innerHTML='<h2>Contact</h2>\n    <div class="flex-cont">\n        <div class="wrapper">\n            <h6>Adress</h6>\n            <p>2137 xyz street, 69-420 SomeTown</p>\n        </div>\n        <div class="wrapper">\n            <h6>Phone number</h6>\n            <p>420 2137 6969</p>\n        </div>\n        <div class="wrapper">\n            <h6>E-mail</h6>\n            <p>someemail@domain.com</p>\n        </div>\n    </div>';const m=r,h=document.getElementById("content");function b(e){h.innerHTML="",h.appendChild(t),"Main"==e?h.appendChild(i):"Menu"==e?h.appendChild(p):"Contact"==e?h.appendChild(m):(h.appendChild(i),t.firstChild.classList.add("selected"))}t.addEventListener("click",(e=>{b(e.target.textContent),e.target.classList.add("selected")})),b("Main")})();