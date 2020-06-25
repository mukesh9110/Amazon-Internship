/*

"nodeHighlight" function basically classifies the nodes which satisfies all the applied condition, which is highlighted 
further.

This is done by using th following ways:
1. This function adds a new 'key-value' pair to the node,where 'key' is "class" , and "value" is "found" or "notfound".
2. If the "node" (the argument) or any of its child satisfies all the applied conditions, then "class":"found" is added to 
node, else "class":"notfound" is added to the node.
3.This "found" and "notfound" class-value is used during the tree formation,i.e, during the "update" function call, where
if the class of any node is "found", then it gets highlighted.

*/
import { UpdatedCondition } from '../global_variable.js';

export function nodeHighlight(node) {
    var satisfyCondition = true;
    for(var i = 0; i < UpdatedCondition.length; i++) {
        var Property = UpdatedCondition[i][0];
        var Condition = UpdatedCondition[i][1];
        var Value = UpdatedCondition[i][2];
        if(Condition === "=") {
            if(node.children) {
                var left = node.children[0];
                var right = node.children[1];

                if((left.class === "found") && (right.class === "notfound")) {
                    node._children = node.children;
                    node.children = [left];
                    break;
                }
                else if((left.class === "notfound") && (right.class === "found")) {
                    node._children = node.children;
                    node.children = [right];
                    break;
                }
                else if((left.class === "notfound") && (right.class === "notfound")){
                    node._children = node.children;
                    node.children = null;

                    if(node[Property] !== Value) {
                        satisfyCondition = false;
                        break;
                    }
                }
                else {
                    break;
                }

            } else {
                if(node[Property] !== Value) {
                    satisfyCondition = false;
                    break;
                }
            }
        }
        else if(Condition === ">") {
                if(node.children) {
                    var left = node.children[0];
                    var right = node.children[1];
                    
                    if((left.class === "found") && (right.class === "notfound")) {
                        node._children = node.children;
                        node.children = [left];
                        break;
                    }
                    else if((left.class === "notfound") && (right.class === "found")) {
                        node._children = node.children;
                        node.children = [right];
                        break;
                    }
                    else if((left.class === "notfound") && (right.class === "notfound")){
                        node._children = node.children;
                        node.children = null;

                        if(node[Property] <= Value) {
                            satisfyCondition = false;
                            break;
                        }
                    }
                    else {
                        break;
                    }

                } else {
                    if(node[Property] <= Value) {
                        satisfyCondition = false;
                        break;
                    }
                }

        }
        else if(Condition === "<") {
            if(node.children) {
                var left = node.children[0];
                var right = node.children[1];

                if((left.class === "found") && (right.class === "notfound")) {
                    node._children = node.children;
                    node.children = [left];
                    break;
                }
                else if((left.class === "notfound") && (right.class === "found")) {
                    node._children = node.children;
                    node.children = [right];
                    break;
                }
                else if((left.class === "notfound") && (right.class === "notfound")){
                    node._children = node.children;
                    node.children = null;

                    if(node[Property] >= Value) {
                        satisfyCondition = false;
                        break;
                    } 
                }
                else {
                    break;
                }

            } else {
                if(node[Property] >= Value) {
                    satisfyCondition = false;
                    break;
                }
            }

        }
    }
    
    if(satisfyCondition) {
        node.class = "found";
    } else {
        node.class = "notfound";
    }

}
