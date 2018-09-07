import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';
import { Player } from 'app/model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public players: Player[];
  public data;
  constructor(private _apiService: ApiService) {
    _apiService.getPlayer().subscribe(p => {
      this.players = p;
    });
   }

  ngOnInit() {
    this.getPlayer();
  }
  getPlayer() {
    this._apiService.getPlayer().subscribe(data => { this.data = data; },
    err => console.error(err),
    () => console.log(this.data));
  }

}
