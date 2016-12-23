import { Component, OnInit } from '@angular/core';
import {Observable, Observer, BehaviorSubject, Subject} from 'rxjs/Rx';



@Component({
  selector: 'app-observer-one',
  templateUrl: './observer-one.component.html',
  styleUrls: ['./observer-one.component.css']
})



export class ObserverOneComponent implements OnInit {



bojangles: Observable<any>;

templateOutput: Observable<any>;



  constructor() {

  
        // this.timedObservables().subscribe(
        //   x => console.log('onNext: %s', JSON.stringify(x) ),
        //   e => console.log('onError: %s', e),
        //   () => console.log('onCompleted'));  

  }








timedObservables() {

// return this.bojangles.next('tesete333r');

  return this.bojangles = new Observable( observer => {
    // Yield a single value and complete
    observer.next('teseter');
    setTimeout( () => { 
      observer.next('tesete333r');
    }, 3000);
    setTimeout( () => { 
      observer.next('tesete333r');
    }, 4000);    
    // observer.complete();
    // Any cleanup logic might go here
    () => console.log('disposed')
  });

}







ObservableBasic() {
  let source = new Observable( observer => {
    // Yield a single value and complete
    observer.next(42);
    observer.complete();
    // Any cleanup logic might go here
    return () => console.log('disposed')
  });
  
  let subscription = source.subscribe(
    x => { 
      console.log('onNext: %s', x) 
    },
    e => console.log('onError: %s', e),
    () => console.log('onCompleted'));
  // => onNext: 42
  // => onCompleted
  subscription.unsubscribe();  
}






ObservableBasicSequence() {
// Creates an observable sequence of 5 integers, starting from 1
var source = Observable.range(2,10);

// Prints out each item
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

}







ObservableTimeStamp() {

console.log('Current time: ' + Date.now());

var source = Observable.timer(
  5000, /* 5 seconds */
  1000 /* 1 second */
  ).timestamp();

var subscription = source.subscribe(
  x => console.log( x.value + ': ' + x.timestamp ));
/* Output may be similar to this */
// Current time: 1382560697820
// 0: 1382560702820
// 1: 1382560703820
// 2: 1382560704820
}






arrayToObservable() {

let array = [1,2,3,4,5];

// Converts an array to an observable sequence
let source = Observable.from(array);

// Prints out each item
let subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onNext: 4
// => onNext: 5
// => onCompleted

}













behaviorSubject(){
  // Behavior Subject
  // a is a initial value. if there is a subscription after this, it would get 'a' value immediately
  let bSubject = new BehaviorSubject('a');
  bSubject.next('b');
  bSubject.subscribe((value) => {
    console.log('behaviorSubject Subscription got', value); 
    // Subscription got b. This would not happen for a generic observable or generic subject by default
  });
  bSubject.next('c'); // Subscription got c
  bSubject.next('d'); // Subscription got d
}






normalSubject() {
  // Regular Subject
  let subject = new Subject();
  subject.next('b');
  subject.subscribe((value) => {
    console.log('normalSubject Subscription got', value); // Subscription wont get anything at this point
  });
  subject.next('c'); // Subscription got c
  subject.next('d'); // Subscription got d  
}





  ngOnInit() {
    
// both examples from http://stackoverflow.com/questions/39494058/angular-2-behavior-subject-vs-observable
// this.behaviorSubject();
// this.normalSubject();

// from https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html
// this.ObservableBasic();
// this.ObservableBasicSequence();
// this.ObservableTimeStamp();
// this.arrayToObservable();


}


// http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
}



