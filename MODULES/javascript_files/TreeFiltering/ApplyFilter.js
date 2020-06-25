/*

"ApplyFilter" function only calls the "readFile" function with "process_filter" as its arguments.This is done in order
to get the original 'json' format data which is to used by "process_filter" function.

"process_filter" takes "treeData"(in dictionary form) as the argument, convert it to 'nested form' by calling "nestData" 
function, then traverse the tree by calling "postOrderTraverse" function , and finally calls the "filterTheTree" function
to make the 'Fileterd' tree as per the applied condition.

*/

import { UpdatedCondition } from '../global_variable.js';
import { nestData } from '../convertDataIntoNestedForm.js';
import { readFile } from '../ReadFile/readDataFileWithCallbackFun.js';
import { postOrderTraverse } from './treeTraverse.js';
import { filterTheTree } from './FilteringTree.js';

export function ApplyFilter() {
    readFile(process_filter);
}

function process_filter(treeData){
    var myData = nestData(treeData);
    if(UpdatedCondition.length > 0) {

        postOrderTraverse(myData);

        filterTheTree(myData);

    }
        
}
