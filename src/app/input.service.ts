import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Animal {
  id: number;
  type: string;
  country: "ca" | "us";
}

const animals: Animal[] = [
  { id: 1, type: "dog", country: "ca"},
  { id: 2, type: "cat", country: "us"},
  { id: 3, type: "bird", country: "ca"},
];

@Injectable({
  providedIn: 'root'
})
export class InputService {

  public animals$ = new BehaviorSubject<Animal[]>(animals);

  constructor() { }

  getAnimals() {
    return this.animals$;
  }

  addAnimal(val: string) {
    const current = this.animals$.getValue();
    
    this.animals$.next([{
      id: current.length + 1,
      type: val,
      country: "us",
    }, ...current]);
  }
}
