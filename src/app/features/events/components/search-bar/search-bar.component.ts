import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <input [(ngModel)]="q" placeholder="search..." />
    <button (click)="doSearch()">Search</button>
  `
})
export class SearchBarComponent {
  q = '';
  @Output() search = new EventEmitter<string>();

  doSearch() { this.search.emit(this.q); }
}
