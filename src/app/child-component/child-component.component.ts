import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponentComponent implements OnInit, OnChanges {
  @Input()
  counter: any = {};

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('This is re-rendered');
  }

  ngOnChanges() {
    console.log('change fired');
  }

  ngDoCheck() {
    console.log('check fired');
  }

  update() {
    this.changeDetector.markForCheck();
  }

  executeFunction() {
    console.log("App Rerendered")
    return "This is Child Component"
  }

}
