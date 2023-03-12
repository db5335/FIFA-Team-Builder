import { Injectable } from '@angular/core';
import { Formation } from '../model/formation';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  constructor() { }

  public build(formation: Formation, players: Player[]) {
    let playerCount = players.length;
    let positionCount = 11;
    
    let ratings: number[][] = [];
    let successors: number[] = [];
    let predecessors: number[] = [];
    let values: number[] = [];
    let costs: number[] = [];
    let used: boolean[] = [];
    let taken: boolean[] = [];
    let assigned = 0;

    for (let i = 0; i < playerCount; i++) {
      let row = [];
      for (let j = 0; j < positionCount; j++) {
        row.push((players[i] as any)[formation.positions[j].toLowerCase()]);
      }
      ratings.push(row);
    }

    for (let i = 0; i < playerCount; i++) {
      successors.push(-1);
      values.push(-1);
      used.push(false);
      for (let j = 0; j < positionCount; j++) {
          if (ratings[i][j] > values[i]) {
              values[i] = ratings[i][j];
              successors[i] = j;
          }
      }
    }

    for (let j = 0; j < positionCount; j++) {
      predecessors.push(-1);
      costs.push(0);
      taken.push(false);
    }
    
    console.log(ratings);

    while (assigned < positionCount) {
      let player = -1, successor = -1, value = -1;
      for (let i = 0; i < playerCount; i++) {
        if (!used[i] && values[i] > value) {
          player = i;
          value = values[i];
        }
      }
      used[player] = true;

      console.log(predecessors);
      console.log(successors);

      let c = 0;

      do {
        console.log("Assigning " + player + " to " + successors[player]);
        successor = successors[player];
        ratings[player][successor] = -1;
        let temp = player;
        player = predecessors[successor];
        predecessors[successor] = temp;
        if (c++ > 25) {
          console.log(ratings);
          return [];
        }
      } while (player != -1);

      let changed = false;
      do {
        console.log('second loop')
        changed = false;
        for (let i = 0; i < playerCount; i++) {
          let tempValue = -1, tempSuccessor = -1;
          for (let j = 0; j < positionCount; j++) {
            if (ratings[i][j] + costs[j] > tempValue) {
              tempValue = ratings[i][j] + costs[j];
              tempSuccessor = j;
            }
          }
          if (values[i] != tempValue || successors[i] != tempSuccessor) {
            changed = true;
            for (let j = 0; j < positionCount; j++) {
              if (predecessors[j] == i) {
                costs[j] = costs[j] + tempValue - values[i];
                break;
              }
            }
            values[i] = tempValue;
            successors[i] = tempSuccessor;
          }
        }
      } while (changed);

      assigned++;
    }

    console.log(predecessors)
    return predecessors;
  }
}
