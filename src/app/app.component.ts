import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { routerTransition } from './router.animations';

const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerTransition()
    // trigger('routerAnimation', [
    //   transition('* <=> *', [
    //     // Initial state of new route
    //     query(':enter',
    //       style({
    //         position: 'fixed',
    //         width: '100%',
    //         transform: 'translateX(-100%)'
    //       }),
    //       { optional: true }),

    //     // move page off screen right on leave
    //     query(':leave',
    //       animate('500ms ease',
    //         style({
    //           position: 'fixed',
    //           width: '100%',
    //           transform: 'translateX(100%)'
    //         })
    //       ),
    //       { optional: true }),

    //     // move page in screen from left to right
    //     query(':enter',
    //       animate('500ms ease',
    //         style({
    //           opacity: 1,
    //           transform: 'translateX(0%)'
    //         })
    //       ),
    //       { optional: true }),
    //   ])
    // ])
  ]
})
export class AppComponent {
  title = 'app';
  model: NgbDateStruct;
  date: { year: number, month: number };

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  getRouteAnimation(outlet) {
    // alert(outlet.activatedRouteData);
    return outlet.activatedRouteData.animation;
  }
  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }
}
