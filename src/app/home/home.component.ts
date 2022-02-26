import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  yearsOfService: string
  constructor() {
    const startYear = 2017
    let t = new Date()

    this.yearsOfService = (t.getFullYear() - startYear).toString()
  }

  ngOnInit(): void {
  }

}
