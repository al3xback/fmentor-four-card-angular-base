import { Component } from '@angular/core';

@Component({
	selector: 'app-card-intro',
	templateUrl: './card-intro.component.html',
	styleUrls: ['./card-intro.component.scss']
})
export class CardIntroComponent {
	subtitle = 'Reliable, efficient delivery';
	title = 'Powered by Technology';
	description =
		'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';
}
