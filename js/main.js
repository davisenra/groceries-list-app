const itemList = document.querySelector("#list-group");
const itemName = document.querySelector("#item-name");
const addBtn = document.querySelector("#add-item-btn");
const deleteBtn = document.querySelector("#delete-btn");

const createNewItem = () => {
  const newItem = document.createElement("li");
  newItem.classList.add(
    "list-group-item",
    "d-flex",
    "gap-2",
    "justify-content-between"
  );

  const newCloseBtn = document.createElement("button");
  newCloseBtn.setAttribute("class", "btn-close");
  newCloseBtn.setAttribute("id", "delete-btn");
  newCloseBtn.addEventListener("click", () => newItem.remove());

  if (itemName.value != "") {
    newItem.innerText = itemName.value;
    newItem.appendChild(newCloseBtn);
    itemList.insertBefore(newItem, itemList.firstChild);
    itemName.value = "";
  } else {
    alert("Item field can't be blank");
  }
};

addBtn.addEventListener("click", createNewItem);
