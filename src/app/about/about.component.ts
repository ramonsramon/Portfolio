import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  yearsOfService: string
  constructor() {
    const startYear = 2017
    let t = new Date()

    this.yearsOfService = (t.getFullYear() - startYear).toString()
  }

  ngOnInit(): void {
  }

}
