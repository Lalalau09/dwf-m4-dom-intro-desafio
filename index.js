const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl= document.querySelector(".lista")



  const itemEls= document.querySelectorAll(".lista li")
  for (const el of itemEls) {
   el.remove()
    
  }

  for( let item of cosasQueAprendimos)
 {
 const newLi= document.createElement("li")
 newLi.textContent =item.tema
const newClass = item.class || "item"

newLi.classList.add(newClass)
;
listaEl.appendChild(newLi)

}
}

main();
