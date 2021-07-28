import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

import {getCounter} from './../state/counter.selectors'

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{

  counter:number;

  counterSubscribe : Subscription;

  counter$ : Observable<{ counter:number }>

  constructor(private store : Store< {counter : CounterState}>) { }

  ngOnInit(): void {

    this.store.select(getCounter).subscribe(counter=>{
      this.counter = counter;
    })




    // for every subscription needs to unsubscribe


  //  this.counterSubscribe = this.store.select('counter').subscribe(data =>{
  //   console.log('counter subscribe');

  //     this.counter = data.counter;
  //   })

  //ngrx

  // this.counter$ = this.store.select('counter');

  }

  // to avoid we use ngrx
// ngOnDestroy(){
//   this.counterSubscribe.unsubscribe();
// }

}
