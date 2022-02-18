import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.sass'],
})
export class SendComponent implements OnInit {
  @Input() available: any;

  title: string = 'Reserve';
  loading: string = 'NOt Available';
  constructor() {}
  ngOnInit(): void {}
  // load() {
  //   this.available = this.available;
  // }
  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
    // console.log(this.load());
  }
}
