/*
Here, a variable "UpdatedCondition" is declared and assigned as an empty array, which will be used to store the multiple no. of applied 
conditions ahead.

"change_gloval_var" function is used to assign it to "null", once the reset button is clicked.
*/

var UpdatedCondition = [];

function change_global_var(val) {
    UpdatedCondition = val;
}

export {UpdatedCondition,change_global_var};
