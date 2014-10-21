var gameLife;
(function (gameLife) {
    'use strict';

    var RenderTable = (function () {
        function RenderTable($scope) {
            $scope.vm = this;

            this.scope = $scope;

            var size = 40;
            var matrix = new Array(size);

            for (var i = 0; i < size; i++) {
                matrix[i] = new Array(size);
            }

            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size; j++) {
                    matrix[i][j] = new gameLife.Cell();
                }
            }

            $scope.vm.matrix = matrix;
        }
        RenderTable.prototype.updateField = function () {
            var count = this.scope.vm.matrix.length;
            var matrix = this.scope.vm.matrix;
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    if ((i > 0 && j > 0) && (i < count - 1 && j < count - 1)) {
                        var cells = new Array();
                        cells.push(matrix[i - 1][j - 1]);
                        cells.push(matrix[i][j - 1]);
                        cells.push(matrix[i + 1][j - 1]);
                        cells.push(matrix[i - 1][j]);
                        cells.push(matrix[i + 1][j]);
                        cells.push(matrix[i - 1][j + 1]);
                        cells.push(matrix[i][j + 1]);
                        cells.push(matrix[i + 1][j + 1]);
                        matrix[i][j].updateState(cells);
                    }
                }
            }

            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    matrix[i][j].switchState();
                }
            }
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
            this.nextState = true;
        }
        Cell.prototype.getClass = function () {
            return this.styleClass;
        };

        Cell.prototype.getState = function () {
            return this.isAlive;
        };

        Cell.prototype.switchState = function () {
            this.isAlive = this.nextState;
            this.nextState = !this.nextState;
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

            // if(liveCellsCount == 2 && !this.isAlive) {
            //     this.switchState();
            // }
            if (this.isAlive) {
                this.nextState = liveCellsCount == 3 || liveCellsCount == 2;
            } else {
                this.nextState = liveCellsCount == 3;
            }
        };
        return Cell;
    })();
    gameLife.Cell = Cell;
})(gameLife || (gameLife = {}));
