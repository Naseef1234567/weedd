import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',

})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ id: number, title: string, publish_date: string, urlphoto: string, urlvideo: string, vimeo_idmovie: string, note: number, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['ios-desktop-outline'];

    this.items = [
        {
          'id': 1,
          'title': 'Les chatouilles',
          'publish_date': '2018-11-14',
          'urlphoto': 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/04/27/17/19/4063863.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=yUH9uzAh_wc',
          'vimeo_idmovie': '301208296',
          'note': 4.4,
          'icon': 'ios-desktop-outline'
        },
        {
          'id': 2,
          'title': 'Yéti & compagnie',
          'publish_date': '2018-10-17',
          'urlphoto': 'http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/07/24/10/49/2195759.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=xQgu1W9w5lE',
          'vimeo_idmovie': '298838587',
          'note': 1.8,
          'icon': 'ios-desktop-outline'
        },
        {
          'id': 3,
          'title': 'Robin des bois',
          'publish_date': ' 2018-11-28',
          'urlphoto': 'http://fr.web.img2.acsta.net/r_1280_720/pictures/18/10/22/15/48/3920832.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=RxcS31bmjxI',
          'vimeo_idmovie': '301562940',
          'note': 3.8,
          'icon': 'ios-desktop-outline'
        },
        {
          'id': 4,
          'title': 'Overload',
          'publish_date': '2018-11-21',
          'urlphoto': 'http://fr.web.img6.acsta.net/r_1280_720/pictures/18/11/07/09/44/0611608.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=wIynFVk1NG8',
          'vimeo_idmovie': '118959843',
          'note': 2.1,
          'icon': 'ios-desktop-outline'
        },
        {
          'id': 5,
          'title': 'Les chatouilles 3',
          'publish_date': '2018-11-14',
          'urlphoto': 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/04/27/17/19/4063863.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=PvYJNgX0bdU',
          'vimeo_idmovie': '301208296',
          'note': 3.1,
          'icon': 'ios-desktop-outline'
        },
        {
          'id': 6,
          'title': 'Les animaux fantastiques 2',
          'publish_date': '2018-11-08',
          'urlphoto': 'http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/11/08/12/27/0763251.jpg',
          'urlvideo': 'https://www.youtube.com/watch?v=Dnb6eAfSHtw',
          'vimeo_idmovie': '301201492',
          'note': 5,
          'icon': 'ios-desktop-outline'
        }
    ];

  }

  itemTapped(event, item) {

    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

}
