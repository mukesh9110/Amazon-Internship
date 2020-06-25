/*

This "filterTheTree" function takes 'mydata'(updated data as per the applied condition in nested form ) as its arguments
and makes the filtered tree according to the applied condition by caling "update" function.

*/

import { height } from '../basicLayoutOfTree.js';
import { update } from '../TreeUpdate/UpdateTree.js';

export function filterTheTree(mydata) {

    var root = d3.hierarchy(mydata, d => d.children);
    root.x0 = height/2;
    root.y0 = 0;

    update(root,root);

}

