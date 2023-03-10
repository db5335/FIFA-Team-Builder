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
              let player = new Outfielder(
                row[0],
                parseInt(row[1], 10),
                row[2],
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
                parseInt(row[18], 10)
              );
              this.players.push(player);
            }
        },
        error => {
            console.log(error);
        }
    );

    this.http.get('assets/goalkeepers.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 0; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              let player = new Goalkeeper(
                row[0],
                parseInt(row[1], 10)
              );
              this.players.push(player);
            }
        },
        error => {
            console.log(error);
        }
    );
  }

  getMatchingPlayers(name: string): (Outfielder | Goalkeeper)[] {
    let players: (Outfielder | Goalkeeper)[] = [];
    name = name.toLowerCase();

    for (let player of this.players) {
      if (player.name.toLowerCase().includes(name)) {
        players.push(player);
        if (players.length == 10) return players;
      }
    }

    return players;
  }
}
