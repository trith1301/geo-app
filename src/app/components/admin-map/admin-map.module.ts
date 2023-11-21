import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';

import { AdminMapComponent } from './admin-map.component';

@NgModule({
  declarations: [AdminMapComponent],
  imports: [CommonModule, FormsModule, NzModalModule, NzCardModule],
  exports: [AdminMapComponent],
})
export class AdminMapModule {}
