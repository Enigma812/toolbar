import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'toolbar';

  constructor(
    private offcanvasService: NgbOffcanvas,
    private router: Router
  ) {}

  public isStart(): boolean {
    return this.router.url.includes('start');
  }

  openStaticBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { backdrop: 'static', panelClass: 'offcanvas-panel' });
  }
}
