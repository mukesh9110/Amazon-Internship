/*

"AddCondition" function is used to add multiple condition.For this, "showCondAndAddForm" function is called which makes 
the already applied condition appear on the webpage, and add a filter form to apply further condition.

It then calls the "deleteForm" function which deletes the earlier FilterForm and DepthForm.

*/

import { showCondAndAddForm } from './showConditionAndAddForm.js';
import { deleteForm } from '../Reset/deleteForm.js';

async function AddCondition() {
    await showCondAndAddForm();
    var inpValue = document.getElementById("valueInput");
    if(inpValue.checkValidity()) {
        deleteForm();
    }
    
}

export {AddCondition};

