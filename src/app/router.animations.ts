import { trigger, state, animate, style, transition, query } from '@angular/animations';

export function routerTransition() {
    return opacityInOut();
}

function opacityInOut() {
    return trigger('routerAnimation', [
        transition('*=>*', [
            style({ opacity: 0 }),
            animate('0.5s ease-in-out', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('0.5s ease-in-out', style({ opacity: 0 }))
        ])
    ]);
}

function slideToRight() {
    return trigger('routerAnimation', [
        transition('* <=> *', [
            style({
                position: 'fixed',
                width: '100%',
                transform: 'translateX(-100%)'
            })
        ]),
        transition(':enter', [
            animate('500ms ease',
                style({
                    opacity: 1,
                    transform: 'translateX(0%)'
                })
            )
        ]),
        transition(':leave', [
            animate('500ms ease',
                style({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(100%)'
                })
            )
        ])
    ]);
}

function slideToLeft() {
    return trigger('routerAnimation', [
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

function slideToBottom() {
    return trigger('routerAnimation', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

function slideToTop() {
    return trigger('routerAnimation', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
