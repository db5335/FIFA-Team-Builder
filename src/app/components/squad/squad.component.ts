import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  constructor() { }

  @Input() formation: Formation | null = null;
  @Input() players: Player[] = []

  ngOnInit(): void {
  }

}
