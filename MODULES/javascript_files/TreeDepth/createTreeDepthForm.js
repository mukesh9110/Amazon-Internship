/*

"createTreeDepthForm" function creates the following thing :
1. 'Depth-input' - where we enter the 'depth' of the tree upto which we want to see the tree.
2. 'Submit-button' named as 'Submit' - clicking on which, "TreeUptoDepthD" function gets called, and tree is formed 
 upto the given depth.

*/

import { TreeUptoDepthD } from './createTreeUptoCertainDepth.js';

export function createTreeDepthForm() {
    var depth_d_div = document.getElementById("depthValueForm");
    depth_d_div.style.position = "absolute";
    depth_d_div.style.left = 300 + "px";
    depth_d_div.style.top = 200 + "px";


    var depth_form = document.createElement("form");
    depth_form.setAttribute("id","DepthFormId");
    depth_d_div.appendChild(depth_form);

    var depth_label = document.createElement("label");
    depth_label.setAttribute("for","depthValueInput");
    depth_label.innerHTML = "Depth :";
    depth_form.appendChild(depth_label);

    var depth_input = document.createElement("input");
    depth_input.setAttribute("type","number");
    depth_input.setAttribute("id","depthValueInput")
    depth_input.required = true;
    depth_form.appendChild(depth_input);

    var depth_submit_button = document.createElement("button");
    depth_submit_button.setAttribute("type","button");
    depth_submit_button.setAttribute("id","depthSubmitId");
    depth_submit_button.innerHTML = "Submit";
    depth_submit_button.onclick = TreeUptoDepthD;
    depth_form.appendChild(depth_submit_button);
   
}

