/*

This "FileUploadFunction" creates the following things:
1.A "input" of type file, where we upload our file which contains the json data in dictionary form.
2.A "button" with name "Submit File". When we click on this button, a function "makeTree" is called , which makes the 
'Decision Tree' and a button is created with name "AddFilter".

*/


import {makeTree} from '../makeFullTree.js';

export function FileUploadLayout() {
    var file_upload_div = document.getElementById("fileUpload_form_div");
    var createForm = document.createElement("form");
    createForm.setAttribute("id","get_data_form");
    file_upload_div.appendChild(createForm);
    
    var nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Select a file:";
    nameLabel.setAttribute("for","userFileInput");
    createForm.appendChild(nameLabel);
    
    var linebreak = document.createElement("br");
    createForm.appendChild(linebreak);
    
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type","file");
    inputElement.setAttribute("id","userFileInput");
    inputElement.required = true;
    createForm.appendChild(inputElement);
    
    var linebreak = document.createElement("br");
    createForm.appendChild(linebreak);
    
    var linebreak = document.createElement("br");
    createForm.appendChild(linebreak);
    
    var submitbutton = document.createElement("button");
    submitbutton.setAttribute("type","button");
    submitbutton.setAttribute("id","submitfilebutton")
    submitbutton.innerHTML = "Submit File";
    submitbutton.onclick = makeTree;
    createForm.appendChild(submitbutton);

}



