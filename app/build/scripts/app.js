var lifeModule = angular.module("conwayLifeApp", []);

lifeModule.controller('RenderTable', function ($scope) {
    var matrix = [];
    var size = 46;
    for(var i = 0; i < size; i++) {
        matrix[i] = new Array(size);
    }

    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            matrix[i][j] = i + j;
        }
    }

    $scope.matrix = matrix;
});