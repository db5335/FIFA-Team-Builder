import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  name = '';
  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public search(): void {
    this.searchEvent.emit(this.name);
  }
}
