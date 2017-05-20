import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap'

import { ProjectParserService } from 'app/services/project-parser'

import { Project } from 'types'

@Component({
  selector: 'kgi-nav',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class NavComponent {
  projects: Project[]

  constructor(private router: Router, private projectParser: ProjectParserService) {
    this.projects = this.projectParser.getAll()
  }

  go(name: string): void {
    this.router.navigate(['/project', name])
  }
  tabChange(event: NgbTabChangeEvent): void {
    this.go(event.nextId)
  }
}
