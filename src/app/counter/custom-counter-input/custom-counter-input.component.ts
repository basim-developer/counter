import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannel, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import{getChannelName} from './../state/counter.selectors'

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value:number;
  channelName:string;

  constructor(private store:Store<{counter: CounterState}>) { }

  ngOnInit(): void {

  this.store.select(getChannelName).subscribe(data =>{
    this.channelName = data;
  })

    // this.store.select('counter').subscribe(data =>{
    //   console.log('channel name subscribe');
    //   this.channelName = data.channelName;
    // })
  }

  addMethod(){

    this.store.dispatch(customIncrement({value: +this.value})); // converting to num
  }

  changeChannel(){
    this.store.dispatch(changeChannel());
  }

}
