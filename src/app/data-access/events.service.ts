import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events = [
    { id: 1, title: 'Metallica', date: '2025-11-11', address: 'Tunis', price: 200, description: 'wawawawawaw' },
    { id: 2, title: 'AC/DC', date: '2025-12-12', address: 'Sousse', price: 180, description: 'hhhhhhhhhhhhh' },
    { id: 3, title: 'Guns And Roses', date: '2026-01-01', address: 'Majdia', price: 170, description: 'eeeeeeeeeeeeee' }
  ];

  getAll() {
    return this.events;
  }

  getById(id: number) {
    return this.events.find(e => e.id === id);
  }

  search(term: string) {
    const t = term.toLowerCase();
    return this.events.filter(e =>
      e.title.toLowerCase().includes(t) ||
      e.address.toLowerCase().includes(t)
    );
  }
}
