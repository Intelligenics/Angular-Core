import { trigger, transition, style, animate, query, state } from '@angular/animations';


export const dialogOpenClose = trigger('dialogOpenClose',
  [
    state('closed',
      style({
        opacity: 0,
      })),
    transition(':enter',
      [
        style(
          {
            opacity: 0,
            transform: 'scale(0)',
          }),
        animate('.3s ease-in',
          style(
            {
              opacity: 1,
              transform: 'scale(1)',
            }
          )),
      ]),
    transition('* <=> closed', [
      style(
        {
          opacity: 1,
          transform: 'scale(1)',
        }),
      animate('.3s ease-in',
        style(
          {
            opacity: 0,
            transform: 'scale(0)',
          }
        )),
    ])
  ]);


export const backdropOpenClose = trigger('backdropOpenClose',
  [
    state('closed',
      style({
        opacity: 0
      })),
    transition(':enter',
      [
        style({ opacity: 0 }),
        animate('.2s',
          style(
            { opacity: 0.4 }
          )),
      ]),
    transition('* <=> closed', [
      style(
        {
          opacity: 0.4,
        }),
      animate('0.4s ease-out',
        style(
          {
            opacity: 0,
          }
        )),
    ]),
  ])
