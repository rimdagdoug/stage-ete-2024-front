import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { PermissionDirectiveDirective } from '../directive/permission-directive.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PermissionDirectiveDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PermissionDirectiveDirective
  ],
})
export class SharedModule { }
