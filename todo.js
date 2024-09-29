let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let listItems = document.querySelector("#list-container");

btn.addEventListener(
  "click",
  () => {
    if (input.value === "") {
      alert("You Must Write somrthing!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      listItems.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    input.value = "";
    saveData();
  },
  false
);

listItems.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//for saving in our browser
function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function showtask() {
  listItems.innerHTML = localStorage.getItem("data");
}
showtask();
