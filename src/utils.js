export const dist = (p1, p2) => {
    let dx, dy;
    if (p1 instanceof Array) {
        dx = p1[0] - p2[0];
        dy = p1[1] - p2[1];
    } else {
        dx = p1.x - p2.x;
        dy = p1.y - p2.y;
    }
    return Math.sqrt( dx*dx + dy*dy );
}

// https://humanwhocodes.com/blog/2007/11/30/the-throttle-function/
export const throttle = (method, scope) => {
    clearTimeout(method._tId);
    method._tId = setTimeout(function(){
        method.call(scope);
    }, 2000);
};