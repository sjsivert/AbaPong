import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  public data;
  ngOnInit() {
    this.getData();
  }
  getData() {
    this._apiService.getData().subscribe(data => { this.data = data; },
    err => console.error(err),
    () => console.log('done loading data'));
    console.log('test' + this.data);
  }

}
