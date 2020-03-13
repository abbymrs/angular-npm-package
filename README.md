<h4>Install dependency</h4>
```
npm i -S custom-ng-input
```

<h4>In angular.json, add dependent styles</h4>
```json
"styles": [
    "./node_modules/primeng/resources/themes/nova-light/theme.css",
    "./node_modules/primeng/resources/primeng.min.css",
    "./node_modules/custom-input/custom-input.css",
    "src/styles.scss"
]
```
<h4>In app.module.ts, import CustomInputModule</h4>

```ts
...
import { FormsModule } from '@angular/forms';
import { CustomInputModule } from 'custom-input';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule
        CustomInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```

<h4>In app.component.ts, declare inputControl</h4>
```ts
inputControl = {
    model: "",
    type: "text",
    className: "user-name",
    controlName: "userName",
    placeholder: "user name",
    isRequired: true,
    pattern: "w"
};
```
<h4>In app.component.html, use custom-input tag</h4>
```html
<custom-input
    [(ngModel)]="inputControl.model"
    [name]="inputControl.controlName"
    [control]="inputControl"
    [required]="inputControl.isRequired"
    [email]="inputControl.type === 'email'"
    [pattern]="inputControl.pattern"
>
</custom-input>
```
<h4>Component Examples</h4>

<h6>Text input</h6>
```ts
inputControl = <inputItem>{
  model: "",
  type: "text",
  className: "user-name",
  controlName: "userName",
  placeholder: "user name",
  isRequired: true,
  pattern: "w"
};
```
```html
<custom-input
  [(ngModel)]="inputControl.model"
  [name]="inputControl.controlName"
  [control]="inputControl"
  [required]="inputControl.isRequired"
  [email]="inputControl.type === 'email'"
  [pattern]="inputControl.pattern">
</custom-input>
```

<h6>Textarea input</h6>
```ts
inputControl = <inputItem>{
  model: "",
  type: "textarea",
  className: "remarks form-textarea",
  controlName: "remarks",
  placeholder: "remarks",
  isRequired: true,
  pattern: ""
};
```
```html
<custom-input
  [(ngModel)]="inputControl.model"
  [name]="inputControl.controlName"
  [control]="inputControl"
  [required]="inputControl.isRequired"
  [email]="inputControl.type === 'email'"
  [pattern]="inputControl.pattern">
</custom-input>
```

<h6>Email input</h6>
```ts
inputControl = <inputItem>{
  model: "",
  type: "email",
  className: "email",
  controlName: "email",
  placeholder: "email",
  isRequired: true,
  pattern: ""
};
```
```html
<custom-input
  [(ngModel)]="inputControl.model"
  [name]="inputControl.controlName"
  [control]="inputControl"
  [required]="inputControl.isRequired"
  [email]="inputControl.type === 'email'"
  [pattern]="inputControl.pattern">
</custom-input>
```

<h6>Number input</h6>
```ts
inputControl = <inputItem>{
model: "",
type: "number",
className: "stock",
controlName: "stock",
placeholder: "stock",
isRequired: true,
pattern: "",
minNumber: 12,
isIntegerOnly: true // if allow float number, just remove this field
};
```
```html
<custom-input
[(ngModel)]="inputControl.model"
[name]="inputControl.controlName"
[control]="inputControl"
[required]="inputControl.isRequired"
[email]="inputControl.type === 'email'"
[pattern]="inputControl.pattern">
</custom-input>
```

<h6>Datepicker</h6>
```ts
inputControl = <inputItem>{
model: "",
type: "calendar",
className: "started-date",
controlName: "startedDate",
placeholder: "Started Date",
isRequired: true
};
```
```html
<custom-input
[(ngModel)]="inputControl.model"
[name]="inputControl.controlName"
[control]="inputControl"
[required]="inputControl.isRequired"
[email]="inputControl.type === 'email'"
[pattern]="inputControl.pattern">
</custom-input>
```
