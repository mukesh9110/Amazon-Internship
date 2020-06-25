/*
This "readFile" takes a 'callback function' as its arguments. Once the file gets loaded, the 'json data' is used as
an argument for the call back function.

"readFile" function reads the contents of the uploaded file asynchronously using 'FileReader' object. So, in order to use
the data inside this file, we have to wait until the 'reader operation' is completed. Therefore, an 'event handler' is 
added , named "FileReader.onload" , which gets triggered each time the reading operation is successfully completed. The 
'FileReader' object reads the content of the file as 'text', so this 'text' format is converted into 'json' format.

Also this function takes a "callback" function as the only argument. So, once the ".onload" event handler is triggered, 
this callback function is called , with the loaded 'json data' as its arguments.
*/

export function readFile(callback) {
    var input = document.getElementById("userFileInput");
    if(input.checkValidity()) {
        
        var file = input.files[0];
    
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
    
            var Data_in_dict_form = JSON.parse(reader.result);
            callback(Data_in_dict_form);
        }
    }
}

