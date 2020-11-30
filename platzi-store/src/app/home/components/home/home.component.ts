import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  mySwyper: Swiper;

ngAfterViewInit(): void {
  this.mySwyper = new Swiper('.swiper-container');
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
