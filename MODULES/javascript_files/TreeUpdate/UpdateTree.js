/*
"update" function takes "source" and "root" and makes node and the paths appear on the page."source" is the node below
which tree structure should be updated, and "root" is the base(parent) node. This function also provides the text to the
node ,and also highlight the node in case the "class" of a node is defined and is equal to "found".It also makes the node 
circular of some definite radius.

This function also adds a feature which is "on hovering over a node, all its details would appear in a box", and on taking 
away the mouse pointer from the node, it will disappear.

Also, the zoom-in and zoom-out feature is added using this function.

"click" function which is defines inside the "update" function makes the child of a node appear when it is clicked.So, using
this 'click' function, "update" function adds the feature of collapsing to the tree, which is, if we click on a node,
the sub-tree below it will collapse if it has its sub-tree, and will expand if its sub-tree is not appearing but it actually
has.

*/
import {svg,div,treeLayout} from "../basicLayoutOfTree.js"
import { diagonal } from './Diagonalpath.js';


export function update(source,root) {

    treeLayout(root)

    var nodes = root.descendants();
    var links = root.descendants().slice(1);

    nodes.forEach(function(d) {
        d.y = d.depth * 100;
    })

    var node = svg.selectAll("g.node")
        .data(nodes,d => d.data.id)
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform","translate(" + source.x0 + "," + source.y0 + ")")
        .on("click",click)
        .on("mouseover",function(d,i){
            div.transition()
                .style("opacity",1)
    
            if(i === 0) {
                for(var i = 0; i < Object.keys(d.data.parent).length; i++) {
                    var tempkey = Object.keys(d.data.parent)[i];
                    var div1 = div.append("div");
                    div1.html(tempkey + " : " + d.data.parent[tempkey]);
                }
            } else {
                for(var i = 0; i < Object.keys(d.data).length-1; i++) {
                    var tempkey = Object.keys(d.data)[i];
                    var div1 = div.append("div");
                    div1.html(tempkey + " : " + d.data[tempkey]);
                }
            }

            div.style("left", (d3.event.pageX + 20) + "px")
                .style("top", (d3.event.pageY + 10) + "px")
        })
        .on("mouseout",function(d) {
            div.html("")
            div.transition()
                .style("opacity",0)
        })

    nodeEnter.append("text")
        .attr("dy", ".1em")
        .attr("x", d => d.children || d._children ? -5 :-5)
        .attr("y", d => d.children || d._children ? -15 : -15 )
        .style("text-anchor", d => d.children || d._children ? "end" : "start")
        .text(d => "id: " + d.data.id)
        .append("tspan")
        .attr("dy",".1em")
        .attr("x", d => d.children || d._children ? 50 : -50)
        .attr("y", d => d.children || d._children ? 20 : 20 )
        .text( function(d,i) {
            if(i === 0) {
                return "Split Feature : " + d.data.parent.split_feature;
            } else {
                if(d.data.type === "split") {
                    return "Split Feature : "  + d.data.split_feature;
                } else {
                    return "Dispute Percentage : " + d.data.dispute_percent;
                }
            }
            
        });
    
    var nodeUpdate = node.merge(nodeEnter);
    
    nodeUpdate.transition()
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
            })

    nodeUpdate.append("circle")
        .attr("r",10)
        .style("fill", function(d) {
            if(d.data.class === "found") {
                return "#ff4136";
            }
            else if(d._children) return "lightsteelblue";
            else return "#fff";
            
        }) 
        
        .attr("cursor","pointer")

    var nodeExit = node.exit().transition()
        .attr("transform", function(d) {
            return "translate(" + source.x + "," + source.y + ")"
        })
        .remove();
    
    
    var link = svg.selectAll('path.link')
                .data(links,d => d.data.id)
    
    var linkEnter = link.enter().append("path")
        .attr("id","myPath")
        .attr("class", "link")
        .attr("d", d => {
            var o = {x: source.x0, y: source.y0}
            return diagonal(o, o)
        })
        

    var linkUpdate = link.merge(linkEnter);
        
    linkUpdate.transition()
        .attr("d", function(d){ return diagonal(d, d.parent) })
        .style("stroke", function(d) {
            if(d.data.class === "found") {
                return "black";
            }
        })

    var linkExit = link.exit()
        .transition()
        .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
        }).remove()

    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    })

    function click(d) {
        
        if(d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d,root);
    }
        
}
