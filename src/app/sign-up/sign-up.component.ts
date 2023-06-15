import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

user: User = new User("","","","");

  onSubmit(form: NgForm) {

    if (form.valid)
    {
    this.user = form.value;
    console.log(this.user);
    }

  }

}
