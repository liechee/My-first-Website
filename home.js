const addPerson = document.querySelector("#add");
const personDetailsSection = document.querySelector("#person-details-section");
const cancelAdd = document.querySelector("#cancel-add-btn");
const saveBtn = document.querySelector("#save-btn");
const firstNameTxt = document.querySelector("#first-name");
const lastNameTxt = document.querySelector("#last-name");
const personList = document.querySelector("#people-list");
const list = document.querySelector("#container");

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
