import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventDetailComponent,
    EventCardComponent,
    SearchBarComponent,
    AddEventComponent,

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,          // for ngModel
    ReactiveFormsModule,  // for Reactive Forms
    RouterModule          // for routerLink
  ]
})
export class EventsModule { }
