import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/intercepteur/auth.interceptor';
import { CommonModule } from '@angular/common';
import { SkillsModule } from './pages/skills/skills.module';
import { SharedModule } from './shared/shared/shared.module';
import { EvalModule } from './pages/eval/eval.module';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SkillsModule,
    SharedModule,
    EvalModule,
    ReactiveFormsModule,

    RouterModule, StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
