import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Project } from 'types'

@Component({
  selector: 'kgi-project',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { project: Project }) => {
        this.project = data.project
      })
  }
}
