import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from './core/auth/auth.service';

import { AuthGuard } from './core/guards/auth.guards';
// import { AuthRoutingModule } from './auth/auth-routing.module';
// import { TodoRoutingModule } from './to-do/todo-routing.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './to-do/todo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // AuthRoutingModule,
    // TodoRoutingModule,
    AuthModule,
    TodoModule,
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
