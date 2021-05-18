import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Greeting } from '../model/greeting.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

   helloGreeting : Greeting = new Greeting();

  ngOnInit(): void {
    this.getHello();
  }

  getHello(){
    this.homeService.getHello().subscribe((data: Greeting) => this.helloGreeting = { ...data })
  }
}
