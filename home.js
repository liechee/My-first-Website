const addPerson = document.getElementById("add");
const personDetailsSection = document.getElementById("person-details-section");
const cancelAdd = document.getElementById("cancel-add-btn");
const saveBtn = document.getElementById("save-btn");
const firstNameTxt = document.getElementById("first-name");
const lastNameTxt = document.getElementById("last-name");
const personList = document.getElementById("people-list");
const list = document.getElementById("container");

addPerson.addEventListener("click", () => {
  personDetailsSection.style.display = "block";
  list.style.visibility = "hidden";
  personDetailsSection.style.visibility = "visible"
});
cancelAdd.addEventListener("click", () => {
  personDetailsSection.style.display = "none";
  list.style.visibility = "visible";
});
saveBtn.addEventListener("click", () => {
  list.style.visibility = "visible";
  personDetailsSection.style.visibility = "hidden";
  const firstName = firstNameTxt.value;
  const lastName = lastNameTxt.value;

  const newperson = document.createElement("li");
  newperson.append(firstName + " "+lastName);

  personList.prepend(newperson);
});
