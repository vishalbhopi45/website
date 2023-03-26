import { Component } from '@angular/core';
import { data } from './constants/app-constants';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  featureData:any;
  selectedValues:any;
  responsiveOptions:any;
  exchangeImage:any;
  constructor(private theme : ThemeService) {
    this.theme.switchTheme('lara-blue-light');
    this.featureData = data.feature;
    this.exchangeImage = data.exchangeData.image;
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
