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

const createProcessBtn = document.getElementById('create-process-btn');
const section = document.querySelector('.open-processes');
const wrapper = document.querySelector('.wrapper');
const closeFormBtn = document.getElementById('close-form-btn');
const addStageBtn = document.getElementById('add-stage-btn');
const newStage = document.querySelector('#new-stage');

if (createProcessBtn) {
	createProcessBtn.addEventListener('click', () => {
		wrapper.classList.add('show');
	});
}

if (addStageBtn) {
	addStageBtn.addEventListener('click', () => {
		newStage.classList.add('show');
		console.log('prueba');
	});
}

closeFormBtn.addEventListener('click', () => {
	wrapper.classList.remove('show');
});
