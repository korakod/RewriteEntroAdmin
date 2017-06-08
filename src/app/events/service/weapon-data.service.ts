import { Injectable } from '@angular/core';


@Injectable()
export class WeaponDataService {
  constructor() { }

      weaponList = [
      {linkImg:'https://vignette2.wikia.nocookie.net/warframe/images/d/da/TennoTonfa.png/revision/latest?cb=20140828170521',name:'Kronen',type:'melee',damage:'65'}
      ,{linkImg:'https://vignette4.wikia.nocookie.net/warframe/images/e/e4/Miter.png/revision/latest/scale-to-width-down/220?cb=20130810114225',name:'Miter',type:'shotgun',damage:'125'}
    ]

}
