import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-module-one',
	templateUrl: './module-one.component.html',
	styleUrls: ['./module-one.component.scss'],
})
export class ModuleOneComponent implements OnInit {
	clicked: number;

	ngOnInit(): void {
		this.clicked = 0;
	}

	clicking() {
		this.clicked++;
	}
}
