import { NgModule } from '@angular/core';
import { DqtableComponent } from './dqtable.component';
import {NzButtonModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [DqtableComponent],
  imports: [
    NzButtonModule
  ],
  exports: [DqtableComponent]
})
export class DqtableModule { }
