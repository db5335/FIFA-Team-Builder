import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Outfielder } from '../model/outfielder';
import { Goalkeeper } from '../model/goalkeeper';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: (Outfielder | Goalkeeper)[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/outfielders.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 0; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.players.push(new Outfielder( row[0], parseInt(row[1], 10), row[2].trim()));
            }
        },
        error => {
            console.log(error);
        }
    );
  }

  getMatchingPlayers(name: string): (Outfielder | Goalkeeper)[] {
    let players: (Outfielder | Goalkeeper)[] = [];

    for (let player of this.players) {
      if (player.name.includes(name)) {
        players.push(player);
      }
    }

    return players;
  }
}
