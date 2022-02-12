const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const ulEl = document.getElementById("ul-el");
let myArray = [];
let oldArray = [];
const deleteBtn = document.getElementById("delete-btn");
const getDataFromArray = JSON.parse(localStorage.getItem("myArray"));

console.log(getDataFromArray);
if (getDataFromArray) {
  myArray = getDataFromArray;
  render(myArray);
}
function render(lead) {
  let x = "";
  for (let i = 0; i < lead.length; i++) {
    x += `<li> <a href='#' target='_blank'>${lead[i]}</a></li>`;
  }
  ulEl.innerHTML = x;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myArray = [];
  render(myArray);
});
// console.log(myArray);
buttonEl.addEventListener("click", function () {
  myArray.push(inputEl.value);
  localStorage.setItem("myArray", JSON.stringify(myArray));
  console.log(localStorage.getItem("myArray"));
  render(myArray);
});
