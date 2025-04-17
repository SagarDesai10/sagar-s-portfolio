import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactModel, ContactInfoModel } from '../../models/contact.model';
import { CONTACT_INFO_DATA } from '../../data/contact.data';


declare const grecaptcha: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent implements OnInit {
  contactFormData: ContactModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  contactInfo: ContactInfoModel = CONTACT_INFO_DATA;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmitting = true;
  
    grecaptcha.enterprise.ready(() => {
      grecaptcha.enterprise.execute('6LcgCRwrAAAAABOKrQb5waO_T6nCk6EPJxBmZMb-', { action: 'submit' }).then((token: string) => {
           const payload = {
              ...this.contactFormData,
              'g-recaptcha-response': token
            };
        
     this.http.post('https://formcarry.com/s/P_116o4ja5M', payload).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          this.resetForm();

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        },
        error: () => {
          alert('Something went wrong. Please try again later.');
          this.isSubmitting = false;
        },
        complete: () => {
            this.isSubmitting = false;
        }
      });

      });
    });
  }
  
  private resetForm(): void {
    this.contactFormData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
