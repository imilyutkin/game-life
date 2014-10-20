var gameLife;
(function (gameLife) {
    'use strict';
    var RenderTable = (function () {
        function RenderTable($scope) {
            $scope.vm = this;
            var size = 45;
            var matrix = new Array(size);
            for (var i = 0; i < size; i++) {
                matrix[i] = new Array(45);
            }
            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size; j++) {
                    matrix[i][j] = new gameLife.Cell(i + j);
                }
            }
            $scope.vm.matrix = matrix;
        }
        RenderTable.$inject = [
            '$scope'
        ];
        return RenderTable;
    })();
    gameLife.RenderTable = RenderTable;
})(gameLife || (gameLife = {}));
var gameLife;
(function (gameLife) {
    'use strict';
    var lifeModule = angular.module("conwayLifeApp", []).controller('renderTable', gameLife.RenderTable);
})(gameLife || (gameLife = {}));
var gameLife;
(function (gameLife) {
    'use strict';
    var Cell = (function () {
        function Cell(state) {
            this.state = state;
        }
        Cell.prototype.getState = function () {
            return this.state;
        };
        return Cell;
    })();
    gameLife.Cell = Cell;
})(gameLife || (gameLife = {}));
