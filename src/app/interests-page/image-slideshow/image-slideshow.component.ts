import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-slideshow',
  imports: [CommonModule],
  templateUrl: './image-slideshow.component.html',
  styleUrl: './image-slideshow.component.css'
})
export class ImageSlideshowComponent implements OnInit, OnDestroy, OnChanges {
  @Input() images: string[] = [];
  @Input() intervalMs: number = 5000;
 
  currentIndex: number = 0;
  isPaused: boolean = false;
 
  private timerId: ReturnType<typeof setInterval> | null = null;
 
  ngOnInit(): void {
    this.startTimer();
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    // Reset to first slide if the images array itself changes
    if (changes['images'] && !changes['images'].firstChange) {
      this.currentIndex = 0;
    }
  }
 
  ngOnDestroy(): void {
    this.stopTimer();
  }
 
  startTimer(): void {
    this.stopTimer();
    if (this.images.length <= 1) {
      return;
    }
    this.timerId = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, this.intervalMs);
  }
 
  stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
 
  next(): void {
    if (this.images.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
 
  goTo(index: number): void {
    this.currentIndex = index;
  }
 
  onMouseEnter(): void {
    this.isPaused = true;
  }
 
  onMouseLeave(): void {
    this.isPaused = false;
  }
}
