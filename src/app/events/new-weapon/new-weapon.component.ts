import { Weapon } from './../weapon';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-new-weapon',
  templateUrl: './new-weapon.component.html',
  styleUrls: ['./new-weapon.component.css']
})
export class NewWeaponComponent implements OnInit {

    @Input() weapon:Weapon

  constructor() { }

  ngOnInit() {
  }

}
