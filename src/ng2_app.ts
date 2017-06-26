//import core modules
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

//import app modules
import {ListingNgModule} from './listing';
import {AgentNgModule} from './agent';

@Component({
	selector: 'ng-upgrade',
	template: `
		<div class="jumbotron text-center">
			<h1>ng-upgrade</h1>
		</div>
		<div class="ng-view container text-center"></div>
	`,
})
export class NgUpgradeCmp {}

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,
		ListingNgModule,
		AgentNgModule,
	],
	bootstrap: [NgUpgradeCmp],
	declarations: [NgUpgradeCmp]
})
export class Ng2AppModule {
	constructor(public upgrade: UpgradeModule){}
}
