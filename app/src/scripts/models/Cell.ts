module gameLife {
    'use strict';

    export class Cell {
        private isAlive: boolean;

        private styleClass: string = "dead";

        constructor() {
            this.isAlive = false;
        }

        public getClass() : string {
            return this.styleClass;
        }

        public getState() : boolean {
            return this.isAlive;
        }

        public switchState() {
            this.isAlive = !this.isAlive;
            if(this.isAlive) {
                this.styleClass = "alive";
            } else {
                this.styleClass = "dead";
            }
        }

        public updateState(cells:Cell[]) {
            var liveCellsCount: number = 0;
            var cellsCount: number = cells.length;
            for(var i = 0; i < cellsCount; i++) {
                var cell:Cell = cells[i];
                if(cell.getState()){
                    liveCellsCount += 1;
                }
            }
            this.isAlive = liveCellsCount == 2;
        }
    }
}