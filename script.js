const inputBox = document.getElementById("input-box"); // Get the input box element
const listContainer = document.getElementById("list-container"); // Get the list container element

function AddTask() {
  if (inputBox.value === "") {
    alert("You must write something"); // Show an alert if input is empty
  } else {
    let li = document.createElement("li"); // Create a new list item
    li.innerHTML = inputBox.value; // Set its content from the input box
    listContainer.appendChild(li); // Add the list item to the container

    let span = document.createElement("span"); // Create a close button
    span.innerHTML = "\u00d7"; // Set its content to "×"
    li.appendChild(span); // Add the close button to the list item
  }
  inputBox.value = ""; // Clear the input box
  saveData(); // Save the updated list to local storage
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle the "checked" class on list item
      saveData(); // Save the updated list
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the list item when close button is clicked
      saveData(); // Save the updated list
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Save list content to local storage
}

function showtask() {
  listContainer.innerHTML = localStorage.getItem("data"); // Retrieve and display saved list content
}
showtask(); // Show the tasks when the page loads
