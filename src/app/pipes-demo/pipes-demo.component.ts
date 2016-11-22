import { Component, OnInit } from '@angular/core';
import {HEROES} from "./heroes";


@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  birthday = new Date(1990, 10, 23);
  toggle = true;
  power = 5;
  factor = 1;

  heroes: any[] = [];
  canFly = true;

  constructor() { this.reset();}

  addHero(name: string): void{
    name = name.trim();
    if(!name){return}
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }
  reset() {this.heroes = HEROES.slice()}

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
  }

}
