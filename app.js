class Process {
	constructor(name, responsible) {
		this.name = name;
		this.responsible = responsible;
	}

	createStage(stageName, deadline) {
		// Create a stage for the process, with a deadline
	}

	deleteStage() {
		// Delete stage
	}

	asignStageResponsible(stageName) {
		// Add a stage responsible
	}

	deleteStageResponsible() {
		// Delete stage responsibe
	}

	modifyStageResponsible() {}

	modifyStageDeadline() {}
}

const p1 = new Process('contrato whateva', 'felipe');

console.log(p1.createStage('firmas', '2020 / 07 / 20'));
