import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent }, //by default path

  { path: 'user', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'developers', component: DeveloperComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
