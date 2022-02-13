let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("button-el");
let ulEl = document.getElementById("ul-el");
let myArray = [];
let oldArray = [];
let deleteBtn = document.querySelector("#delete-el");
let tabBtn = document.querySelector("#tab-btn");
let myObj = [{ linkedin: "http://www.linkedin.com/" }];

tabBtn.addEventListener("click", function () {
  myArray.push(myObj[0].linkedin);
  localStorage.setItem("myArray", JSON.stringify(myArray));
  render(myArray);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myArray = [];
  render(myArray);
});

function render(array) {
  let x = "";
  for (let i = 0; i < array.length; i++) {
    x += `<li><a href='${array[i]}'  target='_blank'>${array[i]} </a></li>`;
  }
  ulEl.innerHTML = x;
}
buttonEl.addEventListener("click", function () {
  myArray.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myArray", JSON.stringify(myArray));
  console.log(localStorage.getItem("myArray"));
  render(myArray);
});
