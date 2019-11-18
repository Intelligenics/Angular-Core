import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerDialogTransition = trigger('routerDialogTransition', [
    transition('closed => open',
        [
            query('@backdropOpenClose', animateChild(), { optional: true }),
            query('@dialogOpenClose', animateChild(), { optional: true }), 
        ]),
        transition('open => closed',
        [
            query(':enter', animateChild()),
            // query('@backdropOpenClose', animateChild() ),
            // query('@dialogOpenClose', animateChild() ), 
        ])
])