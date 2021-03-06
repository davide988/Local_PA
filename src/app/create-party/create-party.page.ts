import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {PartyService} from '../services/party.service';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.page.html',
  styleUrls: ['./create-party.page.scss'],
})
export class CreatePartyPage  {


  constructor(
      private router: Router,
      private partyService: PartyService,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController

  ) {}

  // tslint:disable-next-line:variable-name
  form_create = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    genre: new FormControl('', [
      Validators.required,

    ]),
    mood: new FormControl('', [
      Validators.required,

    ]),
  });


  async onCreate(){
    const loading = await this.loadingCtrl.create({ message: 'Creazione party in corso...' });
    await loading.present();
    this.partyService.create(this.form_create.value).subscribe(
        // If success
        async () => {
          const toast = await this.toastCtrl.create({ message: 'Party Creato', duration: 2000, color: 'dark' });
          await toast.present();
          loading.dismiss();
          this.form_create.reset();
          // *******    aggiungere reindirizzamento a pagina party   ************
        },
        // If there is an error
        async () => {
          const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
          loading.dismiss();
          await alert.present();
        }
    );

  }

}
