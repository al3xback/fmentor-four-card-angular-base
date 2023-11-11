import { Component } from '@angular/core';

@Component({
	selector: 'app-card-supervisor',
	templateUrl: './card-supervisor.component.html',
	styleUrls: ['./card-supervisor.component.scss']
})
export class CardSupervisorComponent {
	title = 'Supervisor';
	description = 'Monitors activity to identify project roadblocks';
	imageUrl = '/assets/images/icons/supervisor.svg';
}
