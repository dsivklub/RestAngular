import { Component } from "@angular/core";
import { BackendService } from "./backend.service";

interface Student {
  name: string;
  surname: string;
  assessment: number;
}

interface StudentsGroupFromBack {
  id: number;
  students: Array<Student>;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  students: Array<Student> = [];
  constructor(private BackService: BackendService) {}

  getStudentFromBack() {
    this.BackService.getStudentsFromBack().subscribe(
      (students: StudentsGroupFromBack) => {
        for (let i = 0 ; i < students.students.length ; i++) {
        this.students.push(students.students[i]);
        }
        console.log(students.students);
        console.log(this.students);
      }
    );
  }
}
