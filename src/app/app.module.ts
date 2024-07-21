import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTransactionsComponent } from './Components/users-transactions/users-transactions.component';
import { UserTransactionsChartComponent } from './Components/user-transactions-chart/user-transactions-chart.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './Pipes/search-by-name.pipe';
import { SearchByAmountPipe } from './Pipes/search-by-amount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersTransactionsComponent,
    UserTransactionsChartComponent,
    SearchByNamePipe,
    SearchByAmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
