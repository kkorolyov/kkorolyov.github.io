import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ProjectParserService } from '../service/project-parser.service'

@Component({
  selector: 'kgi-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  projects: any[]

  constructor(
    private router: Router,
    private projectParser: ProjectParserService
  ) { }

  ngOnInit() {
    this.projects = this.projectParser.getAll()
  }

  go(name: string): void {
    this.router.navigate(['/project', name])
  }

  kebabify(name: string): string {
    return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  }
}
