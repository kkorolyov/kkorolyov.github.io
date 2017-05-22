import { NgModule, Injectable } from '@angular/core'
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'

import { ParserService } from 'app/services/parser'

import { InfoComponent } from 'app/info/component'
import { LibrariesComponent } from 'app/libraries/component'
import { ApplicationsComponent } from 'app/applications/component'

import { Library, Application } from 'types'

@Injectable()
export class LibrariesResolver implements Resolve<Library> {
  constructor(private parser: ParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.getLibrary()
  }
}
@Injectable()
export class ApplicationsResolver implements Resolve<Application> {
  constructor(private parser: ParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.getApplication()
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'libraries',
        component: LibrariesComponent,
        resolve: {
          libraries: LibrariesResolver
        }
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
        resolve: {
          applications: ApplicationsResolver
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ])
  ],
  providers: [LibrariesResolver, ApplicationsResolver],
  exports: [RouterModule]
})
export class RoutingModule { }
