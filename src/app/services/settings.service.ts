import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private  linkTheme=document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme') || `assets/css/colors/default.css`;
    this.linkTheme?.setAttribute('href',theme);
  }
   changeTheme(valor:String){
    
    const url = `assets/css/colors/${valor}.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrenteTheme();
    // console.log(url);
  }
  checkCurrenteTheme(){
    const links=document.querySelectorAll('.selector');
    links?.forEach(elem =>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const urlClick = `assets/css/colors/${btnTheme}.css`;
      const currentLink = this.linkTheme?.getAttribute('href');
      if (urlClick === currentLink) {
        elem.classList.add('working');
      }
    });
  }
}
