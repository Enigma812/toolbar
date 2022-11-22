import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public world = 'world';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.world = "поменяли!!!";
    }, 3000);
  }

  public onChanged(string: string): void {
    this.world = string;
  }

}
