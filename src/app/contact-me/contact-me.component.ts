import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  public contact: UntypedFormGroup

  constructor(private contactService: ContactService, private loadingService: LoadingService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new UntypedFormGroup({
      company: new UntypedFormControl('', Validators.required),
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      role: new UntypedFormControl('', Validators.required),
      description: new UntypedFormControl('', [Validators.required])
    })
  }

  public submit() {
    this.loadingService.toggle()
    this.contactService.publish(this.contact.value).subscribe(res => {
      if (res.status === 200) {
        this.contact.reset({})
        this.router.navigate(['thankyou'])
      } else {
        this.contact.setErrors({
          serverError: true
        })
      }
      this.loadingService.toggle()
    }, error => {
      console.log(error)
      this.contact.setErrors({
        serverError: true
      })
      this.loadingService.toggle()
    })

  }

}
