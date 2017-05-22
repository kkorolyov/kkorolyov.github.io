import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Application } from 'types'

@Component({
  selector: 'kgi-applications',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class ApplicationsComponent implements OnInit {
  @Input() applications: Application[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { applications: Application[] }) => {
        this.applications = data.applications
      })
  }
}
