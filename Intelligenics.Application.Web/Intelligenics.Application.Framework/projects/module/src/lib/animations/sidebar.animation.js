"use strict";
//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Intelligenics Ltd.  
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,
/// sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
/// subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// 
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
/// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
/// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// 
/// Contact Information
/// 
/// Name: Matthew Parton M.Sc.
/// Feel free to contact me using the following details
Object.defineProperty(exports, "__esModule", { value: true });
/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
var animations_1 = require("@angular/animations");
exports.leftSidebarOpenClose = animations_1.trigger('leftSidebarOpenClose', [
    animations_1.state('closed', animations_1.style({
        opacity: 0,
        left: '-20%'
    })),
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            left: '-20%'
        }),
        animations_1.animate('0.5s ease-in', animations_1.style({
            opacity: 1,
            left: 0
        })),
    ]),
    animations_1.transition('* <=> closed', [
        animations_1.style({
            opacity: 1,
            left: 0
        }),
        animations_1.animate('.2s ease-out', animations_1.style({
            opacity: 0,
            left: '-20%'
        })),
    ])
]);
exports.rightSidebarOpenClose = animations_1.trigger('rightSidebarOpenClose', [
    animations_1.state('closed', animations_1.style({
        opacity: 0,
        right: '-20%'
    })),
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            right: '-20%'
        }),
        animations_1.animate('0.5s ease-in', animations_1.style({
            opacity: 1,
            right: 0
        })),
    ]),
    animations_1.transition('* <=> closed', [
        animations_1.style({
            opacity: 1,
            right: 0
        }),
        animations_1.animate('.2s ease-out', animations_1.style({
            opacity: 0,
            right: '-20%'
        })),
    ])
]);
exports.topSidebarOpenClose = animations_1.trigger('topSidebarOpenClose', [
    animations_1.state('closed', animations_1.style({
        opacity: 0,
        top: '-20%'
    })),
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            top: '-20%'
        }),
        animations_1.animate('0.5s ease-in', animations_1.style({
            opacity: 1,
            top: 0
        })),
    ]),
    animations_1.transition('* <=> closed', [
        animations_1.style({
            opacity: 1,
            top: 0
        }),
        animations_1.animate('.2s ease-out', animations_1.style({
            opacity: 0,
            top: '-20%'
        })),
    ])
]);
exports.bottomSidebarOpenClose = animations_1.trigger('bottomSidebarOpenClose', [
    animations_1.state('closed', animations_1.style({
        opacity: 0,
        bottom: '-20%'
    })),
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            bottom: '-20%'
        }),
        animations_1.animate('0.5s ease-in', animations_1.style({
            opacity: 1,
            bottom: 0
        })),
    ]),
    animations_1.transition('* <=> closed', [
        animations_1.style({
            opacity: 1,
            bottom: 0
        }),
        animations_1.animate('.2s ease-out', animations_1.style({
            opacity: 0,
            bottom: '-20%'
        })),
    ])
]);
//# sourceMappingURL=sidebar.animation.js.map