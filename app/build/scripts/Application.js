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
                    matrix[i][j] = new gameLife.Cell();
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
        function Cell() {
            this.styleClass = "dead";
            this.isAlive = false;
        }
        Cell.prototype.getClass = function () {
            return this.styleClass;
        };
        Cell.prototype.getState = function () {
            return this.isAlive;
        };
        Cell.prototype.switchState = function () {
            this.isAlive = !this.isAlive;
            if (this.isAlive) {
                this.styleClass = "alive";
            }
            else {
                this.styleClass = "dead";
            }
        };
        return Cell;
    })();
    gameLife.Cell = Cell;
})(gameLife || (gameLife = {}));
