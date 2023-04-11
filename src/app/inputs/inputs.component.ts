import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, retry, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor(public fb: FormBuilder, private http: HttpClient) { }

  results$: Observable<any>;

  form = this.fb.group({
    type: ['photos', Validators.required],
    search: ['', Validators.required]
  })

  type = new FormControl('photos')

  ngOnInit(): void {
    const type$ = this.form.controls.type.valueChanges.pipe(
      startWith("photos")
    );
    const search$ = this.form.controls.search.valueChanges.pipe(
      map(search => search.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      filter(search => search !== "")
    );

    search$.subscribe((search) => console.log("input search change", search));
    type$.subscribe((type) => console.log("type change", type));


    // take multiple observables and if any change do something
    this.results$ = combineLatest([type$, search$]).pipe(
      // take in observable and return another observable
      switchMap(([type, search]) => {
        return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/${type}/?filter=${search}`).pipe(
          // map over results
          map((results) => {
            console.log("map results", results);
    
            return results.slice(0, 20).map(item => ({
              id: item.id,
              title: item.title,
              url: item?.url || "",
            }));
          }),
          // retry 2 times if there's an error
          retry(2),
          // set default value
          startWith([]),
        );
      }),
    );

    this.results$.subscribe((results) => console.log({ results}));

  }

    onSubmit() {
    alert(JSON.stringify(this.form.value))
  }



}
