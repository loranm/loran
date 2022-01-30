import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, TuiRootModule, TuiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
