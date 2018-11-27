import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AffichemessagePage } from './affichemessage';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactPage');
  }

  todo = {
    email: '',
    message: ''
  };

  logForm(form) {
    // console.log(form.value);
    // console.log(this.todo);
    // alert(this.todo.email);
    // alert(this.todo.message);
    this.navCtrl.push(AffichemessagePage, {
      item: this.todo
    });
  }

}
