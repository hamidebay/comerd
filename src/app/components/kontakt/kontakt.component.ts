import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MailSenderService } from 'src/app/services/mail-sender.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mailSender: MailSenderService
    ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firma: ['', [Validators.required, Validators.minLength(3)]],
      telefon: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      messageText: [''],
      address: this.fb.group({
        street: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        postalCode: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  getErrorMessage() {
    if (this.contactForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.contactForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    const mailinfo = this.contactForm.value;
    console.log(mailinfo);
    this.mailSender.sendMail(mailinfo)
                    .subscribe(data =>
                      console.log(data)
                    );
  }

}
