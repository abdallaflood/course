// let toh1=document.getElementById("h");
let toform = document.getElementById("todoForm");
let totext = document.getElementById("text");
let toul = document.getElementById("todoItems");

toform.addEventListener("submit", (e) => {
  e.preventDefault();
  let vulText = totext.value;
  let liElement = document.createElement("li");
  toul.append(liElement);
  liElement.textContent = vulText;
  totext.value = ''
  liElement.addEventListener('click',(ev)=>{
    liElement.classList.toggle('done')

  })
});
