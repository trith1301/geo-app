import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMapComponent } from 'src/app/components/admin-map/admin-map.component';
import { PlacesManagerComponent } from 'src/app/components/places-manager/places-manager.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminMapComponent,
      },
      {
        path: 'manage',
        component: PlacesManagerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
