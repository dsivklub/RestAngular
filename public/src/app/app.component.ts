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
  constructor(private BackService: BackendService) {}

  getStudentFromBack() {
    this.BackService.getStudentsFromBack().subscribe(
      (students: StudentsGroupFromBack) => {
        console.log(students.id);
        console.log(students.students);
      }
    );
  }
}
