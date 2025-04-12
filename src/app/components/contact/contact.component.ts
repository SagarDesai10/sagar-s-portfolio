import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactModel, ContactInfoModel } from '../../models/contact.model';
import { CONTACT_INFO_DATA } from '../../data/contact.data';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmitting = true;
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      this.resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 1500);
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
