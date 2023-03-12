import { Component } from '@angular/core';
import { Formation } from './model/formation';
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

  public onSelect(formation: Formation) {
    console.log(formation);
    this.squadService.setFormation(formation);
  }

  public getFormation() {
    return this.squadService.formation;
  }

  public getPlayers() {
    return Array.from(this.squadService.squad);
  }
}
