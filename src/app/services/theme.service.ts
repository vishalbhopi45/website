import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document:Document) { }
  switchTheme(theme:any) {
    let themeLink:any = this.document.getElementById('app-theme') as HTMLElement
    if(themeLink) {
      themeLink.href = theme + '.css'
    }
  }
}
