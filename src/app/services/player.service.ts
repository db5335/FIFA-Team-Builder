import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: Player[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/players.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              let player = new Player(
                index,
                row[0],
                parseInt(row[2], 10),
                row[1],
                parseInt(row[3], 10),
                parseInt(row[4], 10),
                parseInt(row[5], 10),
                parseInt(row[6], 10),
                parseInt(row[7], 10),
                parseInt(row[8], 10),
                parseInt(row[9], 10),
                parseInt(row[10], 10),
                parseInt(row[11], 10),
                parseInt(row[12], 10),
                parseInt(row[13], 10),
                parseInt(row[14], 10),
                parseInt(row[15], 10),
                parseInt(row[16], 10),
                parseInt(row[17], 10),
                parseInt(row[18], 10),
                parseInt(row[19], 10)
              );
              this.players.push(player);
            }
        },
        error => {
            console.log(error);
        }
    );
  }

  getMatchingPlayers(name: string): Player[] {
    let players: Player[] = [];
    name = name.toLowerCase();

    for (let player of this.players) {
      if (player.name.toLowerCase().includes(name)) {
        players.push(player);
        if (players.length == 10) return players;
      }
    }

    return players;
  }

  getRandomPlayer() {
    return this.players[Math.floor(Math.random() * this.players.length)];
  }
}
