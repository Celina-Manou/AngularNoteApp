import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/todos/todos.module';

import { QuoteBoxComponent } from './todos/components/quote-box/quote-box.component';
import { QuoteService } from './todos/services/quote.service';

import { ModalComponent } from './todos/components/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent,
    ModalComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule, 
      TodosModule,
      HttpClientModule,
    ],
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}