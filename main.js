let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("button-el");
let ulEl = document.getElementById("ul-el");
let myArray = [];

buttonEl.addEventListener("click", function () {
  myArray.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myArray", JSON.stringify(myArray));
  console.log(localStorage.getItem("myArray"));
  renderElement();
});

function renderElement() {
  let x = "";
  for (let i = 0; i < myArray.length; i++) {
    x +=
      "<li>" + "<a href='#'  target='_blank'>" + myArray[i] + "</a>" + "</li>";
  }
  ulEl.innerHTML = x;
}
