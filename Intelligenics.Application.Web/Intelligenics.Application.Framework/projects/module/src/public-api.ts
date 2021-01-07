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


/*
 * Public API for a application framework module
 */
export * from './lib/framework.module';
export * from './lib/framework.routing';
export { ApplicationService } from './lib/services/application.service';
export { AuthenticationService } from './lib/services/authentication.service';
export * from './lib/services/error.service';
export * from './lib/services/dialog.service';
export * from './lib/services/sidebar.service';
export * from './lib/services/snackbar.service';

export { FrameworkComponent } from './lib/components/framework/framework.component';
export { SnackbarComponent } from './lib/components/snackbar/snackbar.component';
export { AlertComponent } from './lib/components/alert/alert.component';
export { DialogComponent } from './lib/components/dialog/dialog.component';
export { AboutComponent } from './lib/components/about/about.component';
export { ProgressComponent } from './lib/components/progress/progress.component';
export { LeftSideBarComponent, RightSideBarComponent, BottomSideBarComponent, TopSideBarComponent } from './lib/components/sidebar/sidebar.component';

