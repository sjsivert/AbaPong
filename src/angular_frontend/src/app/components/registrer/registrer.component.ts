import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  ApiService } from 'services/api.service';
import { Player } from 'app/model';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  registrerForm: FormGroup;
  player: Player;

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit() {
  }

}
