import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from 'E:/4twin/angular/Workshops/Angular18_4TWIN4_25_26/src/app/shared/validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addEventForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[a-zA-Z ]+$')   // letters + spaces only
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(30)
        ]
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d+)?$/)  // number or decimal
        ]
      ],
      nbPlaces: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]?$|^100$/) // 1–100
        ]
      ],
      date: [
        '',
        [
          Validators.required,
          futurDateValidator(7) // min 7 days from today
        ]
      ],
      image: ['']
    });
  }

  onSubmit() {
    if (this.addEventForm.invalid) {
      this.addEventForm.markAllAsTouched();
      return;
    }

    console.log('📩 Event Submitted:', this.addEventForm.value);
    alert('✅ Event Added Successfully!');
  }
}
