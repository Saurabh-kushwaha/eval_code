class Rectangle{
    constructor(value) {
        this.value = value;
    }
    calculating_area() {
        return this.value;
    }
}

class Square  extends Rectangle{
    constructor(value) {
        super(value);
    }
    getPerimeter() {
        return 2 * (22 / 7) * this.calculating_area();
    }
    getarea() {
       return this.calculating_area() * this.calculating_area();
    }
}
var x = new Square(4);
console.log(x.getPerimeter(),x.getarea());



