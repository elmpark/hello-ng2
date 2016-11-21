import {Component, OnInit, Input, OnDestroy} from '@angular/core';

let nextId = 1;

@Component({
  selector: 'app-heavy-loader',
  templateUrl: './heavy-loader.component.html',
  styleUrls: ['./heavy-loader.component.css']
})
export class HeavyLoaderComponent implements OnDestroy, OnInit {
  id = nextId++;
  @Input() logs: string [];

  constructor() {
  }

  private tick() {
    setTimeout(() => {
    }, 0);
  }

  private log(msg: string) {
    this.logs.push(msg);
    this.tick();
  }

  ngOnInit() {
    this.log(`heavy-loader ${this.id} initialized, loading 10,000 rows of data from the server`);
  }

  ngOnDestroy() {
    this.log(`heavy-loader ${this.id} destroyed, cleaning up`);
  }
}
