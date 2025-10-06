import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'; // ← Import SharedModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventsComponent } from './Layout/list-events/list-events.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ListEventsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardComponent,
    FormsModule, // ← Pour [(ngModel)]
    SharedModule  // ← SharedModule importé ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
