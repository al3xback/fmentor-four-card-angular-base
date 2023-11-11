import { Component } from '@angular/core';

@Component({
	selector: 'app-card-calculator',
	templateUrl: './card-calculator.component.html',
	styleUrls: ['./card-calculator.component.scss']
})
export class CardCalculatorComponent {
	title = 'Calculator';
	description = 'Uses data from past projects to provide better delivery estimates';
	imageUrl = '/assets/images/icons/calculator.svg';
}
