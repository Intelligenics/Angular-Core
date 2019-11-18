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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component( {
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'int-app-progress',
    styleUrls: ['progress.component.scss'],
    templateUrl: 'progress.component.html'
} )
export class ProgressComponent implements OnDestroy
{
    public loading: boolean;
    private readonly subscriptions: Array<Subscription>;

    constructor(
        public readonly loadingService: LoadingService,
        private readonly changeDetectorRef: ChangeDetectorRef )
    {
        this.subscriptions = [];
        this.loading = false;

        this.loadingService.loadingChangedEvent.subscribe( ( value ) =>
        {
            this.loading = value > 0;
            this.changeDetectorRef.detectChanges();
        } );
    }

    public ngOnDestroy(): void
    {
        this.subscriptions.forEach( item => item.unsubscribe() );
    }

}
