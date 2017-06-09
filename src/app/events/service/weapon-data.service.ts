import {Headers, Http} from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


@Injectable()
export class WeaponDataService {
  constructor(public http:Http) { }

      weaponList = [
      // {linkImg:'https://vignette2.wikia.nocookie.net/warframe/images/d/da/TennoTonfa.png/revision/latest?cb=20140828170521',name:'Kronen',type:'melee',damage:'65'}
      // ,{linkImg:'https://vignette4.wikia.nocookie.net/warframe/images/e/e4/Miter.png/revision/latest/scale-to-width-down/220?cb=20130810114225',name:'Miter',type:'shotgun',damage:'125'}
    ]

    getUpdate(){
      return this.http.get('http://localhost:3000/events/weaponcall').map(res=>{
        return res.json();
      });
    }

    postWeaponData(weaName){
    let obj = { weaponName : weaName };
    let json = JSON.stringify(obj);
    let h = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/events/addweapon', json, h).map(res => res.json());
    }

}



