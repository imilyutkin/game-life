module gameLife {
    'use strict';
    
    var lifeModule = angular.module("conwayLifeApp", [])
        .controller('renderTable', RenderTable);
}