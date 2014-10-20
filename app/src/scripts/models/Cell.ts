module gameLife {
	'use strict';

	export class Cell {
		private state: boolean;

		private styleClass: string = "dead";

		constructor(state: boolean) {
			this.state = state;
		}

		public getClass() : string {
			return this.styleClass;
		}

		public getState() : boolean {
			return this.state;
		}

		public switchClass() {
			if(this.styleClass == "dead"){
				this.styleClass = "alive";
			} else {
				this.styleClass = "dead";
			}
		}
	}
}