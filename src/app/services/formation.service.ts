import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  public formations: Formation[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/formations.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              let positions: string[] = [];
              for (let col = 1; col < 12; col++) {
                positions.push(row[col].trim());
              }
              let formation = new Formation(
                index,
                row[0],
                positions
              );
              this.formations.push(formation);
            }
        },
        error => {
            console.log(error);
        }
    );
  }

  public getFormations(): Formation[] {
    return this.formations;
  }
}
