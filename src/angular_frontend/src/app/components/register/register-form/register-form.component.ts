import { Component, OnInit } from '@angular/core';
import { Player, PlayerObject } from 'app/model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public name: string;
  public RFID: string;
  submitted = false;
  onSubmit() {this.submitted = true; }

  submit() {
    console.log(this.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
