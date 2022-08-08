import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ArticlesComponent } from './articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MenuComponent } from './menu/menu.component';
import { ImportComponent } from './import/import.component';
import { TicketComponent } from './ticket/ticket.component';
import { NgxPrinterModule } from 'ngx-printer';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
import { LoadingComponent } from './loading/loading.component';


const config: SocketIoConfig = {
  url: 'https://balisage.herokuapp.com/',
  options: {},
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    ArticlesComponent,
    MenuComponent,
    ImportComponent,
    TicketComponent,
    LoadingComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: '', component: ArticlesComponent },
          { path: 'import', component: ImportComponent },
          { path: 'tickets', component: TicketComponent },
        ],
      },
    ]),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    NgChartsModule,
    NgxPrinterModule.forRoot({printOpenWindow: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
