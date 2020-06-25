/*

The "nestData" function takes argument 'data' in 'dictionary form' and convert it into nested form.

This is done by the following steps :
1. Iterates through all the nodes.
2. If a node is of "split" type,i.e,it has childs, then for each of its child, it iterates through each node and find the
node whose id equals to its child , and then add a 'key-value' pair, as "children":"[node_with_each_child _id]" to this node.

*/

export function nestData(data) {
    var myObj = {};
    
    var node = data.nodes;     
    var main_property = Object.keys(data);

    for(var i = 0; i < main_property.length-1; i++) {
        var key = main_property[i];
        myObj[key] = data[key];
    }

    myObj.id = data.root_node;
    myObj.parent = node.find(item => item.id === data.root_node);
    myObj.children = [];
    
    for(var i = 0; i < node.length; i++) {

        if (myObj.children.length === 0) {
            var leftNode = node.find(item => item.id === myObj.parent.left);//left_child
            var rightNode = node.find(item => item.id === myObj.parent.right);//right_child
            myObj.children.push(leftNode);
            myObj.children.push(rightNode);

        } else if (node[i].type === "split") {

            var leftChild = node[i].left;//left_child
            var rightChild = node[i].right;//right_child
            for(var j = 0; j < node.length; j++) {
                if(node[j].id === leftChild) {
                    node[i].children = node[i].children || [];
                    node[i].children.push(node[j]);
                }
            }
            for(var j = 0; j < node.length; j++) {
                if(node[j].id === rightChild) {
                    node[i].children = node[i].children || [];
                    node[i].children.push(node[j]);
                }
            }
        } 
    }
    return myObj;
}
