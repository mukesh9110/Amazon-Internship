/*

"TreeUptoDepthD" function only calls the "readFile" function with "createTreeUptoCertainDepth" as its arguments.
This is done in order to get the  original 'json' format data which is to used by "createTreeUptoCertainDepth" function.

"createTreeUptoCertainDepth" function creates the tree upto the required depth.
To do this, the function follows the below steps :
1. It calls the "nestData" function to convert the data(argument) in nested form.
2. Calls the "makeNodeTillDepthD" and further "update" function to create tree upto the required depth.

*/
import { readFile } from '../ReadFile/readDataFileWithCallbackFun.js';
import { nestData } from '../convertDataIntoNestedForm.js';
import { update } from '../TreeUpdate/UpdateTree.js';
import { collapse } from '../TreeUpdate/treeCollapse.js';
import { height } from '../basicLayoutOfTree.js';


export function TreeUptoDepthD() {
    readFile(createTreeUptoCertainDepth)
}

function createTreeUptoCertainDepth(treeData) {
    let myData,root,source;
    var inpValue = document.getElementById("depthValueInput");

    if(inpValue.checkValidity()) {

        var depth = document.getElementById("depthValueInput").value;
        
        while(document.getElementById("CondTextId")) {
            document.getElementById("CondTextId").remove();
        }
        
        myData = nestData(treeData);
        root = d3.hierarchy(myData, d => d.children);
        root.x0 = height/2;
        root.y0 = 0;

        source = root;
        source.children.forEach(collapse);

        source.children.forEach(makeNodeTillDepthD);

        function makeNodeTillDepthD(d) {
            if(d.depth < depth) {
                if(d._children) {
                    d.children = d._children;
                    d.children.forEach(makeNodeTillDepthD);
                    d._children = null;
                }
            }
        }
    }
    update(source,root);
}
