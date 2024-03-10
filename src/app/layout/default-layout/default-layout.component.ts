import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'

import { BreakpointObserver, LayoutModule} from '@angular/cdk/layout'
import { slideInOutAnimation } from '../animation';

const MaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
];

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports:[
    CommonModule,
     RouterModule, 
     RouterLink, 
     MaterialModules,
     LayoutModule
    ],
    animations: [slideInOutAnimation]
})
export class DefaultLayoutComponent implements OnInit{

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  public isMobile: boolean = true;
  public isCollapsed: boolean = true;
  public sidebarState: string = 'in';

  constructor(private observer: BreakpointObserver){
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)'])
    .subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    })
  }

  public toggleMenu() {
    if(this.isMobile) {
      this.sideNav.toggle();
      this.isCollapsed = false;
    } else{
      this.sideNav.open();
      this.isCollapsed = !this.isCollapsed;
    }

    this.sidebarState = this.isCollapsed ? 'in' : 'out';
  }
}
