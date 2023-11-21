import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { PlacesManagerComponent } from './places-manager.component';

@NgModule({
  declarations: [PlacesManagerComponent],
  imports: [
    CommonModule,
    FormsModule,

    NzTypographyModule,
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
  ],
  exports: [PlacesManagerComponent],
})
export class PlacesManagerModule {}
