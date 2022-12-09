import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'src/modules/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'toolbar';

  constructor(
    public readonly accountService: AccountService,
    private _router: Router,
    private _offcanvasService: NgbOffcanvas
  ) {}

  public logOff(): void {
    this.accountService.isAuthorized = false;
    this._router.navigate(['/']);
  }

  public openStaticBackdrop(content: TemplateRef<any>) {
    this._offcanvasService.open(content, { backdrop: 'static', panelClass: 'offcanvas-panel' });
  }
}
