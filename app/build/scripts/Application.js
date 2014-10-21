var gameLife;
(function (gameLife) {
    'use strict';

    var RenderTable = (function () {
        function RenderTable($scope) {
            $scope.vm = this;

            this.scope = $scope;

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
        RenderTable.prototype.updateField = function () {
            this.scope.vm.matrix = null;
        };
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
            } else {
                this.styleClass = "dead";
            }
        };

        Cell.prototype.updateState = function (cells) {
            var liveCellsCount = 0;
            var cellsCount = cells.length;
            for (var i = 0; i < cellsCount; i++) {
                var cell = cells[i];
                if (cell.getState()) {
                    liveCellsCount += 1;
                }
            }
            this.isAlive = liveCellsCount == 2;
        };
        return Cell;
    })();
    gameLife.Cell = Cell;
})(gameLife || (gameLife = {}));
