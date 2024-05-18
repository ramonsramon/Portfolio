import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'about',
  standalone: true,
  imports: [MatDividerModule, MatExpansionModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  yearsOfService: string;
  constructor() {
    const startYear = 2017;
    let t = new Date();

    this.yearsOfService = (t.getFullYear() - startYear).toString();
  }

  ngOnInit(): void {}
}
