import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document:Document){}

  activeTheme:string = 'dark';

  getTheme(){
    return this.activeTheme;
  }

  setTheme(theme:string){
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if(themeLink){
      themeLink.href = theme + '.css';
    }
    this.activeTheme = theme;

  }
}
