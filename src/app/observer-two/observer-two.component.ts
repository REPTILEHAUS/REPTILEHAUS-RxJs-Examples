import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Observer, BehaviorSubject, Subject} from 'rxjs/Rx';
import { usersData } from '../_helpers/app.interfaces';


@Component({
selector: 'app-observer-two',
templateUrl: './observer-two.component.html',
styleUrls: ['./observer-two.component.css']
})


export class ObserverTwoComponent implements OnInit, OnDestroy {


public usersTemplate: any;

public sharingData: Observable<usersData[]>

private _sharingData: BehaviorSubject<usersData[]>;

private dataStore: {
  sharingData: usersData[]
};



// https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html
constructor() {

  this.dataStore = { sharingData: [] };  
  this._sharingData = <BehaviorSubject<usersData[]>>new BehaviorSubject([]);
  
  this.internalService().subscribe(
    result => { 
      if( typeof result['uID'] !== 'undefined'  ){ // MAKE SURE THAT THERE IS SOMETHING IN THE ARRAY
          this.usersTemplate = result;
          console.log('next: %s', JSON.stringify( this.usersTemplate ) );
      }}, error => { // console.log('onError: %s', error );
    }, () => console.log('onCompleted')); 

}







internalService(): Observable<any> {
  return this._sharingData.asObservable();
}




updateService(change: string): void {
  
let name = Array('Robert','Michael', 'Rebecca', 'June');
let random_name = name[Math.floor(Math.random() * name.length)]

let userid = Array('32423423','4564326685423', '25675768', '2344577456');
let random_userid = userid[Math.floor(Math.random() * userid.length)]

      let user: any = {
          ts:         new Date,        
          uID:        random_userid,
          username:   random_name,
      }
     
     this._sharingData.next( user );


}



ngOnInit() {

let name = Array('Robert','Michael', 'Rebecca', 'June');


let userid = Array('32423423','4564326685423', '25675768', '2344577456');


  setInterval( () => {
    
    let random_userid = userid[Math.floor(Math.random() * userid.length)]
    let random_name = name[Math.floor(Math.random() * name.length)]

      let user: any = {
          ts:         new Date,        
          uID:        random_userid,
          username:   random_name,
      }
     
     this._sharingData.next( user );
    
    }, 4000);






}



ngOnDestroy(){
  this._sharingData.unsubscribe();
  // this.usersTemplate.unsubscribe();  
}



}



