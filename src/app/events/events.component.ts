import { Weapon } from './weapon';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
    weaponList = [
      {linkImg:'https://vignette2.wikia.nocookie.net/warframe/images/d/da/TennoTonfa.png/revision/latest?cb=20140828170521',name:'Kronen',type:'melee',damage:'65'}
      ,{linkImg:'https://vignette4.wikia.nocookie.net/warframe/images/e/e4/Miter.png/revision/latest/scale-to-width-down/220?cb=20130810114225',name:'Miter',type:'shotgun',damage:'125'}
    ]


  addNewWeapon(newWeapon){
    if(newWeapon.length>0){
    let weaponx = {linkImg:'https://pbs.twimg.com/profile_images/584092186133667840/9i1QAPVJ.jpg',name: newWeapon,type: 'Undefind',damage: 'Undefind'};
    this.weaponList.push(weaponx);
  }
  }

  ngOnInit() {}

}
