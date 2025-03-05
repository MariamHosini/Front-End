import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { SliderComponent } from './template/header/slider/slider.component';
import { NgModule } from '@angular/core';
import { TopComponent } from './template/top/top.component';
import { NavComponent } from './template/nav/nav.component';
import { BaseSliderComponent } from './template/base-slider/base-slider.component';
import { CardsComponent } from './template/cards/cards.component';
import { MainComponent } from './template/main/main.component';
import { DepartmentComponent } from './template/department/department.component';
import { CaptionComponent } from './template/caption/caption.component';
import { ServicesComponent } from './template/services/services.component';
import { DoctorsComponent } from './template/doctors/doctors.component';
import { EmergencyComponent } from './template/emergency/emergency.component';
import { FooterComponent } from './template/footer/footer.component';
import { LastFooterComponent } from './template/last-footer/last-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TopComponent,
    NavComponent,
    BaseSliderComponent,
    CardsComponent,
    MainComponent,
    DepartmentComponent,
    CaptionComponent,
    ServicesComponent,
    DoctorsComponent,
    EmergencyComponent,
    FooterComponent,
    LastFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'template_Bootatrap';
}
