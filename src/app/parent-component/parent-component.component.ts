import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponentComponent implements OnInit, OnDestroy {
  counter = {
    count: 0
  };
  interval: any;

  constructor(
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter.count++;
      console.log(this.counter.count);
      this.counter = {
        count: this.counter.count,
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);    
  }

  update() {
    this.changeDetector.markForCheck();
  }

}
