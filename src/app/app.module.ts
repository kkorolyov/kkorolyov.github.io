import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { RoutingModule } from './routing.module'

import { ProjectParserService } from './service/project-parser.service'

import { AppComponent } from './app.component'
import { ProjectComponent } from './project/project.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		RoutingModule
	],
	declarations: [
		AppComponent,
		ProjectComponent,
		NavComponent
	],
	providers: [
		ProjectParserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
