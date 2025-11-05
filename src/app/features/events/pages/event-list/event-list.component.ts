import { Component, OnInit } from '@angular/core';
import { EventsService } from 'E:/4twin/angular/Workshops/Angular18_4TWIN4_25_26/src/app/data-access/events.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[] = [];

  constructor(
    private eventsSvc: EventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Load all events initially
    this.events = this.eventsSvc.getAll();
  }

  onSearch(term: string) {
    if (!term || term.trim() === '') {
      this.events = this.eventsSvc.getAll();
    } else {
      this.events = this.eventsSvc.search(term);
    }
  }

  goToAdd() {
    this.router.navigate(['events', 'add']);
  }
}
