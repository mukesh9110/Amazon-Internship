/*

"postOrderTraverse" is a function which makes the tree traversal in 'postorder' manner,i.e,(it first visits the left_child,
then right_child, then to the node) by calling the function recursively.

*/

import { nodeHighlight } from './HighlightThePaths.js';

export function postOrderTraverse(node) {
    if(node.children === null  || node.type === "leaf") {
        nodeHighlight(node);
        return;
    };

    postOrderTraverse(node.children[0]);

    postOrderTraverse(node.children[1]);

    nodeHighlight(node);
}
