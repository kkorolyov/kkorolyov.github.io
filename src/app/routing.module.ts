import { NgModule, Injectable } from '@angular/core'
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'

import { ProjectParserService } from './service/project-parser.service'

import { ProjectComponent } from './project/project.component'

@Injectable()
class ProjectResolver implements Resolve<any> {
  constructor(private parser: ProjectParserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.parser.get(route.params.project)
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'project/:project',
        component: ProjectComponent,
        resolve: {
          project: ProjectResolver
        }
      }
    ])
  ],
  providers: [ProjectResolver],
  exports: [RouterModule]
})
export class RoutingModule { }
