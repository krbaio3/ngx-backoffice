import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { RouterOutlet } from '@angular/router';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'atm-home-scene',
  template: `
    <atm-toolbar
      [matDrawerShow]="matDrawerShow"
      style="z-index: 500"
    ></atm-toolbar>
    <atm-sidenav> </atm-sidenav>
    <!-- <atm-toolbar
    [sidenav]="sidenav"
    [drawer]="drawer"
    [sidebar]="sidenav2"
    [matDrawerShow]="matDrawerShow"
    style="z-index: 500"
  ></atm-toolbar>-->
  `,
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input() isVisible: boolean = true;
  visibility = 'shown';
  isOpen: boolean = false;

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor(
    private media: MediaObserver,
    private sidenavSrv: SidenavService,
  ) {}

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      this.toggleView();
    });
  }
  getRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
      // this.sidenavSrv.toggle();
    }
  }
}
