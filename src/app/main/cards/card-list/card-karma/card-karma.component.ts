import { Component } from '@angular/core';

@Component({
	selector: 'app-card-karma',
	templateUrl: './card-karma.component.html',
	styleUrls: ['./card-karma.component.scss']
})
export class CardKarmaComponent {
	title = 'Karma';
	description = 'Regularly evaluates our talent to ensure quality';
	imageUrl = '/assets/images/icons/karma.svg';
}
