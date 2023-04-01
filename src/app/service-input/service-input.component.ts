import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InputService } from '../input.service';

@Component({
  selector: 'app-service-input',
  templateUrl: './service-input.component.html',
  styleUrls: ['./service-input.component.scss']
})
export class ServiceInputComponent implements OnInit {

  name = "";

  constructor(private _inputService: InputService) { }

  ngOnInit(): void {
  }

  add() {
    this._inputService.addAnimal(this.name);
    this.name = "";

  }
}
