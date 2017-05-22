import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Project } from 'types'

const WILDCARD: string = '*'

@Injectable()
export class ParserService {
  constructor(private http: Http) { }

  /**
   * Retrieves projects.
   * 
   * @param {{}} [properties] project properties to filter by, either with a set value or wildcard '*'
   * @returns {(Observable<Project[]>)} 
   * 
   * @memberof ParserService
   */
  get(properties?: {}): Observable<Project[]> {
    const projects: Observable<Project[]> = this.http.get('assets/projects.json').map(res => res.json())

    return properties
      ? projects.map(projects => projects.filter(p => {
        for (let property in properties) {
          const value = properties[property]
          const match: boolean = (value === WILDCARD)
            ? p[property] !== undefined
            : p[property] == value
          if (!match) return false
        }
        return true
      }))
      : projects
  }
}
