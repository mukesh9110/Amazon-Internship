/*

"showCondAndAddForm" form does the following things :
1. It makes the applied condition appear on the webpage.
2. It calls the "addFilterForm" , which add the "Filter Form" and the "Depth Form".
3. It pushes the condition which is just applied in the "UpdatedCondation" array, which stores all the applied condition.

*/

import { AddFilterForm } from '../FilterFormLayout/createFilterForm.js';
import { UpdatedCondition } from '../global_variable.js';


export function showCondAndAddForm() {

    var inpValue = document.getElementById("valueInput");
    if(inpValue.checkValidity()) {
        
        var Property = document.getElementById("propertyInput").value;
        var Condition = document.getElementById("conditionInput").value;
        var Value = document.getElementById("valueInput").value;
        
        UpdatedCondition.push([Property,Condition,Value])

        var get_filter_div = document.getElementById("filter_form_div");
        var cond_text = document.createElement("div");
        cond_text.setAttribute("id","CondTextId");
        cond_text.innerHTML = "Condition Applied : " + Property + Condition + Value;
        get_filter_div.appendChild(cond_text); 

        AddFilterForm();
    }
}
