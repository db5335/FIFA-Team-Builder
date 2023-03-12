import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-select-formation',
  templateUrl: './select-formation.component.html',
  styleUrls: ['./select-formation.component.scss']
})
export class SelectFormationComponent implements OnInit {

  constructor(
    private formationService: FormationService
  ) { }

  formation: string = '';
  @Output() formationEvent = new EventEmitter<Formation>();
  formations: Formation[] = [];

  ngOnInit(): void {
    this.formations = this.formationService.getFormations();
  }

  select(): void {
    for (let formation of this.formations) {
      if (formation.name == this.formation) {
        this.formationEvent.emit(formation);
        break;
      }
    }
  }

}
