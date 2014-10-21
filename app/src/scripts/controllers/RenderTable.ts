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

            var size:number = 45;
            var matrix:Cell[][] = new Array<Cell[]>(size);

            for(var i = 0; i < size; i++) {
                matrix[i] = new Array<Cell>(45);
            }

            for(var i = 0; i < size; i++) {
                for(var j = 0; j < size; j++) {
                    matrix[i][j] = new Cell();
                }
            }

            $scope.vm.matrix = matrix;
        }

        public updateField() {
            this.scope.vm.matrix = null;
        }
    }
}
