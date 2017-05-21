import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Project } from 'types'

@Injectable()
export class ProjectParserService {
  constructor(private http: Http) { }

  get(title: string): Observable<Project> {
    return this.getAll()
      .map(projects => projects.filter(p => p.title.indexOf(title) >= 0)[0])
  }
  getAll(): Observable<Project[]> {
    return this.http.get('assets/projects.json')
      .map(res => res.json())
  }
}
