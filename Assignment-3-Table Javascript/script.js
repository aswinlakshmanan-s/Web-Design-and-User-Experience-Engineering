
//Behavior of Dropdowns
function toggleDropDownTextArea() {
  //selects all the <img> elements on the page
  var imageTags = document.getElementsByTagName("img");

  //loops over all the <img> elements and sets the classname as arrow
  for (var i = 0; i < imageTags.length; i++) {
    imageTags[i].className = "arrow";
  }
//retrieves classes with arrow as their classname
  var arrows = document.getElementsByClassName("arrow");
//iterates over through the found elements
  for (var i = 0; i < arrows.length; i++) {
    //when arrow element is clicked the function is performed
    arrows[i].onclick = function () {
      //finds the dropdown text area by moving up the DOM tree
      var dropDownTextArea = this.parentNode.parentNode.nextElementSibling;
      //if the dropdown is currently in hidden state
      if (dropDownTextArea.style.display === "none") {
        dropDownTextArea.style.display = "table-row";
      } 
      
      //otherwise it hides the dropdown by setting the display style to none
      else {
        dropDownTextArea.style.display = "none";
      }
    }
  }
}

//Benhavior of checkboxes
function toggleCheckboxAndAction() {
  //selects all <input> elements on the document
  var inputList = document.getElementsByTagName("input");
//assigns a class name 'checkbox' for the selected <input> elements
  for (var i = 0; i < inputList.length; i++) {
    inputList[i].className = "checkbox";
  }
//now looks for the elements within the class name 'checkbox'
  var checkboxes = document.getElementsByClassName("checkbox");
//iterates over the elements of class name 'checkbox'
  for (var i = 0; i < checkboxes.length; i++) {
    //when onclick event is performed for checkbox, this function is executed
    checkboxes[i].onclick = function () {
      //finds the grandparent node <tr> element by using DOM tree
      var grandParentNode = this.parentNode.parentNode;
//if checkbox is checked
      if (this.checked) {
        //adds delete and edit headers if they are not present already
        var trList = document.getElementsByTagName("tr");

//trList[0].lastElementChild.innerHTML !== "Edit" checks if the content of the last child element (which is likely a table header) is not equal to "Edit".
        if (trList[0].lastElementChild.innerHTML !== "Edit") {
          var thDelete = document.createElement("th");
          thDelete.appendChild(document.createTextNode("Delete"));
          trList[0].appendChild(thDelete);
//same process is followed for edit 
          var thEdit = document.createElement("th");
          thEdit.appendChild(document.createTextNode("Edit"));
          trList[0].appendChild(thEdit);
        }

//creates delete and edit buttons
var tdDelete = document.createElement("td"); // Create a new table cell element
var buttonDelete = document.createElement("button"); // Create a new button element
buttonDelete.appendChild(document.createTextNode("Delete")); // Set the button text to "Delete"
buttonDelete.className = "delete"; // Assign the class name "delete" to the button
tdDelete.appendChild(buttonDelete); // Append the button to the table cell
grandParentNode.appendChild(tdDelete); // Append the table cell to the grandParentNode


var tdEdit = document.createElement("td"); // Create a new table cell element
var buttonEdit = document.createElement("button"); // Create a new button element
buttonEdit.appendChild(document.createTextNode("Edit")); // Set the button text to "Edit"
buttonEdit.className = "edit"; // Assign the class name "edit" to the button
tdEdit.appendChild(buttonEdit); // Append the button to the table cell
grandParentNode.appendChild(tdEdit); // Append the table cell to the grandParentNode

//changes the background color to yellow when checkbox is checked
        grandParentNode.style.backgroundColor = "yellow";

//event handlers for editing and deleting
        editRecord();
        deleteRecord();
      } else {
        //if checkbox is unchecked, it reverts the changes.
        grandParentNode.style.backgroundColor = "";
        grandParentNode.removeChild(grandParentNode.lastElementChild);
        grandParentNode.removeChild(grandParentNode.lastElementChild);
      }
      //also updates the status of submit button
      toggleSubmitButton();
    }
  }
}

function addNewStudent() {
  //finds all the rows in the table
  var rows = document.getElementById("myTable").rows;
  var lastStudentAndTeacherNumber;

  //This section of code checks if there are more than one row in the table (meaning there are existing students). If so, it calculates a new student number. 
  //If not, it sets the student number to 1.  
  if (rows.length > 1) 
  {
    lastStudentAndTeacherNumber = parseInt(rows[rows.length - 2].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]) + 1;
  } else {
    lastStudentAndTeacherNumber = 1;
  }
//retrieves the table element
  var table = document.getElementById("myTable");

  //a new row element is created for the new student
  var newRow = document.createElement("tr");

  //creates new cell for checkbox 
  var checkboxCell = document.createElement("td");

  //These lines create a new checkbox input element and set its type to "checkbox". It then appends this checkbox to the checkboxCell.
  var checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxCell.appendChild(checkboxInput);
  checkboxCell.appendChild(document.createElement("br"));
  checkboxCell.appendChild(document.createElement("br"));

//This section creates an image element and sets its source and width attributes. It then appends the image to the checkboxCell.
  var image = document.createElement("img");
  image.setAttribute("src", "down.png");
  image.setAttribute("width", "25");
  checkboxCell.appendChild(image);
  newRow.appendChild(checkboxCell);

  // Creates cells for student details.
  var studentCell = document.createElement("td");
  var studentTextNode = document.createTextNode("Student " + lastStudentAndTeacherNumber);
  studentCell.appendChild(studentTextNode);
  newRow.appendChild(studentCell);

  // Creates cells for teacher details.
  var teacherCell = document.createElement("td");
  var teacherTextNode = document.createTextNode("Teacher " + lastStudentAndTeacherNumber);
  teacherCell.appendChild(teacherTextNode);
  newRow.appendChild(teacherCell);

  // Creates cells for approved details.

  var approvedCell = document.createElement("td");
  var approvedTextNode = document.createTextNode("Approved");
  approvedCell.appendChild(approvedTextNode);
  newRow.appendChild(approvedCell);

       // Creates cells for semester details.

  var semesterCell = document.createElement("td");
  var semesterTextNode = document.createTextNode("Fall");
  semesterCell.appendChild(semesterTextNode);
  newRow.appendChild(semesterCell);

         // Creates cells for type details.

  var typeCell = document.createElement("td");
  var typeTextNode = document.createTextNode("TA");
  typeCell.appendChild(typeTextNode);
  newRow.appendChild(typeCell);

         // Creates cells for budget details.

  var budgetCell = document.createElement("td");
  var budgetTextNode = document.createTextNode("765755");
  budgetCell.appendChild(budgetTextNode);
  newRow.appendChild(budgetCell);

         // Creates cells for percentage details.

  var percentageCell = document.createElement("td");
  var percentageTextNode = document.createTextNode("100%");
  percentageCell.appendChild(percentageTextNode);
  newRow.appendChild(percentageCell);

  table.appendChild(newRow);

  //This block creates a new table row element (dropDownRow) and sets its class name to "dropDownTextArea".

  var dropDownRow = document.createElement("tr");
  dropDownRow.className = "dropDownTextArea";
  var dropDownCell = document.createElement("td");
  dropDownCell.colSpan = "8";
  dropDownCell.innerHTML = 'Advisor:<br /><br /> Award Details<br/>Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  dropDownRow.appendChild(dropDownCell);

  
  table.appendChild(dropDownRow);

  alert("Student "+ lastStudentAndTeacherNumber + " Record added successfully.");

  toggleDropDownTextArea();
  toggleCheckboxAndAction();
}


function editRecord() {
  var editButtons = document.getElementsByClassName("edit");
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].onclick = function () {
      prompt("Edit the details");
    }
  }
}

function deleteRecord() {
  var deleteButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      var grandParentNode = this.parentNode.parentNode;
      var studentName = grandParentNode.firstElementChild.nextElementSibling.innerHTML;
      grandParentNode.nextElementSibling.remove();
      grandParentNode.remove();
      alert("Record of student " + studentName + " deleted successfully.");
      toggleSubmitButton();
    }
  }
}
//changing the color of submit button
function toggleSubmitButton() {
  var checkboxes = document.getElementsByClassName("checkbox");
  var enableSubmitButton = false;

  for (var j = 0; j < checkboxes.length; j++) {
    if (checkboxes[j].checked) {
      enableSubmitButton = true;
      break;
    }
  }

  var submitButton = document.getElementById("button");

  if (enableSubmitButton) {
    submitButton.style.backgroundColor = "orange";
    submitButton.style.border = "2px solid orange";
  } else {
    submitButton.style.backgroundColor = "grey";
    submitButton.style.border = "2px solid grey";
    removeDeleteEditHeader();
  }
}

function removeDeleteEditHeader() {
  var headerRow = document.getElementsByTagName("tr")[0];
  headerRow.removeChild(headerRow.lastElementChild);
  headerRow.removeChild(headerRow.lastElementChild);
}

toggleDropDownTextArea();
toggleCheckboxAndAction();
