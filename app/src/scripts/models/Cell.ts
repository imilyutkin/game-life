module gameLife {
    'use strict';

    export class Cell {
        private isAlive: boolean;
        private nextState: boolean;

        private styleClass: string = "dead";

        constructor() {
            this.isAlive = false;
            this.nextState = true;
        }

        public getClass() : string {
            return this.styleClass;
        }

        public getState() : boolean {
            return this.isAlive;
        }

        public switchState() {
            this.isAlive = this.nextState;
            this.nextState = !this.nextState;
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
            // if(liveCellsCount == 2 && !this.isAlive) {
            //     this.switchState();
            // }
            if(this.isAlive){
                this.nextState = liveCellsCount == 3 || liveCellsCount == 2;
            } else {
                this.nextState = liveCellsCount == 3;
            }
            
        }
    }
}