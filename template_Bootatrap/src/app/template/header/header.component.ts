import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  click = false;

  click2 = false;

  clicked() {
    this.click = !this.click;
  }
}
