import { NgModule, Injectable } from '@angular/core'
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'

import { ProjectParserService } from 'app/services/project-parser'

import { InfoComponent } from 'app/info/component'
import { ProjectComponent } from 'app/project/component'

import { Project } from 'types'

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  constructor(private parser: ProjectParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.get(route.params.project)
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
        path: 'project/:project',
        component: ProjectComponent,
        resolve: {
          project: ProjectResolver
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ])
  ],
  providers: [ProjectResolver],
  exports: [RouterModule]
})
export class RoutingModule { }
