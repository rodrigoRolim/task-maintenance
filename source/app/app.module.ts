import './util/rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskModule } from './tasks/tasks.module';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DialogService } from  './dialog.service';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports:[
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        TaskModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers:[
        DialogService
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}