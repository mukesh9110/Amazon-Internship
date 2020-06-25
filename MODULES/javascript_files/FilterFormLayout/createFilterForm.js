/*

This function creates the Filter Form , which include following things :
1. 'Property-input' where we can select the property on the basis of which we want to filter the tree from the dropdown.
2. 'Condition-input' which is basically '>' , '<' and '='.
3. 'Value-input' where we can enter the value corresponding to the selected property.
4. 'Add-button' clicking on which you can add more filters.
5. 'Apply-button' clicking on which the updated tree is formed as per the applied conditions.
6. 'Reset-button' clicking on which resets all the filters, and create the original tree without any filter.

*/

import { readFile } from '../ReadFile/readDataFileWithCallbackFun.js';
import { createTreeDepthForm } from '../TreeDepth/createTreeDepthForm.js';
import { ResetFun } from '../Reset/reset_function.js';
import { AddCondition } from '../TreeFiltering/AddCondition.js';
import { ApplyFilter } from '../TreeFiltering/ApplyFilter.js';

export function AddFilterForm() {
    readFile(ShowFilterForm);
}
function ShowFilterForm(treeData) {

    createTreeDepthForm();
    
    document.getElementById("filterbutton").onclick = () => false;

    var leaf_node_property = treeData.nodes.find(item => item.type === "leaf");
    var split_node_property = treeData.nodes.find(item => item.type === "split");
    var get_filter_div = document.getElementById("filter_form_div");

    var createfilterform = document.createElement("form");
    createfilterform.setAttribute("id","filter_form");
    get_filter_div.appendChild(createfilterform);

    var linebreak = document.createElement("br");
    createfilterform.appendChild(linebreak);
    
    var property_label = document.createElement("label");
    property_label.setAttribute("for","propertyInput");
    property_label.innerHTML = "Property: ";
    createfilterform.appendChild(property_label);

    var property_select = document.createElement("select");
    property_select.setAttribute("id","propertyInput");
    createfilterform.appendChild(property_select);
    
    for(var i = 0; i < Object.keys(leaf_node_property).length; i++) {
        var createOption = document.createElement("option");
        createOption.setAttribute("value",Object.keys(leaf_node_property)[i]);
        createOption.innerHTML = Object.keys(leaf_node_property)[i];
        property_select.appendChild(createOption);
    }

    for(var i = 0; i < Object.keys(split_node_property).length; i++) {
        var val = Object.keys(leaf_node_property).includes(Object.keys(split_node_property)[i]);
        if(val === false) {
            var createOption = document.createElement("option");
            createOption.setAttribute("value",Object.keys(split_node_property)[i]);
            createOption.innerHTML = Object.keys(split_node_property)[i];
            property_select.appendChild(createOption);
        }
    }

    var condition_label = document.createElement("label");
    condition_label.setAttribute("for","conditionInput");
    condition_label.innerHTML = "  Condition: ";
    createfilterform.appendChild(condition_label);

    var condition_array = [">","<","="];

    var condition_select = document.createElement("select");
    condition_select.setAttribute("id","conditionInput");
    createfilterform.appendChild(condition_select);

    for(var i = 0; i < condition_array.length; i++) {
        var createOption = document.createElement("option");
        createOption.setAttribute("value",condition_array[i]);
        createOption.innerHTML = condition_array[i];
        condition_select.appendChild(createOption);
    }

    var value_label = document.createElement("label");
    value_label.setAttribute("for","valueInput");
    value_label.innerHTML = "Value:";
    createfilterform.appendChild(value_label);
    
    var value_input = document.createElement("input");
    value_input.setAttribute("type","text");
    //value_input.setAttribute("step","any");
    value_input.setAttribute("id","valueInput")
    value_input.required = true;
    createfilterform.appendChild(value_input);
    
    var add_button = document.createElement("button");
    add_button.setAttribute("type","button");
    add_button.setAttribute("id","addId")
    add_button.innerHTML = "Add";
    add_button.onclick = AddCondition;
    createfilterform.appendChild(add_button);

    var linebreak = document.createElement("br");
    createfilterform.appendChild(linebreak);

    var Filter_submit = document.createElement("button");
    Filter_submit.setAttribute("type","button");
    Filter_submit.setAttribute("id","applyId")
    Filter_submit.innerHTML = "Apply";
    Filter_submit.onclick = ApplyFilter;
    createfilterform.appendChild(Filter_submit);

    var reset_button = document.createElement("button");
    reset_button.setAttribute("type","button");
    reset_button.setAttribute("id","resetId");
    reset_button.innerHTML = "Reset";
    reset_button.onclick = ResetFun;
    createfilterform.appendChild(reset_button);
}


