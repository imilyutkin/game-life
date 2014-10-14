var gameLife;
(function (gameLife) {
    'use strict';

    var RenderTable = (function () {
        function RenderTable($scope) {
            $scope.vm = this;

            var matrix = [];
            var size = 46;
            for (var i = 0; i < size; i++) {
                matrix[i] = new Array(size);
            }

            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size; j++) {
                    matrix[i][j] = i + j;
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
