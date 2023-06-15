import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports:[CommonModule, RouterModule, RouterLink]
})
export class DefaultLayoutComponent implements OnInit{

  ngOnInit() {

  }
}
