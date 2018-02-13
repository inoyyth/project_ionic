import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(page) {
    if (page === 'about') {
      this.navCtrl.push(AboutPage,{
        id: "123",
        name: "inoy"
      });
    } else if (page === 'contact') {
      this.navCtrl.push(ContactPage);
    }
  }

}
