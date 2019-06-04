import { DOMNodeCollection } from "./dom_node_collection.js";
import {
        dist,
        throttle
    } from "./utils.js";

window.dist = dist;

window.$ = function (arg) {
     
    let list = document.querySelectorAll(arg);

    const arrList = [];
    for (let i of list) {
        arrList.push(i);
    }
    
    return new DOMNodeCollection(arrList);
};

// function testing(){
//     console.log("throttled");
// }

// window.onresize = function(){
//     throttle(testing, window);
// };