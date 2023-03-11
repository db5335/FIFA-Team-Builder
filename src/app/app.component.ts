import { Component } from '@angular/core';
import { Player } from './model/player';
import { SquadService } from './services/squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIFA-Team-Builder';

  constructor(
    private squadService: SquadService
  ) {}

  public onAdd(player: Player) {
    this.squadService.add(player);
  }

  public onRemove(player: Player) {
    this.squadService.remove(player);
  }

  public getPlayers() {
    return this.squadService.squad;
  }
}
