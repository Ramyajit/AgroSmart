import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from 'src/app/modules/stats/stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [
    DashboardService,
    Title
  ],
})
export class DefaultModule { }
