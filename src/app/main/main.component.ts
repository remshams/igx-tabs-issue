import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {
  data = [
    { id: 1, createdAt: new Date(), firstName: 'Hugo', lastName: 'Dungo' },
    { id: 2, createdAt: new Date(), firstName: 'Waren', lastName: 'Tester' },
    { id: 3, createdAt: new Date(), firstName: 'Max', lastName: 'Mustermann' },
    {
      id: 4,
      createdAt: new Date(),
      firstName: 'Maria',
      lastName: 'Musterfrau',
    },
  ];

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
