import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {  ApiService } from 'services/api.service';
import { Player, PlayerObject } from 'app/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrerForm: FormGroup;
  player = PlayerObject;
  constructor() {
   }

  ngOnInit() {
  }

}
