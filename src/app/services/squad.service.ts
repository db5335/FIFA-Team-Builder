import { Injectable } from '@angular/core';
import { Formation } from '../model/formation';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class SquadService {

  constructor() { }

  formation: Formation | null = null;
  squad: Set<Player> = new Set();

  public add(player: Player) {
    this.squad.add(player);
  }

  public remove(player: Player) {
    this.squad.delete(player);
  }

  public setFormation(formation: Formation) {
    this.formation = formation;
  }
}
