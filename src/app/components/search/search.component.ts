import { Component, OnInit } from '@angular/core';
import { Goalkeeper } from 'src/app/model/goalkeeper';
import { Outfielder } from 'src/app/model/outfielder';
import { PlayerService } from 'src/app/services/player.service';
import { SquadService } from 'src/app/services/squad.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private squadService: SquadService
  ) { }

  matches: (Outfielder | Goalkeeper)[] = [];

  ngOnInit(): void {
  }

  public onSearch(name: string): void {
    this.matches = this.playerService.getMatchingPlayers(name);
  }
}
