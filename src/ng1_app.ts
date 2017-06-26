//import core modules
import * as angular from 'angular'
import 'angular-route'
import {NgModule} from '@angular/core';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static';

// import app modules
import {ListingModule} from './listing';
import {AgentModule} from './agent';

export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute', ListingModule.name, AgentModule.name ]);

Ng1AppModule.config(($locationProvider) => {
	$locationProvider.html5Mode(true)
});

@NgModule({})
export class Ng1AppNgModule {}
