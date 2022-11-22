import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input()
  public str = '';

  @Output()
  public changed: EventEmitter<string> = new EventEmitter();

  constructor() {
   }

  public ngOnInit(): void {
    setTimeout(() => {
      this.str = "пиздец!!!";

      this.changed.emit("Бесит всё!!!!!!!!");
    }, 5000);
    
  }

}
