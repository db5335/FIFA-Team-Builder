import { Component } from '@angular/core';
import { Formation } from './model/formation';
import { Player } from './model/player';
import { BuilderService } from './services/builder.service';
import { PlayerService } from './services/player.service';
import { SquadService } from './services/squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIFA-Team-Builder';

  constructor(
    private squadService: SquadService,
    private builderService: BuilderService,
    private playerService: PlayerService
  ) {}

  solution: { formation: Formation, players: Player[], assignment: number[] } | null = null;

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

  public run() {
    if (this.getFormation() != null && this.getPlayers().length >= 11) {
      this.solution = {
        formation: this.getFormation() as Formation,
        players: this.getPlayers() as Player[],
        assignment: this.builderService.build(this.getFormation() as Formation, this.getPlayers())
      };
      console.log(this.solution);
      setTimeout(() => {
        document.getElementById('team')!.scrollIntoView({behavior: 'smooth'});
      }, 10);

    }
  }

  public randomize() {
    this.squadService.clear();
    while (this.getPlayers().length < 18) {
      this.squadService.add(this.playerService.getRandomPlayer());
    }
    this.run();
  }
}
