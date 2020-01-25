import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StatsComponent } from './modules/stats/stats.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { ControlComponent } from './modules/control/control.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HelpComponent } from './modules/help/help.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'stats',
    component: StatsComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'control',
    component: ControlComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'help',
    component: HelpComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }