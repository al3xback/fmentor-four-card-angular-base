import { Component } from '@angular/core';

@Component({
	selector: 'app-card-supervisor',
	templateUrl: './card-supervisor.component.html',
	styleUrls: ['./card-supervisor.component.scss']
})
export class CardSupervisorComponent {
	title = 'Supervisor';
	desc = 'Monitors activity to identify project roadblocks';
	imageSrc = '/assets/images/icons/supervisor.svg';
}
