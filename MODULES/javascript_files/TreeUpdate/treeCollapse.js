/*

"collapse" function takes children array as the argument, and assign the children of each element of the argument as null.

*/

export function collapse(d) {
    if(d.children) {
        d._children = d.children;
        d._children.forEach(collapse)
        d.children = null
    }
}
