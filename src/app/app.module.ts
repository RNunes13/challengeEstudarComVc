import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { EndpointService } from './core/endpoint/endpoint.service';
import { ModalService } from './core/modal/modal.service';
import { LoaderService } from './core/loader/loader.service';
import { NotifyService } from './core/notify/notify.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    EndpointService,
    ModalService,
    LoaderService,
    NotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
