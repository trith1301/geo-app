import { Component } from '@angular/core';
import { APIServiceResponseMessages } from 'src/app/core/enums';
import { ApiService } from 'src/app/services/api.service';

var slug = require('slug');

@Component({
  selector: 'app-places-manager',
  templateUrl: './places-manager.component.html',
  styleUrls: ['./places-manager.component.scss'],
})
export class PlacesManagerComponent {
  tableLoading: boolean = true;
  listOfData: any[] = [];
  listOfDisplayData: any[] = [];
  selectedValue: string = 'pending';
  isShowLoader = false;
  searchValue = '';
  visible = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllPlaces().subscribe(({ status, data }) => {
      if (status == APIServiceResponseMessages.SUCCESS) {
        this.tableLoading = false;
        this.listOfData = data.places;
        this.listOfDisplayData = data.places;
      }
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: any) =>
      slug(item.name).includes(slug(this.searchValue))
    );
  }

  updateStatus(id: number, event: any) {
    const status: string = event.target.value;
    this.tableLoading = true;
    this.apiService.updateStatus(id, status).subscribe((res) => {
      this.tableLoading = false;
    });
  }
}
