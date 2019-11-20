/** The core interface to use for the navigation  component items */
export interface IMenuItem
{  
    /** menu text */
    text: string;

    /** Font awesome icon path */
    icon: string;

    /** Indicates if the item has children. This will show a expand option if true */
    hasChildren: boolean;


    /** A child collection of items nested under this item */
    items: Array<IMenuItem>;
}
