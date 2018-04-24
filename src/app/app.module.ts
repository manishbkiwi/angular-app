import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './page/heros/heros.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : '' , component : LoginComponent},
      {path : 'about' , component : AboutComponent},
      {path : 'heros' , component : HeroesComponent},
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
