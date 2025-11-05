import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: '', component: EventListComponent }, 
      { path: 'add', component: AddEventComponent },       // /adding events
      { path: ':id', component: EventDetailComponent }    // /events/:id
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventsRoutingModule { }
