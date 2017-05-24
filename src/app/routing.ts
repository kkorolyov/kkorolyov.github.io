import { NgModule, Injectable } from '@angular/core'
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'

import { ParserService } from 'app/services/parser'

import { InfoComponent } from 'app/info/info'
import { ProjectsComponent } from 'app/projects/projects'

import { Project } from 'types'

@Injectable()
export class LibrariesResolver implements Resolve<Project[]> {
  constructor(private parser: ParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.get({ images: undefined })
  }
}
@Injectable()
export class ApplicationsResolver implements Resolve<Project[]> {
  constructor(private parser: ParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.get({ images: '*' })
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
        component: ProjectsComponent,
        resolve: {
          projects: LibrariesResolver
        }
      },
      {
        path: 'applications',
        component: ProjectsComponent,
        resolve: {
          projects: ApplicationsResolver
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
