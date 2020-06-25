/*

"Reset" function only calls the "readFile" function with "doReset" as its arguments.This is done in order to get the 
original 'json' format data which is to used by "doReset" function.

"doReset" function does the following things :
1. Deletes the applied condition which was appearing on the webpage.
2. Calls the "deleteForm" function in order to delete the "Filter Form" and the "Depth Form".
3. Calls the "AddFilterForm" function which creates the "Filter Form" and "Depth Form".
4. it use its argument 'treeData',(which is in dictionary form, which is further converted into 'nested form' by 
calling "nestData" function), to make the new tree without any filter, by further calling the update function.

*/

import { AddFilterForm } from '../FilterFormLayout/createFilterForm.js';
import { readFile } from '../ReadFile/readDataFileWithCallbackFun.js';
import {change_global_var } from '../global_variable.js';
import { nestData } from '../convertDataIntoNestedForm.js';
import { height } from '../basicLayoutOfTree.js';
import { update } from '../TreeUpdate/UpdateTree.js';
import { deleteForm } from './deleteForm.js';

export function ResetFun() {
    readFile(doReset);
}

function doReset(treeData) {
                
    while(document.getElementById("CondTextId")) {
        document.getElementById("CondTextId").remove();
    }

    deleteForm();

    AddFilterForm();

    change_global_var([]);
    
    let myData = nestData(treeData);
    let root = d3.hierarchy(myData, d => d.children);
    root.x0 = height/2;
    root.y0 = 0;
    
    update(root,root);
}
