import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { APIServiceResponseMessages, PlaceStatus } from 'src/app/core/enums';
import { ApiService } from 'src/app/services/api.service';
import { userMapOptions } from 'src/app/core/constants';
import popupHTMLGenerator from 'src/app/helpers/popup-html-generator';
import getMarkerColor from 'src/app/helpers/get-maker-color';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

const gJS = require('node_modules/@goongmaps/goong-js');

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: ['./user-map.component.scss'],
})
export class UserMapComponent {
  map: any = null;
  knownPlaces: Array<any> = [];
  markers: Array<any> = [];
  isVisible = false;
  submitLocation: any = null;
  isShowLoader = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    gJS.accessToken = environment.goongMapAPIKey;
    this.map = new gJS.Map({
      container: 'user-map',
      ...userMapOptions,
    });
    this.map.addControl(new gJS.NavigationControl());

    this.apiService.getAllPlaces().subscribe(({ status, data }) => {
      if (status == APIServiceResponseMessages.SUCCESS) {
        this.knownPlaces = data.places;
        this.knownPlaces.forEach((place) => {
          if (place.status == PlaceStatus.APPROVED)
            this.markerInitializer(this.map, place);
        });
        this.isShowLoader = false
      }
    });

    const mainMarker = new gJS.Marker({
      color: 'red',
      draggable: true,
    })
      .setLngLat(userMapOptions.center)
      .addTo(this.map);

    mainMarker.on('dragend', (e: any) => {
      const droppedLocation = e.target._lngLat;
      this.submitLocation = droppedLocation;
      this.showModal();
    });
  }

  markerInitializer(map: any, data: any) {
    const popup = new gJS.Popup({ offset: 25 }).setHTML(
      popupHTMLGenerator(data)
    );

    const marker = new gJS.Marker({
      color: getMarkerColor(data.name),
    })
      .setLngLat([data.lng, data.lat])
      .setPopup(popup)
      .addTo(map);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isShowLoader = true;

    this.apiService.submitLocation(this.submitLocation).subscribe((res) => {
      this.isShowLoader = false;
      this.router.navigate([this.router.url]);
    });

    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
