import { WeaponDataService } from './service/weapon-data.service';
import { Weapon } from './weapon';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  // weaponList = [];
  
  constructor(public wData:WeaponDataService){
    // this.weaponList = wData.weaponList;
  }


  addNewWeapon(newWeapon){
    if(newWeapon.length>0){
    let weaponx = {linkImg:'https://pbs.twimg.com/profile_images/584092186133667840/9i1QAPVJ.jpg',name: newWeapon,type: 'Undefind',damage: 'Undefind'};
    this.wData.weaponList.push(weaponx);
  }
}

  getWeaponArray(){
    this.wData.getUpdate().subscribe(data=>{
      this.wData.weaponList = data;
    });
  }

  postWeapon(daxta){
    if(daxta.length>0){
      this.wData.postWeaponData(daxta).subscribe(data => {
      console.log(data);
      if (data.assign == 2001){
           alert(daxta + " has assigned.");
      }else{
        alert(daxta + " post failed.");
      }
    });
    }
  }

  ngOnInit() {}

}
