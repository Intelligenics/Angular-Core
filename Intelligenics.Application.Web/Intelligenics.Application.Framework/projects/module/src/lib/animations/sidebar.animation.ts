import { trigger, transition, style, animate, query, state } from '@angular/animations';


export const leftSidebarOpenClose = trigger('leftSidebarOpenClose',
    [
        state('closed',
            style({
                opacity: 0,
                left: '-20%'
            })),
        transition(':enter',
            [
                style(
                    {
                        opacity: 0,
                        left: '-20%'
                    }),
                animate('0.5s ease-in',
                    style(
                        {
                            opacity: 1,
                            left: 0
                        }
                    )),
            ]),
        transition('* <=> closed', [
            style(
                {
                    opacity: 1,
                    left: 0
                }),
            animate('.2s ease-out',
                style(
                    {
                        opacity: 0,
                        left: '-20%'
                    }
                )),
        ])
    ]);


export const rightSidebarOpenClose = trigger('rightSidebarOpenClose',
    [
        state('closed',
            style({
                opacity: 0,
                right: '-20%'
            })),
        transition(':enter',
            [
                style(
                    {
                        opacity: 0,
                        right: '-20%'
                    }),
                animate('0.5s ease-in',
                    style(
                        {
                            opacity: 1,
                            right: 0
                        }
                    )),
            ]),
        transition('* <=> closed', [
            style(
                {
                    opacity: 1,
                    right: 0
                }),
            animate('.2s ease-out',
                style(
                    {
                        opacity: 0,
                        right: '-20%'
                    }
                )),
        ])
    ]);


export const topSidebarOpenClose = trigger('topSidebarOpenClose',
    [
        state('closed',
            style({
                opacity: 0,
                top: '-20%'
            })),
        transition(':enter',
            [
                style(
                    {
                        opacity: 0,
                        top: '-20%'
                    }),
                animate('0.5s ease-in',
                    style(
                        {
                            opacity: 1,
                            top: 0
                        }
                    )),
            ]),
        transition('* <=> closed', [
            style(
                {
                    opacity: 1,
                    top: 0
                }),
            animate('.2s ease-out',
                style(
                    {
                        opacity: 0,
                        top: '-20%'
                    }
                )),
        ])
    ]);



export const bottomSidebarOpenClose = trigger('bottomSidebarOpenClose',
    [
        state('closed',
            style({
                opacity: 0,
                bottom: '-20%'
            })),
        transition(':enter',
            [
                style(
                    {
                        opacity: 0,
                        bottom: '-20%'
                    }),
                animate('0.5s ease-in',
                    style(
                        {
                            opacity: 1,
                            bottom: 0
                        }
                    )),
            ]),
        transition('* <=> closed', [
            style(
                {
                    opacity: 1,
                    bottom: 0
                }),
            animate('.2s ease-out',
                style(
                    {
                        opacity: 0,
                        bottom: '-20%'
                    }
                )),
        ])
    ]);

