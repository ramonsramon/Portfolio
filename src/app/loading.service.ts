import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: boolean
  subject: BehaviorSubject<boolean>
  loading$: Observable<boolean>

  constructor() {
    this.loading = false 
    this.subject = new BehaviorSubject(this.loading)
    this.loading$ = this.subject.asObservable()
  }

  get isLoading() {
    return this.loading$
  }

  toggle() {
    this.loading = !this.loading
    this.subject.next(this.loading)
  }
}
