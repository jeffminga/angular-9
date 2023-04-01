import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal, InputService } from '../input.service';
import {
  // debounceTime,
  // distinctUntilChanged,
  map,
  // shareReplay,
  // takeUntil,
  // tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-service-output',
  templateUrl: './service-output.component.html',
  styleUrls: ['./service-output.component.scss']
})
export class ServiceOutputComponent implements OnInit {

  animalsComponent$: Observable<string[]>;

  constructor(private _inputService: InputService) { }

  ngOnInit(): void {
    this.animalsComponent$ = this._inputService.getAnimals().pipe(
      map((animals) => animals.map(animal => `${animal.id} - ${animal.type} - ${animal.country}`))
    );
  }

}
