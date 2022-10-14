import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListAllConfigComponent } from './list-all-config/list-all-config.component';
import { AddConfigComponent } from './add-config/add-config.component';
import { BotConfigServiceService } from './bot-config-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListAllConfigComponent, AddConfigComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [BotConfigServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
