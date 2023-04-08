import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KendobuttocmComponent } from './kendobuttocm/kendobuttocm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { KendoTextboxComponent } from './kendo-textbox/kendo-textbox.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoDropdownComponent } from './kendo-dropdown/kendo-dropdown.component';
import { KendoMultiselectComponent } from './kendo-multiselect/kendo-multiselect.component';
import { KendoDatepickerComponent } from './kendo-datepicker/kendo-datepicker.component';
import { KendoWindowComponent } from './kendo-window/kendo-window.component';
import { WindowModule } from "@progress/kendo-angular-dialog";
import { KendoDialogComponent } from './kendo-dialog/kendo-dialog.component';
import { KendoDaterangeComponent } from './kendo-daterange/kendo-daterange.component';
import { FloatingLabelModule } from "@progress/kendo-angular-label";

import { GridModule } from "@progress/kendo-angular-grid";
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    KendobuttocmComponent,
    KendoTextboxComponent,
    KendoDropdownComponent,
    KendoMultiselectComponent,
    KendoDatepickerComponent,
    KendoWindowComponent,
    KendoDialogComponent,
    KendoDaterangeComponent,
    KendoGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule,
    FormsModule,
    DateInputsModule,
    WindowModule,
    FloatingLabelModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
