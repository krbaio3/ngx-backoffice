import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'atm-sidenav',
  template: `
    <mat-sidenav-container
      class="sidenav__container"
      autosize
      [ngStyle]="{ top: fixedTopGap + 'px' }"
    >
      <mat-sidenav
        #sidenav
        mode="side"
        opened
        class="example-sidenav"
        [fixedInViewport]="true"
        [fixedTopGap]="fixedTopGap"
      >
        <cdk-user-avatar></cdk-user-avatar>
      </mat-sidenav>

      <mat-sidenav-content style="background-color: black">
        <p>Works!</p>
        <p><button mat-button (click)="handleClickToggle()">Toggle</button></p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit, OnInit {
  @ViewChild('sidenav')
  public sidenav: any;

  // public openCloseFlag: Observable<boolean>;

  @Input()
  public openNav: boolean = false;

  public fixedTopGap = 56;

  constructor(
    public sidenavSrv: SidenavService,
    private media: MediaObserver,
  ) {}

  public handleClickToggle() {
    this.sidenav.toggle();
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
    // if (this.media.isActive('gt-md')) {
    //   console.log('gt-md');
    // } else if (this.media.isActive('gt-xs')) {
    //   console.log('gt-xs');
    // } else if (this.media.isActive('lt-sm')) {
    //   console.log('lt-sm');
    // }
    if (this.media.isActive('gt-md')) {
      console.log('gt-md');
      this.fixedTopGap = 64;
      console.log(this.fixedTopGap);
    } else if (this.media.isActive('gt-xs')) {
      console.log('gt-xs');
      this.fixedTopGap = 64;
      console.log(this.fixedTopGap);
    } else if (this.media.isActive('lt-sm')) {
      console.log('lt-sm');
      this.fixedTopGap = 56;
      console.log(this.fixedTopGap);
    }
  }
}
