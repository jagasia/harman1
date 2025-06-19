import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-manual-observable',
  imports:[CommonModule],
  template: `
    <h2>Manual Observable Demo</h2>
    <button (click)="subscribe()">Subscribe</button>
    <button (click)="unsubscribe()">Unsubscribe</button>
    <button (click)="publish()">Publish</button>
    <p *ngIf="receivedValue !== null">Received: {{ receivedValue }}</p>
  `
})
export class ManualObservable {
  private observer!: Observer<string>;
  private observable: Observable<string>;
  private subscription: any;
  private publishCount = 1;

  receivedValue: string | null = null;

  constructor() {
    // Define a custom Observable and capture the observer
    this.observable = new Observable<string>((obs) => {
      console.log('Observable created');
      this.observer = obs;
    });
  }

  subscribe() {
    if (!this.subscription) {
      console.log('Subscribing...');
      this.subscription = this.observable.subscribe({
        next: (value) => {
          console.log('Received:', value);
          this.receivedValue = value;
        },
        error: (err) => console.error('Error:', err),
        complete: () => console.log('Completed')
      });
    }
  }

  unsubscribe() {
    if (this.subscription) {
      console.log('Unsubscribing...');
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  publish() {
    if (this.observer) {
      const value = `Message ${this.publishCount++}`;
      console.log('Publishing:', value);
      this.observer.next(value);
      
    } else {
      console.warn('No observer to publish to (subscribe first)');
    }
  }
}
