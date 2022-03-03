import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../atoms/form-base';

@Component({
  selector: 'app-fields',
  templateUrl: './dynamic-form-field.component.html',
  styles:[`.mat-form-field-invalid{ color:#c7a166}; .mat-error{color:#c7a166} mat-hint{color:#c7a166}`]
})
export class DynamicFormFieldComponent {
  @Input() field!: FormBase<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid }
}
