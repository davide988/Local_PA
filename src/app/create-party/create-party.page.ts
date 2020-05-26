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

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit() {
  }

}
