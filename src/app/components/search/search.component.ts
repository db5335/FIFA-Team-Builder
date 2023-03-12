import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) { }

  matches: Player[] = [];
  @Output() addEvent = new EventEmitter<Player>();
  @Output() removeEvent = new EventEmitter<Player>();

  ngOnInit(): void {
  }

  public onSearch(name: string): void {
    this.matches = this.playerService.getMatchingPlayers(name);
  }

  public add(player: Player): void {
    this.addEvent.emit(player);
  }

  public remove(player: Player): void {
    this.removeEvent.emit(player);
  }
}
