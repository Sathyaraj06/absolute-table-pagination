# absolute-table-pagination

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

Author: [Sathyaraj Kandasamy](https://sathya-me.netlify.app/)

##Code Implementation
You can install this package locally with npm.
```js
npm install absolute-table-pagination
 ```
##To install latest release and update package.json 
npm install absolute-table-pagination --save
 
##To import in the module
```js
import { AbsoluteTablePaginationModule } from 'absolute-table-pagination';

@NgModule({
  imports: [
    AbsoluteTablePaginationModule
  ]
})
```

##Implement in HTML file
```js
<absolute-table-pagination  [data]="JsonData" [rowCount]="RowCount" (slicedData)="setTableData($event)"></absolute-table-pagination>
```
##Implement in TS file
```js
import { ChangeDetectorRef } from '@angular/core';

export class AppComponent {
    JsonData = [] //entire array of json data
    RowCount = 10; //no of rows to be displayed in table
    TableData : any; //to be binded with table for rows

    constructor(private cref: ChangeDetectorRef) {}

    setTableData(data: any) {
        this.TableData = data; //sliced table data based on the page number selected
        this.cref.detectChanges();
    }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
