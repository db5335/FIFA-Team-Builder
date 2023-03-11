import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class SquadService {

  constructor() { }

  squad: Set<Player> = new Set();

  public add(player: Player) {
    this.squad.add(player);
  }

  public remove(player: Player) {
    this.squad.delete(player);
  }
}
