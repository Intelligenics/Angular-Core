import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TreeItemComponent } from './components/treeitem/treeitem.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RootTemplateComponent, ChildTemplateComponent } from './components/navigation/template.component';



/**
 * This module contains all the components need by the application to function
 * and provides common services to the all other modules.
 * */
@NgModule({
    imports:
        [
            HttpClientModule,
            CommonModule, 
        ],
    exports:
        [
            NavigationComponent,
            RootTemplateComponent,
            ChildTemplateComponent,
        ],
    declarations:
        [ 
            NavigationComponent,
            TreeItemComponent,
            RootTemplateComponent,
            ChildTemplateComponent,
        ],
    providers:
        [
        ],
})
export class ComponentsModule { }
