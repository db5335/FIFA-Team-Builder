import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  public onSearch(name: string): void {
    console.log(this.playerService.getMatchingPlayers(name));
  }
}
