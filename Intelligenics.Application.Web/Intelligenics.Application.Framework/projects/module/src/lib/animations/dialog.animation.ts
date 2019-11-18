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

/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
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
