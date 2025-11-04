import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'E:/4twin/angular/Workshops/Angular18_4TWIN4_25_26/src/app/data-access/events.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit {
   @Input() event: any;

  constructor(private route: ActivatedRoute, private eventsSvc: EventsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // string
    this.event = this.eventsSvc.getById(Number(id));
  }

}
