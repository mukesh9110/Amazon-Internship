/*

This file defines the basic things like the margin,depth,height,treeLayout,etc. which is further used to mak the tree.

*/

var margin = {top: 30, right: 40, bottom: 30, left: 400},
    width = 1000 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)

    .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)
    }))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body")
        .append("div")
        .attr("class","nodeinfo")

var treeLayout = d3.tree().nodeSize([220,70]);

export {svg,div,treeLayout,width,height};
    