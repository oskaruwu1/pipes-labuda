import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberOfSentencesPipe } from './pipes/number-of-sentences.pipe';
import { CapitalWordsPipe } from './pipes/capital-words.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberOfSentencesPipe,
    CapitalWordsPipe,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
