import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { LoadingService } from '../loading.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'contact-me',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  public contact: FormGroup;

  constructor(
    private contactService: ContactService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contact = new FormGroup({
      company: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
  }

  public submit() {
    this.loadingService.toggle();
    this.contactService.publish(this.contact.value).subscribe(
      (res) => {
        if (res.status === 200) {
          this.contact.reset({});
          this.router.navigate(['thankyou']);
        } else {
          this.contact.setErrors({
            serverError: true,
          });
        }
        this.loadingService.toggle();
      },
      (error) => {
        console.log(error);
        this.contact.setErrors({
          serverError: true,
        });
        this.loadingService.toggle();
      }
    );
  }
}
