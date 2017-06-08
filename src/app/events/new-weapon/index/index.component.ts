import {Weapon} from '../../weapon';
import { WeaponDataService } from './../../service/weapon-data.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  weaponList = [];
  constructor(public wData:WeaponDataService) { 
    this.weaponList = this.wData.weaponList;
  }

  ngOnInit() {
  }

}
