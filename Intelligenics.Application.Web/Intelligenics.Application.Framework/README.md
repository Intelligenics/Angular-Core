# Intelligenics Angular Application Framework

This project provides a starter kit for beginning any angular project.  In most projects you will need a system to host dialogs, show alerts,  show sidebars, catch api errors meaningfully, ensure the user has logged in via security. This framework provides you with that out the box.  This is what is included with the framework

- Dialogs via routing and services
- Sidebars via routing and services
- Alerts through services
- About box via services
- API error trapping via HttpClient and angular interceptors
- Login authentication via routing using bearer tokens
- Progress indicator automatically shown when hitting APIs


# Demo
Here is a full demonstration of the features being used.
![Demonstration](demos/demo.gif)


# Installation
This framework creates a hosting html framework through angular routing, to post your product specific routes into. This takes care of placing the dialogs and all the other components automatically for you. 


## Step 1

In your Angular 8+ project directory open a command line and run the following command 

```
npm i @intelligenics/application-framework  
```

In your main application NgModule 

```
import { FrameworkModule } from '@intelligenics/application-framework
```

## Step 2
You now you need to add routes to the application so the system knows how to load your pages. 

First add a reference to the top of your routing file.

```
import { ApplicationRoutes } from '@intelligenics/application-framework';
```

Then in your main body add your specific routes the the system.  Here is an example for setting the main routes, dialog routes and sidebar routes for the application. Yours will be different but this will give you and idea of how to initialise your routing table. 

```

ApplicationRoutes.append(
    [
        // Primary Routes
        {
            path: '',
            component: TestComponent
        },
    ]);

DialogRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ]
);

SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: NavigationComponent
        },
    ],
    SidebarPosition.Left
);

SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: NavigationComponent
        },
    ],
    SidebarPosition.Right
);
SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ],
    SidebarPosition.Top
);
SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ],
    SidebarPosition.Bottom
);

export const AppRouting = RouterModule.forRoot(ApplicationRoutes.AppRoutes,
    {
        // enableTracing: true
    });
```

## Step 3
Lastly in your main application you must ensure the application routes have been imported.  Once you have done this you should be ready to go. 

```

@NgModule(
    {
        declarations:
            [
                AppComponent,
                TestComponent,
                ContentComponent,
                NavigationComponent,
            ],
        imports:
            [
                BrowserAnimationsModule,
                BrowserModule,
                AppRouting,            //  You must add this link to your main application module
                FrameworkModule,
            ],
        providers:
            [
            ],
        bootstrap:
            [
                AppComponent,
            ]
    } )
export class AppModule { }

```
# Final Step
You must make sure you main host window is fully sized to the width and height of hte window. The easiest way to do this is add 
this to your main body or host element. This ensure the window will size correctly for your application.

```
body
{
    display: flex;
    flex-direction: column;
    flex: 1;
}
```

Your will also need a settings file that is called settings.json to be output to your assets folder when deployed. This must be hosted under the root folder as assets/settings.json. In production you should enable security by setting isEnabled to true. This application assumes you will be using SSO to acquire a token. This is maintained as a cookie on the main application. You must ensure your cookie is available to this domain also to function correctly. 

```
{
  "authentication":
  {
    "isEnabled": false, // Enable this for production
    "authenticationCookie": "MyAuthenticationCookie",
    "authenticationUrl": "http://signin.myapplication.com"
  }
}

``` 

# Usage


Once you have the framework referenced in the main module you will see the place holders automatically loaded in your html window when running the application.  

```HTML
<int-app-progress></int-app-progress>
<router-outlet name="topsidebar"></router-outlet>
<router-outlet name="leftsidebar"></router-outlet>
<router-outlet name="bottomsidebar"></router-outlet>
<router-outlet name="rightsidebar"></router-outlet>
<router-outlet name="dialog"></router-outlet>
<router-outlet name="framework"></router-outlet>
<router-outlet name="security"></router-outlet>
<div class="int-app-framework__application">
  <router-outlet></router-outlet>
</div>
<router-outlet name="snackbar"></router-outlet>
```

These allow for the framework to automatically guard secured routes and inject your routes into the main SPA application. These place holders ensure the framework is layed out correctly and dialogs and alerts and sidebars show correctly. 



## Error handling
As long as your are using HttpClient the system will automatically intercept any API errors. To report errors or handle them in your own way import the  errorservice in your class constructor and sign up to the httpErrorEvent this way you can trap and manage errors in any way you want to. 

### Custom Error Handling

If you wish to prevent the default snackbar being used to show an error you can do so. 

Step1. Import the error service and 

```
@import {ErrorService,HttpErrorEventArgs} from '@intelligenics/application-framework';

```

Step 2. Now add the error service to your constructor and handle the error as needed. Please note if you do not unsubscribe from the event all errors will be handled by your code directly and everybody's errors will be cancelled. Make sure you understand the implications of the this. 

```
constructor(private readonly errorService:ErrorService)
{
    let sub = errorService.httpError$.subscribe((response:HttpErrorResponse)=>
    { 
        // You error handling response
    }, 
    null,
    ()=>sub.unsubscribe())
}
```

## Framework 

To access all the framework functions you can import any of the services into your constructor. 

```
constructor( 
        private readonly dialogService: DialogService,
        private readonly snackbarService: SnackbarService,
        private readonly sidebarService: SidebarService )
    {

    }
```

Assuming you have added routes for your dialogs or sidebars as described above, you can access any of them using the following methods.  

FYI you can run the project directly from the cli and see each of them running


## Sidebars
To show a sidebar call the sidebar show method and select the route and the position to show it from. The sidebar supports top bottom , left or right. The first parameters it he route path. 
```
        this.sidebarService.show( 'content', SidebarPosition.Left );
```  

## Dialogs
Dialogs are very similar. 
```
 this.dialogService.show( 'content', 'This is the title text here' );
```


if you want to show a dialog that prevents the user from closing it, you must handle the closing event and set the allowClose option to false. 

```
let sub = this.dialogService.dialogClosingEvent.subscribe((value) =>
        {
            sub.unsubscribe();
        });
        this.dialogService.show('myroutepath', 'my dialog title', false);
```

If you want to prevent the dialog from showing 
## Alerts
To show and alert dialog call the the relavent alert type function from the dialog service

```
this.dialogService.error('my title', 'Oh dear this happened' );
this.dialogService.warning('my title', 'Oh dear this happened' );
this.dialogService.info('my title', 'Oh dear this happened' );
```

The alert support a customisable alert option also 

```
        let sub = this.dialogService.dialogClosingEvent.subscribe( ( value ) =>
        {
            this.snackbarService.info( `you selected ${DialogOptions[value.selectedOption]} ` );
            sub.unsubscribe();
        } );
        this.dialogService.alert( 'this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.YesNo );
```


## Snackbars
Shackbars follow a similar format to the dialog alerts 

``` 
this.snackbarService.error('my title', 'Oh dear this happened' );

this.snackbarService.warning('my title', 'Oh dear this happened' );

this.snackbarService.info('my title', 'Oh dear this happened' );
```

## About box

An about box is supported to allow you to show custom about messages to your users. To show the about box call the 
about link. Obviously you can create your own dialog and host as shown above. 

```
 let productName = 'Intelligenics Angular Application Framework';
        let version = '2.0.1';
        let disclaimer = 'Copyright (C) 2019  Intelligenics\r\n \
        \
        Intelligenics Angular Application Framework\
        Copyright(C) 2019 Intelligenics Ltd.\
        \
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),\
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,\
        sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,\
        subject to the following conditions:\
        \
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\
        \
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, \
        DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE \
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
        
        this.dialogService.about( version, disclaimer, productName );
```

# Styling

The framework can be styled using the css variables provided. You can view the SCSS files directly for more information by viewing the scsss files in the source folders.

## Alerts 

* --int-app-alert-background
* --int-app-alert-border-radius
* --int-app-alert-color
* --int-app-alert-shadow
* --int-app-alert-backdrop-background
* --int-app-alert-error
* --int-app-alert-warning
* --int-app-alert-info

## Snackbars

* --int-app-snackbar-background
* --int-app-snackbar-border-radius
* --int-app-snackbar-color
* --int-app-snackbar-shadow
* --int-app-snackbar-backdrop-background
* --int-app-snackbar-error
* --int-app-snackbar-warning
* --int-app-snackbar-info

## Sidebars

* --int-app-sidebar-background 
* --int-app-sidebar-shadow

## Dialogs

* --int-app-dialog-background
* --int-app-dialog-border-radius
* --int-app-dialog-title-background
* --int-app-dialog-title-color
* --int-app-dialog-shadow
* --int-app-dialog-backdrop-background

## Progress

* --int-app-progress
* --int-app-progress-bar
* --int-app-progress-height
 
# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

# Contact Information

Feel free to contact me using the following details

- Name: Matthew Parton M.Sc.
- LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
- Website: http://www.intelligenics.co.uk
- Email: matthewparton@intelligenics.co.uk

## Licence
Copyright 2019  Intelligenics Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
