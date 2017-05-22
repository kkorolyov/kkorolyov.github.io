import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Project } from 'types'

@Component({
  selector: 'kgi-applications',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { projects: Project[] }) => {
        this.projects = data.projects
      })
  }
}
