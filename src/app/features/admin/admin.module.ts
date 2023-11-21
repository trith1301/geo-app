import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { AdminMapModule } from 'src/app/components/admin-map/admin-map.module';
import { PlacesManagerModule } from 'src/app/components/places-manager/places-manager.module';

import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderModule,
    FooterModule,
    AdminMapModule,
    PlacesManagerModule,
  ],
})
export class AdminModule {}
