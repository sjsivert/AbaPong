import { Component, OnInit } from '@angular/core';
import { Player, PlayerObject } from 'app/model';
import { NgModel } from '@angular/forms';
import { RegisterService } from 'services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public name: string;
  public RFID: string;
  public player;

  submitted = false;
  constructor(private _registerService: RegisterService) { }

  onSubmit() {
    this.submitted = true;
    console.log(this.player);
    this.player = {name: this.name, rfidTag: this.RFID};
    this._registerService.registerPlayer(this.player).subscribe(res => {
      console.log(res);
    });
    console.log(this.name);
    console.log(this.RFID);
}
  ngOnInit() {
  }

}
