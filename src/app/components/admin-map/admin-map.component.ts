import { Component } from '@angular/core';
import { userMapOptions } from 'src/app/core/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import getMarkerColor from 'src/app/helpers/get-maker-color';
import { APIServiceResponseMessages } from 'src/app/core/enums';
import { environment } from 'src/environments/environment.development';
import popupHTMLGeneratorEvent from 'src/app/helpers/popup-html-generator-event';

const gJS = require('node_modules/@goongmaps/goong-js');

@Component({
  selector: 'app-admin-map',
  templateUrl: './admin-map.component.html',
  styleUrls: ['./admin-map.component.scss'],
})
export class AdminMapComponent {
  map: any = null;
  knownPlaces: Array<any> = [];
  markers: Array<any> = [];
  isVisible = false;
  submitLocation: any = null;
  isShowLoader = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    gJS.accessToken = environment.goongMapAPIKey;
    this.map = new gJS.Map({
      container: 'admin-map',
      ...userMapOptions,
    });
    this.map.addControl(new gJS.NavigationControl());

    this.apiService.getAllPlaces().subscribe(({ status, data }) => {
      if (status == APIServiceResponseMessages.SUCCESS) {
        this.knownPlaces = data.places;
        this.knownPlaces.forEach((place) => {
          this.markerInitializer(this.map, place);
        });
        this.isShowLoader = false;
      }
    });

    new gJS.Marker({
      color: 'red',
    })
      .setLngLat(userMapOptions.center)
      .addTo(this.map);
  }

  markerInitializer(map: any, data: any) {
    const popup = new gJS.Popup()
      .setHTML(popupHTMLGeneratorEvent(data))
      .addTo(map);

    popup.on('open', (e: any) => {
      const select = e.target._content.getElementsByClassName(
        `place-popup-${data.id}`
      )[0];

      console.log(data.status);

      select.addEventListener('change', (e: any) => {
        const status = e.target.value;
        this.isShowLoader = true;
        this.apiService.updateStatus(data.id, status).subscribe((res) => {
          this.isShowLoader = false;
        });
      });
    });

    const marker = new gJS.Marker({
      color: getMarkerColor(data.name),
    })
      .setLngLat([data.lng, data.lat])
      .setPopup(popup)
      .addTo(map);
  }

  updateStatus(id: number, status: string) {
    this.apiService.updateStatus(id, status);
  }
}
