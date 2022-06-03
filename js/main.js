const itemList = document.querySelector("#list-group");
const itemName = document.querySelector("#item-name");
const addBtn = document.querySelector("#add-item-btn");
const deleteBtn = document.querySelector("#delete-btn");

const createNewItem = () => {
  const newItem = document.createElement("li");
  newItem.classList.add("list-group-item", "align-items-center");

  const addCheckBox = document.createElement("input");
  addCheckBox.classList.add("form-check-input", "me-2", "float-start");
  addCheckBox.setAttribute("id", "flexCheckDefault");
  addCheckBox.setAttribute("type", "checkbox");
  addCheckBox.addEventListener("click", () =>
    newItem.classList.toggle("checked")
  );

  const newCloseBtn = document.createElement("button");
  newCloseBtn.classList.add("btn-close", "float-end");
  newCloseBtn.setAttribute("id", "delete-btn");
  newCloseBtn.addEventListener("click", () => newItem.remove());

  if (itemName.value != "") {
    newItem.innerText = itemName.value;
    newItem.appendChild(addCheckBox);
    newItem.appendChild(newCloseBtn);
    itemList.insertBefore(newItem, itemList.firstChild);
    itemName.value = "";
  } else {
    alert("Item field can't be blank");
  }
};

addWithEnter = (event) => {
  if (event.keyCode == 13) {
    addBtn.click();
  }
};

addBtn.addEventListener("click", createNewItem);
