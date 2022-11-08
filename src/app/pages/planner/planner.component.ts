import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks = [
    {
      text: 'Task1',
      done: false,
    },
  ];
  inputValue = '';

  addTask(): void {
    if (this.inputValue !== '') {
      const newTask = { text: this.inputValue, done: false };

      this.inputValue = '';

      this.plannerTasks.push(newTask);
    }
  }
  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }

  getUnfinishedTasks(): number {
    return this.plannerTasks.filter((task) => task.done).length;
  }

  clearAllList(): void {
    this.plannerTasks.splice(0);
  }
}
