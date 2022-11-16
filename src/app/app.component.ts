import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toolbar';
  lesson = true;

  constructor(private offcanvasService: NgbOffcanvas) {}

  openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static', panelClass: 'offcanvas-panel' });
	}
}
