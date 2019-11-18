//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Matthew Parton M.Sc
///
/// This program is free software: you can redistribute it and / or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see < https://www.gnu.org/licenses/>.
///
/// Contact information
///
/// Name: Matthew Parton M.Sc
///
/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component( {
    selector: "int-app-about",
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss'],
    encapsulation: ViewEncapsulation.None
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
