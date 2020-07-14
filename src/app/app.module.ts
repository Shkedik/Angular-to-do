import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CategoryComponent } from './to-do/category/category.component';
import { ItemsToDoComponent } from './to-do/items-to-do/items-to-do.component';

// import { environment } from '../environments/environment';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from './core/auth/http.auth.service';
import { RegisterPageComponent } from './auth/registe-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemsToDoComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
