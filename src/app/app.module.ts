import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ObserverTwoComponent } from './observer-two/observer-two.component';
import { ObserverOneComponent } from './observer-one/observer-one.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ObserverOneComponent,
  },
  {
    path: 'ob2',
    component: ObserverTwoComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ObserverTwoComponent,
    ObserverOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: LocationStrategy,
        useClass: HashLocationStrategy
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
