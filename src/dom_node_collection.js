class DOMNodeCollection {
    constructor(array) {
        this.htmlElements = array;
    } 
}

DOMNodeCollection.prototype.html = function(str=null) {
    if (str !== null) {
        this.htmlElements.forEach(el => {el.innerHTML = str;});
    } else {
        return this.htmlElements[0].innerHTML;
    }
};

DOMNodeCollection.prototype.empty = function() {
    this.htmlElements.forEach(el => { el.innerHTML = ""; });
};

DOMNodeCollection.prototype.append = function(arg) {
    this.htmlElements.forEach(el => { 
        let first = el.innerHTML;
        el.innerHTML = first + arg;
    });
};

DOMNodeCollection.prototype.attr = function() {
    this.htmlElements.forEach(el => {
        
    });
}

DOMNodeCollection.prototype.addBefore = function(newEl, arg) {
    this.htmlElements.forEach(el => {
        const newNode = document.createElement(newEl);
        newNode.innerHTML = arg;
        el.before(newNode);
    });
}

DOMNodeCollection.prototype.addAfter = function(newEl, arg) {
    this.htmlElements.forEach(el => {
        const newNode = document.createElement(newEl);
        newNode.innerHTML = arg;
        el.after(newNode);
    });
}

DOMNodeCollection.prototype.bkg = function(color) {
    this.htmlElements.forEach(el => {
        el.style.backgroundColor = color;
    });
}

DOMNodeCollection.prototype.border = function(arg) {
    this.htmlElements.forEach(el => {
        el.style.border = arg;
    });
}

module.exports = {
    DOMNodeCollection
};

// export default DOMNodeCollection;