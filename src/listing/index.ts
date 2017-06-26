//import core modules
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static';

//import components
import {ForsaleListingsCmp} from './forsale_listings';
import {SoldListingsCmp} from './sold_listings';

export const ListingModule = angular.module('ListingModule', ['ngRoute']);

//register ng1 components
ListingModule.component('soldListings', SoldListingsCmp);

//register ng2 components
@NgModule({
	declarations: [ForsaleListingsCmp],
	entryComponents: [ForsaleListingsCmp]
})

export class ListingNgModule {}

//downgrade ng2 components
ListingModule.directive('forsaleListings', <any>downgradeComponent({
	component: ForsaleListingsCmp,
	inputs: ['text']
}));
