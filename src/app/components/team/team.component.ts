import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  @Input() formation: Formation | undefined = undefined;
  @Input() players: Player[] | undefined = undefined;
  @Input() solution: number[] | undefined = undefined;

  ngOnInit(): void {
  }

}
