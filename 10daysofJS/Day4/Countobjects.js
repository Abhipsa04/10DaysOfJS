

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count =0;
    for(let i of objects){
        //console.log(i);
        //console.log(objects[i]);
        if( i.x==i.y){
            count++;
        }
    }
    return count;
}

