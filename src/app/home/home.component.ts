import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  yearsOfService: string;
  constructor() {
    const startYear = 2017;
    let t = new Date();

    this.yearsOfService = (t.getFullYear() - startYear).toString();
  }

  ngOnInit(): void {}
}
