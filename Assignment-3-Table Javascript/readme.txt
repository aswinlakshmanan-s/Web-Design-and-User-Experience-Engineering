Assignment 3: Student Teacher Table Document Object Manipulation



toggleDropDownTextArea:

This function handles dropdown elements.
It sets up click event listeners for elements with class "arrow".
When an "arrow" element is clicked, it toggles the display of the corresponding dropdown text area.

toggleCheckboxAndAction:

This function manages checkboxes.
It adds click event listeners for elements with class "checkbox".
When a checkbox is clicked, it performs actions like adding "Delete" and "Edit" headers, creating delete and edit buttons, changing background colors, and setting up event handlers for editing and deleting records.

addNewStudent:

This function adds a new row to the table with details for a new student.
It calculates a new student number based on existing rows, and then creates and appends the necessary HTML elements for the new row.
It also updates the status of the submit button.

editRecord:

This function sets up event handlers for editing records.
It adds click event listeners for elements with class "edit".
When an "edit" button is clicked, it prompts the user to edit the details.

deleteRecord:

This function sets up event handlers for deleting records.
It adds click event listeners for elements with class "delete".
When a "delete" button is clicked, it removes the corresponding row and shows an alert indicating that the record has been deleted.