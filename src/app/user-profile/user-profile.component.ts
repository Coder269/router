import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  switchAge = false;
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'to beer or not to  beer',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  afficherMasquer() {

    if (this.switchAge) this.switchAge = false;
    else this.switchAge = true;
  }

}
