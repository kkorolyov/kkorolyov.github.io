import { Injectable } from '@angular/core';

import sqlob from 'assets/sqlob.json'
import simpleLogs from 'assets/simple-logs.json'
import simpleProps from 'assets/simple-props.json'

@Injectable()
export class ProjectParserService {
  projects: any[] = [
    sqlob,
    simpleLogs,
    simpleProps
  ]

  get(name: String): any {
    return this.projects.filter(p => p.title.indexOf(name) >= 0)[0]
  }
  getAll(): any[] {
    return this.projects
  }
}
