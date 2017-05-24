import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { RoutingModule } from 'app/routing'

import { ParserService } from 'app/services/parser'

import { RootComponent } from './root'
import { InfoComponent } from './info/info'
import { ProjectsComponent } from './projects/projects'
import { ImageBlockComponent } from './image-block/image-block'

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
		InfoComponent,
		ProjectsComponent,
		ImageBlockComponent
	],
	providers: [
		ParserService
	],
	bootstrap: [RootComponent]
})
export class RootModule { }
