import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'atm-sidenav',
  template: `
    <!--    <atm-toolbar-->
    <!--      [matDrawerShow]="matDrawerShow"-->
    <!--      style="z-index: 500"-->
    <!--    ></atm-toolbar>-->
    <mat-sidenav-container
      class="sidenav__container"
      autosize
      [ngStyle]="{ top: fixedTopGap + 'px' }"
      role="region"
    >
      <mat-sidenav
        #sidenav
        mode="side"
        opened
        class="sidenav__sidenav"
        [fixedInViewport]="true"
        [fixedTopGap]="fixedTopGap"
        [ngStyle.xs]="{ width: '80px' }"
        [ngStyle.gt-xs]="{ width: '270px' }"
        role="directory"
      >
        <ng-scrollbar>
          <cdk-user-avatar></cdk-user-avatar>
          <cdk-side-menu [iconOnly]="iconOnly"></cdk-side-menu>
        </ng-scrollbar>
      </mat-sidenav>

      <mat-sidenav-content
        [ngStyle]="{ paddingLeft: '5px' }"
        style="background-color: black"
        role="main"
      >
        <p>Works!</p>
        <p><button mat-button (click)="handleClickToggle()">Toggle</button></p>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  // @Input()
  // public matDrawerShow: boolean = true;

  public iconOnly: boolean;

  public fixedTopGap: number;

  constructor(public sidenavSrv: SidenavService, private media: MediaObserver) {
    this.iconOnly = true;
    this.fixedTopGap = 56;
  }

  public async handleClickToggle() {
    await this.sidenav.toggle();
  }

  ngAfterViewInit() {
    this.sidenavSrv.setSidenav(this.sidenav);
  }

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      this.toggleView();
    });
    this.sidenavSrv.sideNavToggleSubject.subscribe(async () => {
      await this.sidenav?.toggle();
    });
  }

  public toggleView() {
    if (this.media.isActive('gt-md')) {
      console.log('gt-md');
      this.fixedTopGap = 64;
      this.iconOnly = false;
    } else if (this.media.isActive('gt-xs')) {
      console.log('gt-xs');
      this.fixedTopGap = 64;
      this.iconOnly = false;
    } else if (this.media.isActive('lt-sm')) {
      console.log('lt-sm');
      this.fixedTopGap = 56;
      this.iconOnly = true;
    }
  }
}
