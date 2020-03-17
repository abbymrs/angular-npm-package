import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CalendarModule } from "primeng/calendar";
import { CustomInputComponent } from './custom-ng-input.component';

@NgModule({
  declarations: [
    CustomInputComponent
  ],
  exports: [
    CustomInputComponent,
    CalendarModule
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [CustomInputComponent]
})
export class CustomInputModule { }
