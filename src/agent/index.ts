//import core modules
import * as angular from 'angular';
import {NgModule} from '@angular/core';

//import module components
import {AgentCmp} from './agent';

export const AgentModule = angular.module('AgentModule', ['ngRoute']);

//register ng1 components
AgentModule.component('agent', AgentCmp);
AgentModule.config(($routeProvider) => {
	$routeProvider.when('/', {template : '<agent></agent>'});
});

//register ng2 module (currently empty)
@NgModule({})
export class AgentNgModule {
}
