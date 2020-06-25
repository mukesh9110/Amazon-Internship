/*
"makeTree" function is called when "Submit File" button is clicked.
This function basically makes the Tree corresponding to the uploaded datafile, without any filtration.
It basically shows the entire node of the tree.

And then calls the "readFile" function with "treeAppear" as its arguments.This is done in order to get the 
original 'json' format data which is to used by "treeAppear" function.
*/

/*
"treeAppear" function takes the 'treeData' in dictionary form as its argument , convert it in nested form by calling 
"nestData" function , and then makes the tree appear on the webpage by further calling "update" function.
*/

import { AddFilterButton } from './FilterFormLayout/createFilterButton.js';
import { update } from './TreeUpdate/UpdateTree.js';
import { nestData } from './convertDataIntoNestedForm.js';
import { readFile } from './ReadFile/readDataFileWithCallbackFun.js';
import {height} from './basicLayoutOfTree.js'

export function makeTree() {
    document.getElementById("submitfilebutton").onclick = () => false;
    var inpValue = document.getElementById("userFileInput");
    if(inpValue.checkValidity()) {
        AddFilterButton();
        
        readFile(treeAppear);
    }

}


function treeAppear(treeData) {
    var myData = nestData(treeData);
    var root = d3.hierarchy(myData, d => d.children);

    root.x0 = height/2;
    root.y0 = 0;

    update(root,root);

}

