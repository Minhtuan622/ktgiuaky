import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { GiaoVienComponent } from './giao-vien/giao-vien.component';
import { ThemGiaoVienComponent } from './them-giao-vien/them-giao-vien.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { MenuComponent } from './home/menu/menu.component';
import { InfoComponent } from './home/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MonHocComponent,
    GiaoVienComponent,
    ThemGiaoVienComponent,
    HeaderComponent,
    MenuComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
