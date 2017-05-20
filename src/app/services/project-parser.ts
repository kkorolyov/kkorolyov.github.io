import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Project } from 'types'

@Injectable()
export class ProjectParserService {
  private jsons = [
    'sqlob',
    'simple-logs',
    'simple-props'
  ]
  projects: Project[] = []

  constructor(private http: Http) {
    for (let json of this.jsons) {
      http.get(`assets/${json}.json`)
        .subscribe(res => this.projects.push(res.json()))
    }
  }

  get(title: string): Project {
    return this.projects.filter(p => p.title.indexOf(title) >= 0)[0]
  }
  getAll(): Project[] {
    return this.projects
  }
}
