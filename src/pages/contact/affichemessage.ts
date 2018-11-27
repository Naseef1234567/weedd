import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-affichemessage',
    templateUrl: 'affichemessage.html',
})
export class AffichemessagePage {

    private email: string;
    private message: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.email = this.navParams.get('item').email;
        this.message = this.navParams.get('item').message;
    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad DetailPage');
    }

}
