import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'kgi-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { project: any }) => {
        this.project = data.project
      })
  }
}
