import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Project } from 'types'

@Component({
  selector: 'kgi-libraries',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class LibrariesComponent implements OnInit {
  @Input() libraries: Project[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { libraries: Project[] }) => {
        this.libraries = data.libraries
      })
  }
}
