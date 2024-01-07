import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  name: string = '';
  id: string = '';
  exp: string = '';
  dob: Date = new Date();
  dept: string = '';
  salary: string = '';

  empArray: Array<any> = [];

  // Validation messages
  validationMessages: any = {
    name: '',
    id: '',
    exp: '',
    dob: '',
    dept: '',
    salary: '',
  };

  

   
  onSubmit() {
    
      this.empArray.push({
        name: this.name,
        id: this.id,
        exp: this.exp,
        dob: this.dob,
        dept: this.dept,
        salary: this.salary,
      });
      console.log(this.empArray);
      this.resetForm();
     
}

  onDelete(index: number) {
    this.empArray.splice(index, 1);
  }

  resetForm() {
    this.name = '';
    this.id = '';
    this.exp = '';
    this.dept = '';
    this.dob = new Date();
    this.salary = '';
    this.validationMessages = { name: '', id: '', exp: '', dob: '', dept: '', salary: '' };
  }
}
