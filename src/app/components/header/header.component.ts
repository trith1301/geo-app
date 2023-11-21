import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoPath: string = '/assets/images/logos/geo-logo-light.svg';
  gitLabLink: string = 'https://gitlab.com/marc-spektor';
}
