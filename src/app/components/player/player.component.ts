import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  @Input() player: Player | null = null;
  @Input() position = '';
  @Input() top = '0';
  @Input() left = '0';

  ngOnInit(): void {
  }

}
