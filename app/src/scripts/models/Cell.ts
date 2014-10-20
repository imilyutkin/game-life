module gameLife {
	'use strict';

	export class Cell {
		private state: number;

		constructor(state: number) {
			this.state = state;
		}

		public getState() : number {
			return this.state;
		}
	}
}