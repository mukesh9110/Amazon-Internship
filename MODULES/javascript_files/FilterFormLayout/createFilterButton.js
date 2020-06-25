/*

"AddFilterButton" function creates only a "button", named as "AddFilter". When we click on this button, "AddFilterForm" 
function is called , which makes the "Filtern Form" and "Tree Depth Form" appear on the page.

*/

import { AddFilterForm } from './createFilterForm.js';

export function AddFilterButton() {
    var get_filter_div = document.getElementById("filter_form_div");

    var linebreak = document.createElement("br");
    get_filter_div.appendChild(linebreak);

    var Filter_button = document.createElement("button");
    Filter_button.setAttribute("type","button");
    Filter_button.setAttribute("id","filterbutton")
    Filter_button.innerHTML = "AddFilter";
    Filter_button.onclick = AddFilterForm;
    get_filter_div.appendChild(Filter_button);

}

