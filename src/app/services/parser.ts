import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Project } from 'types'

@Injectable()
export class ParserService {
  constructor(private http: Http) { }

  /**
   * Retrieves projects.
   * 
   * @param {string} [title] title to filter by
   * @returns {(Observable<Library | Library[]>)} 
   * 
   * @memberof ParserService
   */
  get(title?: string): Observable<Project | Project[]> {
    const projects = this.http.get('assets/projects.json').map(res => res.json())

    return title
      ? projects.map(projects => projects.filter(p => p.title.indexOf(title) >= 0)[0])
      : projects
  }
}
