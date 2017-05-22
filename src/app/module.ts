import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { RoutingModule } from 'app/routing'

import { ParserService } from 'app/services/parser'

import { RootComponent } from './component'
import { InfoComponent } from './info/component'
import { LibrariesComponent } from './libraries/component'
import { ApplicationsComponent } from './applications/component'

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
		LibrariesComponent,
		ApplicationsComponent,
		InfoComponent
	],
	providers: [
		ParserService
	],
	bootstrap: [RootComponent]
})
export class RootModule { }
