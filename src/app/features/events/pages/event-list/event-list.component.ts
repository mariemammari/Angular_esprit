import { Component } from '@angular/core';
import { EventsService } from 'E:/4twin/angular/Workshops/Angular18_4TWIN4_25_26/src/app/data-access/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: any[] = [];
  constructor(private eventsSvc: EventsService) { }

  ngOnInit() {
    this.events = this.eventsSvc.getAll();
  }
  onSearch(term: string) {   // ✅ ajoute ceci
    this.events = term
      ? this.eventsSvc.search(term)
      : this.eventsSvc.getAll();
  }

}
