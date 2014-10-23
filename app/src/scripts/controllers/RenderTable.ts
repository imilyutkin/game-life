module gameLife {
    'use strict';

    export class RenderTable {

        public static $inject = [
            '$scope'
        ];

        private scope: ng.IScope;

        private fieldSize: number;

        constructor($scope: ng.IScope){
            $scope.vm = this;

            this.scope = $scope;

            this.fieldSize = 40;
            var matrix:Cell[][] = new Array<Cell[]>(this.fieldSize);

            for(var i = 0; i < this.fieldSize; i++) {
                matrix[i] = new Array<Cell>(this.fieldSize);
            }

            for(var i = 0; i < this.fieldSize; i++) {
                for(var j = 0; j < this.fieldSize; j++) {
                    matrix[i][j] = new Cell();
                }
            }

            $scope.vm.matrix = matrix;
        }

        public updateField() {
            var matrix: Cell[][] = this.scope.vm.matrix;
            for(var i = 0; i < this.fieldSize; i++) {
                for(var j = 0; j < this.fieldSize; j++) {
                    var cells:Cell[];
                    cells = this.getCells(matrix, i, j);
                    matrix[i][j].updateState(cells);
                }
            }

            for(var i = 0; i < this.fieldSize; i++) {
                for(var j = 0; j < this.fieldSize; j++) {
                    matrix[i][j].switchState();
                }
            }
        }

        private getCells(matrix: Cell[][], i: number, j: number): Cell[] {
            var cells:Cell[] = new Array<Cell>();
            if(i <= 0){
                i += this.fieldSize;
            }
            if(i >= this.fieldSize){
                i -= this.fieldSize;
            }
            if(j <= 0){
                j += this.fieldSize;
            }
            if(j >= this.fieldSize){
                j -= this.fieldSize
            }
            cells.push(this.getCell(matrix, i-1, j-1));
            cells.push(this.getCell(matrix, i, j-1));
            cells.push(this.getCell(matrix, i+1, j-1));
            cells.push(this.getCell(matrix, i-1, j));
            cells.push(this.getCell(matrix, i+1, j));
            cells.push(this.getCell(matrix, i-1, j+1));
            cells.push(this.getCell(matrix, i, j+1));
            cells.push(this.getCell(matrix, i+1, j+1));
            return cells;
        }

        private getCell(matrix: Cell[][], i: number, j: number) {
            if(i <= 0){
                i += this.fieldSize;
            }
            if(i >= this.fieldSize){
                i -= this.fieldSize;
            }
            if(j <= 0){
                j += this.fieldSize;
            }
            if(j >= this.fieldSize){
                j -= this.fieldSize
            }
            return matrix[i][j];
        }
    }
}
