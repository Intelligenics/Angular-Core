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
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component( {
    selector: "int-app-about",
    templateUrl: 'about.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['about.component.scss']
} )
export class AboutComponent implements OnInit
{
    /** name of the product */
    public productName: string;

    /** version of the product */
    public version: string;

    /** legal disclaimer of the product */
    public disclaimer: string;

    private readonly subscriptions: Array<Subscription>;

    constructor( private readonly router: Router, private readonly activatedRoute: ActivatedRoute )
    {
        this.subscriptions = [];

        this.subscriptions.push( this.activatedRoute.data.subscribe( () =>
        {
            const navigation: any = router.getCurrentNavigation();

            if ( null != navigation && null != navigation.extras && null != navigation.extras.state )
            {
                this.productName = navigation.extras.state.productName;
                this.version = navigation.extras.state.version;
                this.disclaimer = navigation.extras.state.disclaimer;
            }
        } ) );
    }

    public ngOnInit(): void
    {
    }
    public onCloseClicked(): void
    {
        this.router.navigate( [{ outlets: { dialog: null } }] );
    }
}
