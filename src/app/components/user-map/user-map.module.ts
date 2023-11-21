import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';

import { UserMapComponent } from './user-map.component';

@NgModule({
  declarations: [UserMapComponent],
  imports: [CommonModule, FormsModule, NzModalModule, NzCardModule],
  exports: [UserMapComponent],
})
export class UserMapModule {}
