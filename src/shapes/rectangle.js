import {Point} from './point';
import {Polygon} from './polygon';

export class Rectangle extends Polygon{
    constructor(t1, tr, br, bl);
    constructor(position, width, height);
    constructor(x, y, widht, height);

    constructor(a = 0, b = 0, c = 0, d = 0){
        if(a instanceof Point && b instanceof Point && c instanceof Point && d instanceof Point){
            super([a, b, c, d])
        }else if(a instanceof Point){
            super([a, new Point(a.x + b, a.y), new Point(a.x + b, a.y + c), new Point(a.x, a.y + c)]);
        } else {
            super(Rectangle.pointsFromBounds(a, b, c, d))
        }
    }

    static pointsFromBounds(x, y, width, height){
        return [new Point(x, y), new Point(x + width, y), new Point(x + width, y + height), new Point(x, y + height)];
    }

    updateDimensios(x, y, width, height){
        this.points = Rectangle.pointsFromBounds(x, y, width, height)
    }

    setPoints(points){
        if(points.length !== 4){
            throw 'Rectangles must always have 4 points';
        }
        super.setPoints(points);
    }

    containsPoint(point){
        const tl = this.getTopLeft();
        const br = this.getBottomRight();

        return point.x >= tl.x && point.x <= br.x && point.y >= tl.y && point.y <= br.y;
    }

    getWidth(){
        return Math.sqrt(
            Math.pow(this.getTopLeft().x - this.getTopRight().x, 2) + Math.pow(this.getTopLeft().y -this.getTopRight().y, 2)
        );
    }

    getHeight(){
        return Math.sqrt(
            Math.pow(this.getBottomLeft().x - this.getTopLeft().x, 2) + Math.pow(this.getBottomLeft().y - this.getTopLeft().y, 2)
        );
    }

    getTopMiddle(){
        return Point.middlePoint(this.getTopLeft(), this.getTopRight());
    }

    getBottomMiddle(){
        return Point.middlePoint(this.getBottomLeft(), this.getBottomRight());
    }

    getLeftMiddle(){
        return Point.middlePoint(this.getBottomLeft(), this.getTopLeft())
    }

    getRightMiddle(){
        return Point.middlePoint(this.getBottomRight(), this.getTopRight());
    }

    getTopLeft(){
        return Point.middlePoint(this.getBottomRight(), this.getTopRight());
    }

    getTopRight(){
        return this.points[0];
    }

    getBottomRight(){
        return this.points[2];
    }

    getBottomLeft(){
        return this.points[3];
    }
}