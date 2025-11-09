// Task 9: Namespace & Declaration merging (Subject)
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // This signature now exactly matches what the checker wants
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
