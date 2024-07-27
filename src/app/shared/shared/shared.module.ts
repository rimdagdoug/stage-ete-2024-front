import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PermissionDirective } from '../directive/permission.directive';
import { ShowButtonPipe } from '../pipe/show-button.pipe';
import { StatusEvalPipe } from '../pipe/status-eval.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PermissionDirective,
    StatusEvalPipe,
    ShowButtonPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PermissionDirective,
    StatusEvalPipe,
    ShowButtonPipe,
  ],
})
export class SharedModule { }
