/* 

'diagonal' function creates the path from one node to another,i.e, from 's' to 'd'.

*/

export function diagonal(s, d) {
    var path = `M ${s.x} ${s.y}
            C ${s.x} ${(s.y + d.y) / 2},
            ${d.x} ${(s.y + d.y) / 2},
            ${d.x} ${d.y}`

    return path
}
