var once = function(fn) {
    let call = false;
    return function(...args){
        if(!call){
            call = true;
            return fn(...args);
        }
    }
};