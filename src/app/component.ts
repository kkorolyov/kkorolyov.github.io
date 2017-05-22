import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'kgi-root',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class RootComponent implements OnInit, AfterViewInit {
  @ViewChild('tabs') tabs: NgbTabset

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.tabs.select(this.currentPath())
  }

  private currentPath(): string {
    return this.location.path().replace(/\//, '')
  }

  tabChange(event: NgbTabChangeEvent): void {
    if (event.nextId != this.currentPath()) this.router.navigate([event.nextId])
  }
}
