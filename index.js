const element = document.getElementById("main");
element.style.height = "300px";
element.style.background = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;
element.className = "pet-listing dog";
element.classList.remove("dog");
element.classList.add("cat", "sale");
element.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Kuria Gicheha is the champion";
document.querySelector("main").appendChild(newHeader);
