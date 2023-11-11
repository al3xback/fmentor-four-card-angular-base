import { Component } from '@angular/core';

@Component({
	selector: 'app-card-team-builder',
	templateUrl: './card-team-builder.component.html',
	styleUrls: ['./card-team-builder.component.scss']
})
export class CardTeamBuilderComponent {
	title = 'Team Builder';
	description =
		'Scans our talent network to create the optimal team for your project';
	imageUrl = '/assets/images/icons/team-builder.svg';
}
