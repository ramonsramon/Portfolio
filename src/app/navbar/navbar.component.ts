import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('toggleMobile', [
      state('open', style({
        height: '100%'
      })),
      state('closed', style({
        height: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean

  constructor() { }

  ngOnInit(): void {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen
  }
}
