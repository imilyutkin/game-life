var gameLife;
(function (gameLife) {
    'use strict';

    var RenderTable = (function () {
        function RenderTable($scope) {
            $scope.vm = this;

            this.scope = $scope;

            this.fieldSize = 40;
            var matrix = new Array(this.fieldSize);

            for (var i = 0; i < this.fieldSize; i++) {
                matrix[i] = new Array(this.fieldSize);
            }

            for (var i = 0; i < this.fieldSize; i++) {
                for (var j = 0; j < this.fieldSize; j++) {
                    matrix[i][j] = new gameLife.Cell();
                }
            }

            $scope.vm.matrix = matrix;
        }
        RenderTable.prototype.updateField = function () {
            var matrix = this.scope.vm.matrix;
            for (var i = 0; i < this.fieldSize; i++) {
                for (var j = 0; j < this.fieldSize; j++) {
                    var cells;
                    cells = this.getCells(matrix, i, j);
                    matrix[i][j].updateState(cells);
                }
            }

            for (var i = 0; i < this.fieldSize; i++) {
                for (var j = 0; j < this.fieldSize; j++) {
                    matrix[i][j].switchState();
                }
            }
        };

        RenderTable.prototype.getCells = function (matrix, i, j) {
            var cells = new Array();
            if (i <= 0) {
                i += this.fieldSize;
            }
            if (i >= this.fieldSize) {
                i -= this.fieldSize;
            }
            if (j <= 0) {
                j += this.fieldSize;
            }
            if (j >= this.fieldSize) {
                j -= this.fieldSize;
            }
            cells.push(this.getCell(matrix, i - 1, j - 1));
            cells.push(this.getCell(matrix, i, j - 1));
            cells.push(this.getCell(matrix, i + 1, j - 1));
            cells.push(this.getCell(matrix, i - 1, j));
            cells.push(this.getCell(matrix, i + 1, j));
            cells.push(this.getCell(matrix, i - 1, j + 1));
            cells.push(this.getCell(matrix, i, j + 1));
            cells.push(this.getCell(matrix, i + 1, j + 1));
            return cells;
        };

        RenderTable.prototype.getCell = function (matrix, i, j) {
            if (i <= 0) {
                i += this.fieldSize;
            }
            if (i >= this.fieldSize) {
                i -= this.fieldSize;
            }
            if (j <= 0) {
                j += this.fieldSize;
            }
            if (j >= this.fieldSize) {
                j -= this.fieldSize;
            }
            return matrix[i][j];
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
