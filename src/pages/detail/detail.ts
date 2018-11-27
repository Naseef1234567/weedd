import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import * as Vimeo from 'vimeo';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private id: number;
  private title: string;
  private subtitle: string;
  private publish_date: string;
  private urlphoto: string;
  private urlvideo: string;
  private vimeo_idmovie: string;
  private vimeo_idmovie_url: string;
  private vimeo_idmovie_urlfull: string;
  private note: number;
  // private icon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('item').id;
    this.title = this.navParams.get('item').title;
    if (this.title.length > 21)
    {
      this.subtitle = this.title.substring(0, 20) + '...';
    } else {
      this.subtitle = this.title;
    }
    this.publish_date = this.navParams.get('item').publish_date;
    this.urlphoto = this.navParams.get('item').urlphoto;
    this.urlvideo = this.navParams.get('item').urlvideo;
    this.vimeo_idmovie = this.navParams.get('item').vimeo_idmovie;
    this.vimeo_idmovie_url = 'https://player.vimeo.com/video/' + this.vimeo_idmovie + '?api=1&player_id=player1&background=1';
    console.log(this.vimeo_idmovie_url);
    this.vimeo_idmovie_urlfull = '<iframe id="vimeo" src ="https://player.vimeo.com/video/' + this.vimeo_idmovie + '?api=1&player_id=player1&background=1" frameborder = "0" ></iframe>';
    // this.icon = this.navParams.get('item').icon;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DetailPage');
  }

}
