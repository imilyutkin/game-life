module gameLife {
	'use strict';

	export class Cell {
		private state: boolean;

		private styleClass: string = "hello";

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
			this.styleClass = "bye";
		}
	}
}