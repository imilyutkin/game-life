module gameLife {
    'use strict';

    export class RenderTable {

        public static $inject = [
            '$scope'
        ];

        constructor($scope){
            $scope.vm = this;

            var size:number = 45;
            var matrix:Cell[][] = new Array<Cell[]>(size);

            for(var i = 0; i < size; i++) {
                matrix[i] = new Array<Cell>(45);
            }

            for(var i = 0; i < size; i++) {
                for(var j = 0; j < size; j++) {
                    matrix[i][j] = new Cell(i + j);
                }
            }

            $scope.vm.matrix = matrix;
        }

    }
}
