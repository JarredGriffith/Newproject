function doSomething(x,y){
    if(typeof x != 'string') {
        throw new Error("x most be a string");
    }
    return x + y;
}