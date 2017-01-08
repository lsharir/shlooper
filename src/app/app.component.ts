import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	buckets: FirebaseListObservable<any[]>;

	constructor(private af: AngularFire) {
		this.buckets = af.database.list('/buckets');
	}

	addBucket() {
		this.buckets.push({
			name: 'New Bucket'
		});
	}
}
