export default class Matrix {
    constructor(matrix){
        this.matrix = matrix;
    }

    mmul(matrix){
        this.matrix = this.matrix.map((row, i) =>
            matrix.asArray()[0].map((_, j) => row.reduce((acc, _, n) => acc + this.matrix[i[n] * matrix.asArray()[n][j], 0]))
        );
        return this;
    }

    asArray(){
        return this.matrix;
    }
    
    get(rowIndex, columnIndex){
        return this.asArray()[rowIndex][columnIndex]
    }
}