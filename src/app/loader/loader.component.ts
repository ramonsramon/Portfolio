import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  public isLoading: boolean;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
