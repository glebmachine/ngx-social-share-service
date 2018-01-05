import { Injectable } from '@angular/core';

@Injectable()
export class SocialShareService {
  constructor() {
  }

  odnoklassniki(purl = document.location.toString()) {
    const url = `http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=${encodeURIComponent(purl.replace(/#[a-z]+$/gi, ''))}`;
    this.popup(url);
  }

  vkontakte(purl = document.location.toString()) {
    const url = `http://vkontakte.ru/share.php?url=${encodeURIComponent(purl.replace(/#[a-z]+$/gi, ''))}`;
    this.popup(url);
  }

  facebook(purl = document.location.toString()) {
    const url  = `http://www.facebook.com/sharer.php?s=100&u=${encodeURIComponent(purl.replace(/#[a-z]+$/gi, ''))}`;
    this.popup(url);
  }

  popup(url: string) {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
  }
}
