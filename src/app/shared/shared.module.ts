import { RouterModule } from '@angular/router';
;
import { PageNotFoundErrorComponent } from './components/page-not-found-error/page-not-found-error.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageNotFoundErrorComponent],
  exports: [PageNotFoundErrorComponent]
})
export class SharedModule { }
