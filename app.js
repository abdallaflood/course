// let toh1=document.getElementById("h");
let formElement = document.getElementById("todoForm");
let inputElement = document.getElementById("text");
let toul = document.getElementById("todoItems");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let vulText = inputElement.value;
  let liElement = document.createElement("li");
  toul.append(liElement);
  liElement.textContent = vulText;
  inputElement.value = ''
  liElement.addEventListener('click',(ev)=>{
    liElement.classList.toggle('done')

  })
});
