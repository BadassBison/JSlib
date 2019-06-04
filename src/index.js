import { DOMNodeCollection } from "./dom_node_collection.js";

window.$ = function (arg) {
     
    let list = document.querySelectorAll(arg);

    const arrList = [];
    for (let i of list) {
        arrList.push(i);
    }
    
    return new DOMNodeCollection(arrList);
};






// https://humanwhocodes.com/blog/2007/11/30/the-throttle-function/
function throttle(method, scope) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function(){
        method.call(scope);
    }, 2000);
};

function testing(){
    console.log("throttled");
}

// window.onresize = function(){
//     throttle(testing, window);
// };