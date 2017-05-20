import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { RoutingModule } from 'app/routing'

import { ProjectParserService } from 'app/services/project-parser'

import { RootComponent } from './component'
import { NavComponent } from './nav/component';
import { ProjectComponent } from './project/component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		RoutingModule
	],
	declarations: [
		RootComponent,
		ProjectComponent,
		NavComponent
	],
	providers: [
		ProjectParserService
	],
	bootstrap: [RootComponent]
})
export class RootModule { }
