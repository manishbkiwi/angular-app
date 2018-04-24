import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HeroesComponent {
  myArr = [1,2,3,4,5,6,7,8,9];
  myArrName = ['Arjun','Harish','Naveen','Guru'];
}
