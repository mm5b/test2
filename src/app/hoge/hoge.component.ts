import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css']
})
export class HogeComponent implements OnInit {
  flg: boolean = false;
  ary: string[] = ["a", "b", "c"];

  constructor() { }

  ngOnInit() {
  }

  func1(): void {
    this.flg = !this.flg;
  }

}
