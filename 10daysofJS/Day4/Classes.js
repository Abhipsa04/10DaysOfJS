/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor(sides){
        this.armlen=sides;
    }
    perimeter() {
        var sum = 0;
        for(var i=0;i< this.armlen.length; i++){
            sum = sum + this.armlen[i];
        }
        return sum;
    }
    }
    

