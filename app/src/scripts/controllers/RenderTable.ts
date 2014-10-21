module gameLife {
    'use strict';

    export class RenderTable {

        public static $inject = [
            '$scope'
        ];

        private scope: ng.IScope;

        constructor($scope: ng.IScope){
            $scope.vm = this;

            this.scope = $scope;

            var size:number = 40;
            var matrix:Cell[][] = new Array<Cell[]>(size);

            for(var i = 0; i < size; i++) {
                matrix[i] = new Array<Cell>(size);
            }

            for(var i = 0; i < size; i++) {
                for(var j = 0; j < size; j++) {
                    matrix[i][j] = new Cell();
                }
            }

            $scope.vm.matrix = matrix;
        }

        public updateField() {
            var count: number = this.scope.vm.matrix.length;
            var matrix: Cell[][] = this.scope.vm.matrix;
            for(var i = 0; i < count; i++) {
                for(var j = 0; j < count; j++) {
                    if((i > 0 && j > 0) && (i < count -1 && j < count -1)) {
                        var cells:Cell[] = new Array<Cell>();
                        cells.push(matrix[i-1][j-1]);
                        cells.push(matrix[i][j-1]);
                        cells.push(matrix[i+1][j-1]);
                        cells.push(matrix[i-1][j]);
                        cells.push(matrix[i+1][j]);
                        cells.push(matrix[i-1][j+1]);
                        cells.push(matrix[i][j+1]);
                        cells.push(matrix[i+1][j+1]);
                        matrix[i][j].updateState(cells);
                    }
                }
            }

            for(var i = 0; i < count; i++) {
                for(var j = 0; j < count; j++) {
                    matrix[i][j].switchState();
                }
            }
        }
    }
}
