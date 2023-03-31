import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() player: Player | null = null;
  @Input() position = '';
  @Input() top = '0';
  @Input() left = '0';

  rating: number = 0;

  ngOnInit(): void {
    if (this.position.toLowerCase() == this.player?.position) {
      this.rating = this.player.rating;
    } else {
      this.rating = (this.player as any)[this.position.toLowerCase()];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.position.toLowerCase() == this.player?.position) {
      this.rating = this.player.rating;
    } else {
      this.rating = (this.player as any)[this.position.toLowerCase()];
    }
  }
}
